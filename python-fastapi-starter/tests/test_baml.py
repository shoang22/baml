import importlib
import importlib.util
import inspect
import pdb
from fastapi.testclient import TestClient
import pytest
import pytest_asyncio

from fast_api_starter.app import app

from temp.baml.litty.baml_client import b


@pytest.fixture
def client():
    with TestClient(app=app) as c:
        yield c


@pytest.mark.asyncio
async def test_baml_infer():
    out = await b.AnalyzeBooks("the cat in the hat")
    print(out)


def test_upload_baml(client: TestClient):
    resp = client.post(
        "/baml",
        files={"file": open("baml_src/analyze_books.baml", "rb")},
        params={"prompt": "the cat in the hat"},
    )
    assert resp.status_code == 200
    print(resp.json())


@pytest.mark.asyncio
async def test_import_from_string(client: TestClient):
    baml_client = importlib.import_module(
        "temp.baml.0adb5ac2-9882-44b7-b1b8-2f0d56f50d0b.baml_client", "."
    )

    methods = [
        func
        for func, obj in inspect.getmembers(baml_client.b.__class__, inspect.isfunction)
        if func != "__init__"
    ]
    func = getattr(baml_client.b, methods[0])
    out = await func("the cat in the hat")
    print(out)
