const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://devggirardi:MrWthRKqAO6QaKl4@api-node.hkdhyoa.mongodb.net/?retryWrites=true&w=majority');
const port = 3000;

const Customer = mongoose.model('Customer', {
    name: String,
    birth: { type: Date, required: true },
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
    const customer = await Customer.find();
    return res.send(customer);
});

app.post('/customer', async (req, res) => {
    try {
        const customerData = req.body;
        const today = new Date();
        const customerBirthday = new Date(customerData.birth);
        const isBirthday = today.getMonth() === customerBirthday.getMonth() && today.getDate() === customerBirthday.getDate();
        
        let daysUntilNextBDay = null;

        if (!isBirthday) {
            const nextBDay = new Date(today.getFullYear(), customerBirthday.getMonth(), customerBirthday.getDate());

            if (today > nextBDay) {
                nextBDay.setFullYear(nextBDay.getFullYear() + 1);
            }

            const diffTime = nextBDay.getTime() - today.getTime();

            daysUntilNextBDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }

        const customer = new Customer(customerData);
        await customer.save();

        const responseData = {
            message: isBirthday ? 'Feliz Aniversário!' : 'Cliente cadastrado com sucesso!',
            daysUntilNextBDay: isBirthday ? null : daysUntilNextBDay
        };

        res.status(201).json(responseData);

    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar cliente!' });
    }
});

app.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    return res.send(customer);
});

app.put('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
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

    return res.send(customer);
});

app.listen(port, () => {
    console.log('Servidor ativo');
});
