from flask import Flask, jsonify, request
from sklearn.cluster import AgglomerativeClustering
from scipy.spatial.distance import cdist
from flask_cors import CORS
import numpy as np
import pygeodesic.geodesic as geodesic


app = Flask(__name__)
CORS(app)
# # MongoDB connection
# mongo_client = pymongo.MongoClient('mongodb+srv://mumbaihacks2023:rupalimam@cluster0.pdai2zp.mongodb.net/?retryWrites=true&w=majority')
# db = mongo_client['test']
# collection = db['complaints']

# Endpoint for performing clustering


@app.route('/cluster', methods=['POST'])
def cluster():
    # Get the JSON data from the request
    # data = list(collection.find())
    data = request.get_json()
    request_ids, latitude, longitude = [], [], []
    print(data)
    for i in range(len(data["complaints"])):

        request_ids.append(data["complaints"][i]['_id'])
        latitude.append(data["complaints"][i]['latitude'])
        longitude.append(data["complaints"][i]['longitude'])
        # arr.append((data["complaints"][i]['latitude'],data["complaints"][i]['longitude']))
    poistions_consisdered = [False]*len(latitude)
    print(len(poistions_consisdered))
    radius = 5000
    res =[]
    for i in range(len(latitude)):
        ref_lat = float(latitude[i])
        ref_long = float(longitude[i])
        positions_considered = []

        for j in range(len(latitude)+1):
            if not positions_considered[j]:
                distance = (((float(latitude[j]) - ref_lat)**2 + (float(longitude[j]) - ref_long)**2)**(1/2))

            if distance <= radius:
                positions_considered.append(j)

        if len(positions_considered) >= 2:
            for k in range(len(positions_considered)):
                poistions_consisdered[k] = True
            res.append(positions_considered.copy())
    return jsonify(data)

# Run the Flask server
if __name__ == '__main__':
    app.run(debug=True)
