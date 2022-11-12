import requests
import json

from dotenv import load_dotenv

config = load_dotenv()


url = "https://serpapi.com/search?engine=google_maps"

from serpapi import GoogleSearch

start = 0

while True:
    params = {
        "engine": "google_maps",
        "ll": "@43.074761,-89.3837613,10z",
        "q": "restaurants",
        "type": "search",
        "api_key": config['SERPAPI_KEY'],
        "start": start,
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    json_object = json.dumps(results, indent=4)
 
    # Writing to sample.json
    with open(f"data_raw/{start}.json", "w+", encoding='utf-8') as outfile:
        outfile.write(json_object)

    local_results = results["local_results"]
    if len(local_results) == 0:
        break

    start += 20

    
