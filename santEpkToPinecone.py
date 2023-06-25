import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI
import pinecone

app = FastAPI()

pinecone.init(api_key="<YOUR_API_KEY>")
index_name = "<YOUR_INDEX_NAME>"

@app.post("/scrape_and_store")
async def scrape_and_store_website(url: str):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, "html.parser")

        image_urls = [image.get("src") for image in soup.find_all("img")]
        texts = [paragraph.text.strip() for paragraph in soup.find_all("p")]
        hrefs = [link.get("href") for link in soup.find_all("a")]

        vector_data = image_urls + texts + hrefs
        pinecone_index = pinecone.Index(index_name)
        pinecone_index.upsert(ids=vector_data, vectors=vector_data)

        return {"message": "success"}

    except Exception as e:
        return {"message": "failure", "error": str(e)}