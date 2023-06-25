from transformers import GPT3LMHeadModel, GPT3Tokenizer
import pinecone

import os
from dotenv import load_dotenv
from pathlib import Path  

env_path = Path('..') / '.env.local'
load_dotenv(dotenv_path=env_path)

pinecone_key = os.getenv('PINECONE_API_KEY')
pinecone_index_name = os.getenv('PINECONE_INDEX_NAME')
pinecone_enviroment = os.getenv('PINECONE_ENVIROMENT')

pinecone.init(api_key=pinecone_key, environment=pinecone_enviroment)
index_name = pinecone_index_name

model_name = "microsoft/DialoGPT-medium"
tokenizer = GPT3Tokenizer.from_pretrained(model_name)
model = GPT3LMHeadModel.from_pretrained(model_name)

# Connect to your Pinecone vector index
index = pinecone.Index(index_name=index_name)

def get_chat_response(prompt):
    # Query your vector index for additional context
    vector_results = index.query(queries=[prompt], top_k=5)
    
    # Let's assume that the vector_results contains meaningful context information that
    # can be converted to text. Depending on the nature of your vectors and how they were
    # trained, this might not be a valid assumption.
    # Convert the first result to text:
    additional_context = vector_results[0].to_text() 

    # Combine the prompt with additional context
    combined_prompt = prompt + " " + additional_context
    
    # Encode the prompt to tokens
    input_ids = tokenizer.encode(combined_prompt, return_tensors="pt")
    
    # Generate a response
    output = model.generate(input_ids, max_length=1000, temperature=0.7, pad_token_id=tokenizer.eos_token_id)
    
    # Decode the response
    response = tokenizer.decode(output[:, input_ids.shape[-1]:][0], skip_special_tokens=True)
    
    return response
