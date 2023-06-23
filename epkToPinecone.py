# Goal: Develop an Electronic press kit with an artist's bio, photos, music 
# links, and social media links that are saved to a Pinecone vector database

import pinecone
import numpy as np
import json
import os
from dotenv import load_dotenv

load_dotenv()

GCP_PROJECT_ID = 

pinecone.init(api_key = os.getenv("PINECONE_API_KEY"))