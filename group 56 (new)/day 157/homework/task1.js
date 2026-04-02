// 1. db.movies.find({genres: ["Sci-Fi", "Action"]})

// 2. db.movies.find({cast: ["Keanu Reeves", "Laurence Fishburne"]})

// 3. db.movies.find({genres: "Sci-Fi"})

// 4. db.movies.find({cast: "Anne Hathaway"})

// 5. db.movies.find({genres: {$all: ["Sci-Fi", "Adventure"]}})

// 6. db.movies.find({genres: {$all: ["Action", "Drama"]}})

// 7. db.movies.find({imdb_rating: {$gt: 8}, featured: true})

// 8. db.movies.find({release_year: {$gt: 2010}, imdb_rating: {$gt: 8.5}})

// 9. db.movies.find({genres: {$all: ["Sci-Fi", "Adventure"]}})

// 10. db.movies.find({cast: "Matthew McConaughey"})

// 11. db.movies.find().sort({imdb_rating: -1}).limit(5)

// 12. db.movies.find({release_year: {$lt: 2010}, imdb_rating: {$gt: 8}})

// 13. db.movies.find({director: "Christopher Nolan"}).sort({imdb_rating: -1})