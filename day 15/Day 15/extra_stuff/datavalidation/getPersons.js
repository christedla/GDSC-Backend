db.getCollection("persons").find({$and: [{age: {$gt: 30}}, {gender: "female"}, {"company.location.country": {$in: ["USA", "New York"]}}]}).limit(5)
