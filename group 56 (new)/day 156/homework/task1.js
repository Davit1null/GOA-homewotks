// 1. db.number_collection.find()

// 2. db.number_collection.find({ number_value_1:{$gt: 500}})

// 3. db.number_collection.find({number_value_1:{$gt: 300},number_value_3:{$lt: 0}})

// 4. db.number_collection.find({},{_id: 0, text_value: 1, number_value_1: 1})

// 5. db.number_collection.find({number_value_2: {$gt: 700}}, {_id: 0, text_value: 1, number_value_2: 1})

// 6. db.number_collection.find().sort({number_value_1: 1})

// 7. db.number_collection.find().sort({number_value_2: -1})

// 8. db.number_collection.find({number_value_1: {$gt: 200}}).sort({number_value_3: 1})

// 9. db.number_collection.find().limit(5)

// 10. db.number_collection.find().sort({number_value_2: -1}).limit(10)

// 11. db.number_collection.countDocuments()

// 12. db.number_collection.countDocuments({number_value_1: {$gt: 400}})

// 13. db.number_collection.find({number_value_3: { $exists: true}})

// 14. db.number_collection.find({number_value_3: {$exists: false}})

// 15. db.number_collection.find({number_value_1: {$gt: 100},number_value_2: {$exists: true}}).sort({number_value_1: -1}).limit(3)