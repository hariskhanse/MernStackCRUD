const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/MernCrud")

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

//post method

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.get("/users", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get("/getUsers/:id", (req, res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    debugger
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})