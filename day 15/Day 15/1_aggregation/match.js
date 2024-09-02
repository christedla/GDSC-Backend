db.persons.aggregate([{ $match: { age: { $gt: 25 } } }]); // age > 25

// db.persons.aggregate([{ $match: { tags: { $size: 3 } } }]); // tags array size > 3

// db.persons.aggregate([
//   {
//     $match: {
//       $and: [{ age: { $gt: 25 } }, { gender: "male" }],
//     },
//   },
// ]); // age > 25 and gender = male
