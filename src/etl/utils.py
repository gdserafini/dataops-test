import os
from dotenv import load_dotenv
from pymongo import MongoClient
from bson import json_util


load_dotenv()


def get_mongo_client() -> MongoClient:
    try:
        mongo = MongoClient(os.getenv('DATABASE_URL'))
    except Exception as e:
        print(e)
    finally:
        return mongo
    

def save(data: list, path: str):
    with open(path, 'w', encoding='utf-8') as file:
        file.write(json_util.dumps(data, indent=2, ensure_ascii=False))
