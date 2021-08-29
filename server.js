const express = require('express');
const api = express();
const PORT = 8000;

// MARK: Database

const database = require('./db');
database.connect()
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// MARK: Model

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    phrase: String,
    universe: String,
});

const Hero = mongoose.model('hero', schema, 'heroes');

// MARK: Network

const router = express.Router();
router.get('/', (req, res) => {
    res.send({ msg: 'Hello Hero 😎🔥' })
});
router.post('/', (req, res) => {
    const body = req.body
    const hero = new Hero(body);
    hero.save((err, hero) => {
        if (err) {
            res.send({ msg: 'Not Saved 😥' })
        }
        res.send({ msg: 'Saved 🔥', hero: hero })
    });
});

api.use(express.json());
api.use(router);

api.listen(PORT, () => {
    console.log(`API listening on port ${PORT}!`)
})
