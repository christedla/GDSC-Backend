

db.sales.aggregate([
    { $group: { _id: "$product", avgSalesAmount: { $avg: "$salesAmount" } } },
    { $sort: { avgSalesAmount: -1 } },
    { $limit: 5 }
])