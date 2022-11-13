import json

from dotenv import dotenv_values

config = dotenv_values('.env')
# Load JSON from data.json
with open('data.json') as f:
    data = json.load(f)

from serpapi import GoogleSearch
import os

seen_before = set()
for file in os.listdir("image_data"):
    if file.endswith(".json"):
        seen_before.add(file.replace(".json", ""))

for place_id, restaurant in data.items():
    if restaurant['data_id'] in seen_before:
        continue
    data_id = restaurant['data_id']
    params = {
        "engine": "google_maps_photos",
        "data_id": data_id,
        "api_key": config['SERPAPI_KEY'],
        "category_id": "CgIYIA" # Food
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    json_object = json.dumps(results, indent=4)
 
    # Writing to sample.json
    with open(f"image_data/{data_id}.json", "w+", encoding='utf-8') as outfile:
        outfile.write(json_object)