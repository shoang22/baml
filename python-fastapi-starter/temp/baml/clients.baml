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