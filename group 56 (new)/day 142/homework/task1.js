const express = require('express');
const app = express();

app.use((req, res) => {
    const data = [
        "Hello",
        "World",
        6767,
        { name: "David" },
        true,
        false
    ];

    res.json(data);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});