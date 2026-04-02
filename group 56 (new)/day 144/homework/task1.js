const http = require('http');

const PORT = 3000;

let books = [
    { id: 1, name: "Book One", price: 10 },
    { id: 2, name: "Book Two", price: 15 }
];

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsed = body ? JSON.parse(body) : {};
                resolve(parsed);
            } catch (err) {
                reject("Invalid JSON");
            }
        });
    });
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try {
        if (req.method === 'GET') {
            res.writeHead(200);
            return res.end(JSON.stringify(books));
        }

        if (req.method === 'POST') {
            const body = await parseBody(req);

            if (!body.id || !body.name || !body.price) {
                res.writeHead(400);
                return res.end(JSON.stringify({ error: "All fields (id, name, price) are required" }));
            }

            const exists = books.find(b => b.id === body.id);
            if (exists) {
                res.writeHead(400);
                return res.end(JSON.stringify({ error: "Book with this ID already exists" }));
            }

            books.push(body);

            res.writeHead(201);
            return res.end(JSON.stringify(books));
        }

        if (req.method === 'PUT') {
            const body = await parseBody(req);

            const book = books.find(b => b.id === body.id);

            if (!book) {
                res.writeHead(404);
                return res.end(JSON.stringify({ error: "Book not found" }));
            }

            const isSame =
                (body.name === undefined || body.name === book.name) &&
                (body.price === undefined || body.price === book.price);

            if (isSame) {
                res.writeHead(400);
                return res.end(JSON.stringify({ error: "No changes detected" }));
            }

            if (body.name !== undefined) book.name = body.name;
            if (body.price !== undefined) book.price = body.price;

            res.writeHead(200);
            return res.end(JSON.stringify(books));
        }

        if (req.method === 'DELETE') {
            const body = await parseBody(req);

            const index = books.findIndex(b => b.id === body.id);

            if (index === -1) {
                res.writeHead(404);
                return res.end(JSON.stringify({ error: "Book not found" }));
            }

            books.splice(index, 1);

            res.writeHead(200);
            return res.end(JSON.stringify(books));
        }

        res.writeHead(405);
        res.end(JSON.stringify({ error: "Method not allowed" }));

    } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: err }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});