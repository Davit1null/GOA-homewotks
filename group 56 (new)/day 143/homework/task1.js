const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const method = req.method;

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let message;

    switch (method) {
        case 'GET':
            message = { message: "GET request received" };
            break;

        case 'POST':
            message = { message: "POST request received" };
            break;

        case 'PUT':
            message = { message: "PUT request received" };
            break;

        case 'DELETE':
            message = { message: "DELETE request received" };
            break;

        default:
            message = { message: "Unsupported HTTP method" };
            break;
    }

    res.end(JSON.stringify(message));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});