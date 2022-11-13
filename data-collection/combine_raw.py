import json
import os


# Read in data from data_raw and data_raw2 folders and combine it into one file

data = {}

def iterate_return(data, raw):
    # Update thumbnail to have param of w1920-h1080 not the thumbnail one go full res
    for restaurant in raw.get('local_results', []):
        if "streetviewpixels" in restaurant.get('thumbnail', "streetviewpixels"):
            continue
        else:
            thumbnail = restaurant['thumbnail'].split("=")[0]
            restaurant['thumbnail'] = f"{thumbnail}=w1920-h1080"
            data[restaurant['place_id']] = restaurant

for file in os.listdir("data_raw"):
    if file.endswith(".json"):
        with open("data_raw/" + file) as f:
            parsed = json.load(f)
            iterate_return(data, parsed)
for file in os.listdir("data_raw2"):
    if file.endswith(".json"):
        with open("data_raw2/" + file) as f:
            parsed = json.load(f)
            iterate_return(data, parsed)

print(len(data))

with open("data.json", "w") as f:
    json.dump(data, f, indent=4)