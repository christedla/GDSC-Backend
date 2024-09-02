db.persons.aggregate([
    { $group: { _id: { status: "$status", gender: "$gender" }, count: { $sum: 1 } } }
]);
