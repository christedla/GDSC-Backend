db.persons.aggregate([
    { $unwind: "$favoriteFruits" },
    { $group: { _id: "$favoriteFruits", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
]);