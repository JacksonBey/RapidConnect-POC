from fastapi import FastAPI
import requests
import json

app = FastAPI()

def get_channel_id(channel_name, api_key):
    url = f"https://www.googleapis.com/youtube/v3/search?part=id&type=channel&q={channel_name}&key={api_key}"

    response = requests.get(url)
    data = json.loads(response.text)

    if 'items' in data and len(data['items']) > 0:
        return data['items'][0]['id']['channelId']
    else:
        return None

def get_recent_live_streams(channel_name, api_key, num_streams=5):
    channel_id = get_channel_id(channel_name, api_key)

    if channel_id is None:
        return []

    url = f"https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={channel_id}&eventType=live&type=video&maxResults={num_streams}&key={api_key}"

    response = requests.get(url)
    data = json.loads(response.text)

    live_streams = []
    for item in data['items']:
        video_id = item['id']['videoId']
        title = item['snippet']['title']
        scheduled_start_time = item['snippet']['publishedAt']

        description = get_video_description(video_id, api_key)

        live_stream = {
            "video_id": video_id,
            "title": title,
            "scheduled_start_time": scheduled_start_time,
            "description": description
        }
        live_streams.append(live_stream)

    return live_streams

def get_video_description(video_id, api_key):
    url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet&id={video_id}&key={api_key}"

    response = requests.get(url)
    data = json.loads(response.text)

    if 'items' in data and len(data['items']) > 0:
        return data['items'][0]['snippet']['description']
    else:
        return ""

@app.get("/livestreams/{channel_name}")
def get_live_streams(channel_name: str):
    api_key = "YOUR_API_KEY"
    num_streams = 5

    live_streams = get_recent_live_streams(channel_name, api_key, num_streams)
    return live_streams
