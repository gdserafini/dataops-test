import pandas as pd
from src.etl.utils import get_mongo_client


def main():
    cars_df = pd.read_csv('src/data/cars.csv', sep=',')
    mfact_df = pd.read_csv('src/data/mfact.csv', sep=',')

    mongo = get_mongo_client()
    db = mongo['dataopsdb']

    cars_collection = db['Carros']
    cars_collection.insert_many(cars_df.to_dict(orient='records'))

    mfact_collection = db['Montadoras']
    mfact_collection.insert_many(mfact_df.to_dict(orient='records'))


if __name__ == '__main__':
    main()
