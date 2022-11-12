import json

from dotenv import dotenv_values

config = dotenv_values('.env')
# Load JSON from data.json
with open('data.json') as f:
    data = json.load(f)

from serpapi import GoogleSearch

for place_id, restaurant in data.items():
    data_id = restaurant['data_id']
    params = {
        "engine": "google_maps_photos",
        "data_id": data_id,
        "api_key": config['SERPAPI_KEY']
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    json_object = json.dumps(results, indent=4)
 
    # Writing to sample.json
    with open(f"image_data/{data_id}.json", "w+", encoding='utf-8') as outfile:
        outfile.write(json_object)

    exit()