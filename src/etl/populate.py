import pandas as pd
from src.etl.utils import get_mongo_client, save
from bson import json_util


def main():
    cars_df = pd.read_csv('src/data/cars.csv', sep=',')
    mfact_df = pd.read_csv('src/data/mfact.csv', sep=',')

    mongo = get_mongo_client()
    db = mongo['dataopsdb']

    cars_collection = db['Carros']
    cars_collection.insert_many(cars_df.to_dict(orient='records'))
    cars = list(cars_collection.find())
    save(cars, './src/etl/cars.json')

    mfact_collection = db['Montadoras']
    mfact_collection.insert_many(mfact_df.to_dict(orient='records'))
    mfact = list(mfact_collection.find())
    save(mfact, './src/etl/mfact.json')


if __name__ == '__main__':
    main()
