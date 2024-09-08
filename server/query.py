import numpy as np
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, VectorParams
import os

from pymongo import MongoClient
from sentence_transformers import SentenceTransformer, util
from PIL import Image

#Load CLIP model
model = SentenceTransformer('clip-ViT-B-32')
client_qdrant = QdrantClient(host='localhost', port=6333)
# Tạo collection
collection_name = 'clip-feature-3'

#Ket noi toi MongoDB
client = MongoClient('mongodb://root:123456@localhost:27018/')
db = client.NIDIM
collection = db.data

def decode_id(id):
    id_frame = id%1000
    v = int(((id - id_frame)/1000)%32)
    l = int(((id - id_frame)/1000-v)/32)
    return [f'L{l:02}_V{v:03}', id_frame]

def textQuery(text):
    result = []
    text_emb = model.encode([text])
    search_result = client_qdrant.search(collection_name=collection_name, query_vector=text_emb.tolist()[0], limit=500)
    for hit in search_result:
        video_frame, id_frame = decode_id(hit.id)
        document = collection.find_one({"_id": video_frame})
        url = document['url']

        frame = document['frames'][int(id_frame)-1]
        pts_time = frame['pts_time']
        fps = frame['fps']
        frame_idx = frame['frame_idx']
        data = {
            'video': video_frame, 
            'id': id_frame,
            'url': url,
            'pts_time': pts_time,
            'frame_idx': frame_idx,
            'fps': fps}
        result.append(data)
    return result


UPLOAD_FOLDER = 'uploads/'
def imageQuery():
    result = []
    img = [f for f in os.listdir(UPLOAD_FOLDER) if os.path.isfile(os.path.join(UPLOAD_FOLDER, f))][0]
    img_path = os.path.join(UPLOAD_FOLDER, img)
    img_emb = model.encode(Image.open(img_path))
    search_result = client_qdrant.search(collection_name=collection_name, query_vector=img_emb.tolist(), limit=500)
    for hit in search_result:
        video_frame, id_frame = decode_id(hit.id)
        document = collection.find_one({"_id": video_frame})
        url = document['url']

        frame = document['frames'][int(id_frame)-1]
        pts_time = frame['pts_time']
        fps = frame['fps']
        frame_idx = frame['frame_idx']
        data = {
            'video': video_frame, 
            'id': id_frame,
            'url': url,
            'pts_time': pts_time,
            'frame_idx': frame_idx,
            'fps': fps}
        result.append(data)
    if os.path.exists(img_path):
        os.remove(img_path)
        print("File deleted successfully")
    else:
        print("File does not exist")
    return result