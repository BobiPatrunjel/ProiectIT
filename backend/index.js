const express = require('express');
const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/chef_it'

mongoose.connect(URI).then(() => console.log('MongoDB connected!')).catch(err => console.error(err));
const database = mongoose.connection

database.on('err', (err) => {
    console.log(err)
})


const Recipe = require('./models/recipe')
const User = require('./models/recipe')

const app = express();

app.use(express.json());

// Endpoint pentru a crea o noua reteta
app.post('/api/recipes', async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint pentru a citi toate retetele 
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('api/auth/register', async (req, res) => {
    const {username, email, password } = req.body;
    try {
        const exists = await User.findOne({email});

        if (exists) {
            return res.status(400).json({message: "Utilizatorul deja exista"});
        }

        const user = new User(req.body);
        await user.save()
        res.status(200).json({user: user, message: "Utilizatorul a fost creat!"})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})


app.post('api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const exists = await User.findOne({email});

        if (!exists || !(await exists.matchPassword(password))) {
            return res.status(400).json({message: "Parola sau email invalide!"});
        }

        res.status(200).json({user: exists, message: "Utilizatorul a fost logat!"})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})
