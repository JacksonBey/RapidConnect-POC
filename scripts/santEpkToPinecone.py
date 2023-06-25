import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI
from pydantic import BaseModel
import pinecone
import spacy
import os
from dotenv import load_dotenv
from pathlib import Path  
import numpy as np

env_path = Path('..') / '.env.local'
load_dotenv(dotenv_path=env_path)

nlp = spacy.load('en_core_web_lg')

class UrlModel(BaseModel):
    url: str

app = FastAPI()

pinecone_key = os.getenv('PINECONE_API_KEY')
pinecone_index_name = os.getenv('PINECONE_INDEX_NAME')
pinecone_enviroment = os.getenv('PINECONE_ENVIROMENT')

pinecone.init(api_key=pinecone_key, environment=pinecone_enviroment)
index_name = pinecone_index_name

@app.post("/scrape_and_store")
async def scrape_and_store_website(url_model: UrlModel):
    url = url_model.url
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, "html.parser")
        texts = [paragraph.text.strip() for paragraph in soup.find_all("p")]
        vector_data = texts
        vector_embeddings = []
        for i, text in enumerate(vector_data):
            vector = np.array(nlp(text).vector.round(5).tolist())
            # Check if vector is not a zero-vector
            if np.count_nonzero(vector):
                vector_embeddings.append((str(i), vector.tolist()))
        
        pinecone_index = pinecone.Index(index_name)

        # Check if vectors are not empty and have correct dimension
        if len(vector_embeddings) > 0 and len(vector_embeddings[0][1]) == nlp.vocab.vectors_length:
            pinecone_index.upsert(vectors=vector_embeddings)
            return {"message": "success"}
        else:
            return {"message": "failure", "error": "Generated invalid vectors."}
    except Exception as e:
        return {"message": "failure", "error": str(e)}
