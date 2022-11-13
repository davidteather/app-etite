'''
Reads in all files from image.data if they contain the key error and removes them from the file.
'''
import os
import json

def remove_exhausted_searches():
    for file in os.listdir("image_data"):
        if file.endswith(".json"):
            with open("image_data/" + file) as f:
                parsed = json.load(f)
                if parsed.get('error', '') == "Your searches for the month are exhausted. You can upgrade plans on SerpApi.com website.":
                    os.remove("image_data/" + file)

remove_exhausted_searches()