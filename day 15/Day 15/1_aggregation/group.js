db.persons.aggregate([    
  { $project: { name: 1, favoriteFruit: 1, age: 1, gender: 1, _id: 0 } },
  { $match: { favoriteFruit: "banana" } },
  {
    $group: {
      _id: { age: "$age", gender: "$gender" },
      people: { $push: "$name" },
    },
  },
]); // documents with _id = {distict combination of age and gender}

//db.persons.aggregate([
//    { $group: { _id: "$age" } },
//    { $sort: { _id: 1 } },
//    { $limit: 2 }
//]) // documents with _id = distinct age try sort and limit

//db.persons.aggregate([
//    {$group: {_id: "$company"}}
//]) // documents with _id = distict company attribute

//db.persons.aggregate([
//    {$group: {_id: "$company.location.country"}} // nested expression
//]) // documents with _id = distict company location country