## Setup

Open this project up in VSCode (we recommend only opening this folder, and not at the root, or VSCode may not detect the python environment and you may not get type completions for BAML functions).

Ensure your `settings.json` has:

```
{
  "python.analysis.typeCheckingMode": "basic"
}
```

1. Run `poetry install`
2. Run `poetry shell`
3. Open up vscode command palette (command + shift + p, and select the .venv folder that was created in this directory as the interpreter)
4. Add and configure your model in `baml_src/clients.baml` (ie. for [Azure OpenAI models](https://docs.boundaryml.com/ref/llm-client-providers/open-ai-from-azure))
5. Add your env vars to a .env file (OPENAI_API_KEY, or you can switch the client in clients.baml)
6. Create and place your BAML file in `baml_src/` (remember to assign the desired model in the BAML object definition)
7. Run `uvicorn fast_api_starter.app:app --reload` (can use endpoints via Swagger docs)
