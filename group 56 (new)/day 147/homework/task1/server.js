const express = require('express');
const readFile = require('./utils/readfile');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const writeFile = (data) => {
    const filePath = path.join(__dirname, './data/books.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

app.get('/books', (req, res) => {
    try {
        let books = readFile();

        const { name, price } = req.query;

        if (name) {
            books = books.filter(b => b.name.toLowerCase().includes(name.toLowerCase()));
        }

        if (price) {
            books = books.filter(b => b.price == price);
        }

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

app.post('/books', (req, res) => {
    try {
        const books = readFile();
        const newBook = req.body;

        if (!newBook.id || !newBook.name || !newBook.price) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const exists = books.find(b => b.id === newBook.id);
        if (exists) {
            return res.status(400).json({ error: "Book with this ID already exists" });
        }

        books.push(newBook);
        writeFile(books);

        res.status(201).json(books);
    } catch (err) {
        res.status(500).json({ error: "Failed to add book" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});