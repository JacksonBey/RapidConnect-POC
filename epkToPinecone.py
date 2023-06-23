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

  # Save the JSON string to Pinecone
  pinecone.insert(items={artist_name: epk_json}
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