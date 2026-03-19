const express = require('express');
const router = express.Router();

// Dummy data
let users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

// GET (Read)
router.get('/', (req, res) => {
    res.json(users);
});

// GET by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user || { message: "User not found" });
});

// POST (Create)
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// PUT (Update)
router.put('/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});

// DELETE
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

module.exports = router;