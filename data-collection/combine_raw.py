import json
import os


# Read in data from data_raw and data_raw2 folders and combine it into one file

data = {}

'''
{
    "error": "Your searches for the month are exhausted. You can upgrade plans on SerpApi.com website."
}
'''

def iterate_return(data, raw):
    # Update thumbnail to have param of w1920-h1080 not the thumbnail one go full res
    for restaurant in raw.get('local_results', []):
        if "streetviewpixels" in restaurant.get('thumbnail', "streetviewpixels"):
            continue
        else:
            thumbnail = restaurant['thumbnail'].split("=")[0]
            restaurant['thumbnail'] = f"{thumbnail}=w1920-h1080"
            data[restaurant['place_id']] = restaurant

            
            lat = restaurant['gps_coordinates']['latitude']
            lon = restaurant['gps_coordinates']['longitude']
            restaurant['google_maps_url'] = f"https://www.google.com/maps/place/{restaurant['title']}/@{lat},{lon},17z/data=!3m1!4b1!4m5!3m4!1s{restaurant['data_id']}!8m2!3d{lat}!4d{lon}"

            raw_photos_path = "image_data/" + restaurant['data_id'] + ".json"
            if os.path.exists(raw_photos_path):
                with open(raw_photos_path) as f:
                    images = json.load(f)
                    photos = images.get('photos')
                    if photos is not None:
                        full_link = photos[0]['image'].split("=")[0]
                        restaurant['thumbnail'] = f"{full_link}=w1920-h1080"

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