import os
from dotenv import load_dotenv
from pymongo import MongoClient


load_dotenv()


def get_mongo_client() -> MongoClient:
    try:
        mongo = MongoClient(os.getenv('DATABASE_URL'))
    except Exception as e:
        print(e)
    finally:
        return mongo
