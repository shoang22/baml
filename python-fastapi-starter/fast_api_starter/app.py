from contextlib import asynccontextmanager, contextmanager
import tempfile
import inspect
import pdb
import shutil
import subprocess
import importlib
from typing import AsyncContextManager
import uuid
from fastapi import FastAPI, HTTPException, UploadFile
import os

import pymupdf
from fastapi.responses import StreamingResponse
import asyncio

from pytest_asyncio.plugin import AsyncGenerator
from baml_client import b

from dotenv import load_dotenv

load_dotenv()

app = FastAPI()


@asynccontextmanager
async def setup_baml(file: UploadFile) -> AsyncContextManager[str]:
    if not file.filename.endswith(".baml"):
        raise HTTPException(status_code=422, detail="Upload must have .baml extension")

    with tempfile.TemporaryDirectory(dir=os.path.join("temp", "baml")) as tmpdir:
        outdir = os.path.join(tmpdir, "baml_src")
        os.makedirs(outdir, exist_ok=True)

        shutil.copy(src="./baml_src/clients.baml", dst=outdir)

        with open(os.path.join(outdir, f"{file.filename}"), "wb") as f:
            f.write(await file.read())

        subprocess.run(f"poetry run baml-cli generate --from {outdir}", shell=True)
        yield os.path.dirname(outdir)


def read_pdf(file: bytes) -> str:
    doc = pymupdf.open(stream=file)
    text = ""
    for page in doc:
        text += page.get_text()
    return text


@app.post("/baml")
async def extract_custom_baml(file: UploadFile, prompt: str):
    async with setup_baml(file=file) as baml_dir:
        baml_client = importlib.import_module(
            f"{os.path.relpath(baml_dir).replace("/", ".")}.baml_client", "."
        )

        methods = [
            func
            for func, _ in inspect.getmembers(
                baml_client.b.__class__, inspect.isfunction
            )
            if func != "__init__"
        ]
        baml_method = getattr(baml_client.b, methods[0])
        return await baml_method(prompt)
