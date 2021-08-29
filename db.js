const mongoose = require('mongoose');

function connect() {
    return new Promise((resolve, reject) => {
        const user = 'cristian';
        const password = 'i201013249';
        const db = 'heroes_phrases'
        const url = `mongodb+srv://${user}:${password}@cluster0.urjft.mongodb.net/${db}?retryWrites=true&w=majority`
        mongoose.connect(url, { useNewUrlParser: true }, (err) => {
            if (!err) {
                resolve('DB connected 😎')
            }
            reject(`Failed to connect DB 🥺, ${err}`)
        });
    });
}

module.exports = { connect }