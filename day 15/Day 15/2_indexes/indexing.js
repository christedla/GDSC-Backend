db.persons.getIndexes()
//db.persons.dropIndex({ age: 1 })
//db.persons.createIndex({ age: 1 })

//db.persons.find({ age: { $gt: 25 } }).explain("executionStats")
//db.persons.find({ gender: "female" }).explain("executionStats")

//db.persons.aggregate([{ $match: { age: { $gt: 25 } } }]).explain("executionStats")
//db.persons.aggregate([{ $match: { gender: "female" } }]).explain("executionStats")
