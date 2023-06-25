# Goal: Develop an Electronic press kit with an artist's bio, photos, music 
# links, and social media links that are saved to a Pinecone vector database

import pinecone
import json

import os
from dotenv import load_dotenv

load_dotenv()

pinecone.init(api_key=os.getenv('PINECONE_API_KEY'))

# uncomment when file deployed
# pinecone.init(api_key="YOUR_API_KEY_HERE")

def save_artist_epk(artist_name, bio, photos, music_links, social_links):
  # Combine all artist data into a single Python dictionary
  epk = {
    "name": artist_name,
    "bio": bio,
    "photos": photos,
    "music_links": music_links,
    "social_links": social_links
  }
  # Convert the Python dictionary to a JSON string
  epk_json = json.dumps(epk)

  bio_vector = text_to_vector(bio)

  # Initialize Pinecone index
  index = pinecone.Index('rapid-connect-poc')

  # Save the JSON string to Pinecone
  index.upsert(vectors=[{'id': artist_name, 'values': epk_json}]
)

# Close Pinecone Connection
pinecone.deinit()

# Call our `save_artist_epk` function to save an artist's EPK to our Pinecone vector database. For example:
# save_artist_epk(
#  artist_name="Artist Name",
#  bio="This is the artist's bio.",
#  photos=["http://example.com/photo1.jpg", "http://example.com/photo2.jpg"],
#  music_links=["http://example.com/music1.mp3", "http://example.com/music2.mp3"],
#  social_links=["http://example.com/social1", "http://example.com/social2"]
# )


# note: 
# "photos" are URLs to image data. To convert these into vectors, you would need to download the images and then use an image embedding model to create a vector representation of each image. Models like ResNet or VGG could be used for this purpose, but that would involve a substantial amount of additional code and complexity.
# "music_links" and "social_links" are also URLs. The appropriate way to handle these would depend on the specifics of your application. If the URLs point to music files or social media profiles that you want to analyze, you would need to download and process the data at these URLs in a similar manner to the photos.


# import torch
# from transformers import BertModel, BertTokenizer

# def text_to_vector(text):
#     # Load pre-trained model tokenizer (vocabulary)
#     tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

#     # Tokenize input
#     text_tokens = tokenizer.encode(text, add_special_tokens=True)
    
#     # Convert list of tokens to tensor
#     text_tokens_tensor = torch.tensor([text_tokens])

#     # Load the pre-trained BERT model
#     model = BertModel.from_pretrained('bert-base-uncased')

#     # Put the model in "evaluation" mode
#     model.eval()

#     # Use the model to compute embeddings
#     with torch.no_grad():
#         outputs = model(text_tokens_tensor)
    
#     # The "pooler output" is a summary of the content, 
#     # according to BERT model's pre-training.
#     embeddings = outputs.pooler_output

#     # Convert tensor to list and return
#     return embeddings[0].tolist()
