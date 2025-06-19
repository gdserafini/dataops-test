use('dataopsdb');

db.createCollection(
    'Carros',
    {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: [ 'Carro', 'Cor', 'Montadora' ],
                properties: {
                    Carro: {
                        bsonType: 'string'
                    },
                    Cor: {
                        bsonType: 'string'
                    },
                    Montadora: {
                        bsonType: 'string'
                    }
                }
            }
        },
        validationLevel: 'strict',
        validationAction: 'error'
    }
);

db.createCollection(
    'Montadoras',
    {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: [ 'Montadora', 'Pais' ],
                properties: {
                    Montadora: {
                        bsonType: 'string'
                    },
                    Pais: {
                        bsonType: 'string'
                    }
                }
            }
        },
        validationLevel: 'strict',
        validationAction: 'error'
    }
);