#!/bin/sh

set -e

if [ ! -d ".venv" ]; then
    
    python3 -m venv .venv

    source .venv/bin/activate

    pip install -r requirements.txt

fi

source .venv/bin/activate

mongosh dataopsdb --eval "db.Carros.drop(); db.Montadoras.drop();"

mongosh < ./src/etl/collections.mongodb.js

PYTHONPATH=./ python src/etl/populate.py

mongosh ./src/etl/aggregations.mongodb.js > ./src/etl/processed/result.json