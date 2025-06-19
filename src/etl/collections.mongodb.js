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
                        bsonType: 'string',
                        maxLength: 50
                    },
                    Cor: {
                        bsonType: 'string',
                        maxLength: 50
                    },
                    Montadora: {
                        bsonType: 'string',
                        maxLength: 50
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
                        bsonType: 'string',
                        maxLength: 50
                    },
                    Pais: {
                        bsonType: 'string',
                        maxLength: 50
                    }
                }
            }
        },
        validationLevel: 'strict',
        validationAction: 'error'
    }
);