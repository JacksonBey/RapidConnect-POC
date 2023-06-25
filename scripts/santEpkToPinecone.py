import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI
from pydantic import BaseModel
import pinecone

class UrlModel(BaseModel):
    url: str

app = FastAPI()

pinecone.init(api_key="ea5d0414-36b9-4d8c-92f0-4ecc903aceb8")
index_name = "rapid-connect-poc"

# pinecone.init(api_key=)
# index_name = 

@app.post("/scrape_and_store")
async def scrape_and_store_website(url_model: UrlModel):
    url = url_model.url
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, "html.parser")

        image_urls = [image.get("src") for image in soup.find_all("img")]
        texts = [paragraph.text.strip() for paragraph in soup.find_all("p")]
        hrefs = [link.get("href") for link in soup.find_all("a")]

        # need to convert this to valid vector data
        vector_data = image_urls + texts + hrefs


        pinecone_index = pinecone.Index(index_name)
        pinecone_index.upsert(ids=vector_data, vectors=vector_data)

        return {"message": "success"}

    except Exception as e:
        return {"message": "failure", "error": str(e)}



