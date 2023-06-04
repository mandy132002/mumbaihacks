from flask import Flask, jsonify, request
from sklearn.cluster import AgglomerativeClustering
from scipy.spatial.distance import cdist
from flask_cors import CORS
import numpy as np
import pygeodesic.geodesic as geodesic
from urllib.request import urlopen
import json
import math
from sklearn.cluster import DBSCAN
import numpy as np
from collections import Counter



app = Flask(__name__)
CORS(app)
# # MongoDB connection
# mongo_client = pymongo.MongoClient('mongodb+srv://mumbaihacks2023:rupalimam@cluster0.pdai2zp.mongodb.net/?retryWrites=true&w=majority')
# db = mongo_client['test']
# collection = db['complaints']

# Endpoint for performing clustering


@app.route('/cluster', methods=['POST'])
def cluster():
    url = "http://localhost:5002/complaints/getComplaints"
    response = urlopen(url)
    data = json.loads(response.read())
    complaints = data["complaints"]
    n = len(complaints)
    ids = []
    array = []
    for i in range(n):
        arr = []
        ids.append(data["complaints"][i]['_id'])
        arr.append(float(data["complaints"][i]['latitude']))
        arr.append(float(data["complaints"][i]['longitude']))
        array.append(arr.copy())
    
    geo_data = np.array(array[:])
    dbscan = DBSCAN(eps=0.1, min_samples=2)
    dbscan.fit(geo_data)
    labels = dbscan.labels_
    num_clusters = len(set(labels)) - (1 if -1 in labels else 0)

    counts = Counter(labels)
    listOfLabels = list(labels)
    myMap = {}

    for i in range(len(listOfLabels)):
        if listOfLabels[i] in myMap:
            myMap[listOfLabels[i]].append(i)
        else:
            myMap[listOfLabels[i]] = [i]

    print(myMap)
    
    result = []
    for key, val in myMap.items():
        arr = []
        if len(val) >= 3:
            for index in val:
                arr.append((array[index].copy()))
                arr.append(ids[index])
            result.append(arr.copy())
    
    print(result)
    return str(result)

# Run the Flask server
if __name__ == '__main__':
    app.run(debug=True)
