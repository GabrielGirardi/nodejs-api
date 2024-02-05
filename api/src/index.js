const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://devggirardi:MrWthRKqAO6QaKl4@api-node.hkdhyoa.mongodb.net/?retryWrites=true&w=majority');
const port = 3000;

const Costumer = mongoose.model('Costumer', {
    name: String,
    birth: { type: Date, default: Date.now },
    gender: String,
    status: String,
    cep: Number,
    address: String,
    number: Number,
    complement: String,
    district: String,
    city: String
});

app.get('/', async (req, res) => {
    const costumer = await Costumer.find();
    return res.send(costumer);
});

app.delete('/:id', async (req, res) => {
    const costumer = await Costumer.findByIdAndDelete(req.params.id);
    return res.send(costumer);

});

app.put('/:id', async (req, res) => {
    const costumer = await Costumer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        birth: req.body.birth,
        gender: req.body.gender,
        status: req.body.status,
        cep: req.body.cep,
        address: req.body.address,
        number: req.body.number,
        complement: req.body.complement,
        district: req.body.district,
        city: req.body.city
    })

    return res.send(costumer);
});

app.post('/', async (req, res) => {
    const costumer = new Costumer({
        name: req.body.name,
        birth: req.body.birth,
        gender: req.body.gender,
        status: req.body.status,
        cep: req.body.cep,
        address: req.body.address,
        number: req.body.number,
        complement: req.body.complement,
        district: req.body.district,
        city: req.body.city
    });

    await costumer.save()
    return res.send(costumer);
});

app.listen(port, () => {
    console.log('app running');
});