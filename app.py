from flask import Flask, jsonify, request
from sklearn.cluster import AgglomerativeClustering

from flask_cors import CORS , cross_origin
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
    result =[]
    for arr in data:
        result.append(arr[0])
        result.append(arr[3])
        result.append(arr[4])
    return jsonify(data)

# Run the Flask server
if __name__ == '__main__':
    app.run(debug=True)