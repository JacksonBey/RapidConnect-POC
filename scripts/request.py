import requests

# Define the URL
url = "http://127.0.0.1:8000/scrape_and_store"

# Define the payload (data to send)
data = {"url": "https://en.wikipedia.org/wiki/Emmerson_Nogueira"}

# Make the POST request
response = requests.post(url, json=data)

# Print the response
print(response.json())


# curl -X POST -H "Content-Type: application/json" -d '{"url":"https://en.wikipedia.org/wiki/Emmerson_Nogueira"}' http://127.0.0.1:8000/scrape_and_store