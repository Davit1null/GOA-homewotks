const express = require('express');
const readFile = require('./utils/readfile');

const app = express();
const PORT = 3000;

app.get('/books', (req, res) => {
    try {
        const books = readFile();

        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: "Failed to read books" });
    }
});

app.get('/books/:id', (req, res) => {
    try {
        const books = readFile();
        const id = parseInt(req.params.id);

        const book = books.find(b => b.id === id);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});