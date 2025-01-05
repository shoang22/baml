client<llm> GPT4 {
  provider openai
  options {
    model gpt-4
    api_key env.OPENAI_API_KEY
  }
}

client<llm> GPT4Turbo {
  provider openai
  options {
    model gpt-4-turbo
    api_key env.OPENAI_API_KEY
  }
}

client<llm> GPT4o {
  provider openai
  options {
    model gpt-4o
    api_key env.OPENAI_API_KEY
  }
}


client<llm> GPT3 {
  provider baml-openai-chat
  options {
    model gpt-3.5-turbo
    api_key env.OPENAI_API_KEY
  }
}   


client<llm> CustomCodeQwen1_5 {
  provider openai-generic 
  options {
    base_url "http://localhost:8080/v1"
  }
}


client<llm> AzureGPT4 {
  provider azure-openai
  options {
    resource_name "my-resource-name"
    deployment_id "my-deployment-id"
    // Alternatively, you can use the base_url field
    // base_url "https://my-resource-name.openai.azure.com/openai/deployments/my-deployment-id"
    api_version "2024-02-01"
    api_key env.AZURE_OPENAI_API_KEY
  }
}