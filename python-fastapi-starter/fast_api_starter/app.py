from contextlib import asynccontextmanager
import tempfile
import inspect
import shutil
import subprocess
import importlib
from typing import AsyncContextManager
from fastapi import FastAPI, HTTPException, UploadFile
import os

import pymupdf


from dotenv import load_dotenv

load_dotenv()

app = FastAPI()


@asynccontextmanager
async def setup_baml(file: UploadFile) -> AsyncContextManager[str]:
    if not file.filename.endswith(".baml"):
        raise HTTPException(status_code=422, detail="Upload must have .baml extension")

    bamldir = os.path.join("temp", "baml")
    if not os.path.isdir(bamldir):
        os.makedirs(bamldir)

    with tempfile.TemporaryDirectory(dir=bamldir) as tmpdir:
        outdir = os.path.join(tmpdir, "baml_src")
        os.makedirs(outdir, exist_ok=True)

        shutil.copy(src="./baml_src/clients.baml", dst=outdir)

        with open(os.path.join(outdir, f"{file.filename}"), "wb") as f:
            f.write(await file.read())

        subprocess.run(f"poetry run baml-cli generate --from {outdir}", shell=True)
        yield os.path.dirname(outdir)


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
