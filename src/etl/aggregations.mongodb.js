use('dataopsdb')

const result = db.Carros.aggregate([
    {
        $lookup: {
            from: "Montadoras",
            localField: "Montadora",
            foreignField: "Montadora",
            as: "Montadoras"
        }
    },
    {
        $project: {
            "_id": 1,
            "Carro": 1,
            "Cor": 1,
            "Montadora": 1,
            "Montadoras": 1,
            "Pais": "$Montadoras.Pais"
        }
    },
    {
        $group: {
            "_id": "$Montadoras.Pais",
            "Carros": {
                $push: {
                    "Carro": "$Carro",
                    "Cor": "$Cor",
                    "Montadora": "$Montadora"
                }
            }
        }
    },
    {
        $sort: { _id: 1 }
    }
]).toArray();

print(JSON.stringify(result, null, 2));