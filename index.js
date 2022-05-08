const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Allahu akhbar npm install -g nodemo Allahu akhbar Allahu akhbar');
})

const users = [
    { id: 1, name: 'roton', age: 32 },
    { id: 2, name: 'Doton', age: 32 },
    { id: 3, name: 'Soton', age: 32 },
    { id: 4, name: 'Roton', age: 32 },
    { id: 5, name: 'Foton', age: 32 },
    { id: 6, name: 'DSoton', age: 32 },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.id;
    // const user = users.find(f => f.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = user.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'jango', 'dango']);
})


app.listen(port, () => {
    console.log('listening the port', port)
});