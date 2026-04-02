const express = require('express');
const readFile = require('../utils/readfile');
const writeFile = require('../utils/writefile');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const items = await readFile();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const items = await readFile();
        const id = parseInt(req.params.id);

        const item = items.find(i => i.id === id);

        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const items = await readFile();
        const { name, price } = req.body;

        // validation
        if (!name || !price) {
            return res.status(400).json({ error: "name and price are required" });
        }

        // generate unique id
        const newItem = {
            id: items.length ? Math.max(...items.map(i => i.id)) + 1 : 1,
            name,
            price
        };

        items.push(newItem);
        await writeFile(items);

        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const items = await readFile();
        const id = parseInt(req.params.id);
        const { name, price } = req.body;

        const index = items.findIndex(i => i.id === id);

        if (index === -1) {
            return res.status(404).json({ error: "Item not found" });
        }

        if (!name && !price) {
            return res.status(400).json({ error: "At least one field required" });
        }

        if (name !== undefined) items[index].name = name;
        if (price !== undefined) items[index].price = price;

        await writeFile(items);

        res.status(200).json(items[index]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const items = await readFile();
        const id = parseInt(req.params.id);

        const index = items.findIndex(i => i.id === id);

        if (index === -1) {
            return res.status(404).json({ error: "Item not found" });
        }

        const deleted = items.splice(index, 1);

        await writeFile(items);

        res.status(200).json(deleted[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;