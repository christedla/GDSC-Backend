db.persons.aggregate([
    { $group: { _id: "$company.location.country", avgAge: { $avg: "$age" } } }
]);