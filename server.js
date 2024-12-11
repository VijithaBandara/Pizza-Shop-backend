const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const users = require('./data.js');
const app = express();
const fs = require('fs')
app.use(express.json())
const path = require('path');
const filePath = path.join(__dirname, 'data.js');
dotenv.config();
app.use(cors());

const port = process.env.PROT || 5000

const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Fresh basil, mozzarella, and tomato sauce.',
      price: 12.99,
      image: 'https://thumbs.dreamstime.com/b/pepperoni-pizza-black-background-visit-my-page-you-will-be-able-to-find-image-every-sold-your-cafe-restaurant-117753351.jpg',
    },
    {
      id: 2,
      name: 'Pepperoni Feast',
      description: 'Spicy crispy pepperoni on a bed of cheese and sauce.',
      price: 15.99,
      image: 'https://panjtaara.co.nz/wp-content/uploads/pepperoni-pizza.jpg',
    },
    {
      id: 3,
      name: 'BBQ Chicken',
      description: 'Tender BBQ chicken, onions, and mozzarella cheese.',
      price: 18.99,
      image: 'https://familyslice.com/wp-content/uploads/2023/10/What-is-Double-Cut-Pizza.webp',
    }
  ];

const writeDataToFile = () => {
    const data = `const users = ${JSON.stringify(users, null, 2)};\n\nmodule.exports = users;`;
    fs.writeFileSync(filePath, data, 'utf8');
};

app.get('/products',(req, res) => {
    res.status(200).send(pizzas)
})

/*
const createUser = (newUser) => {
  users.push(newUser);
  writeDataToFile();
  console.log('✅ User added successfully:', newUser);
};
*/

app.post('/user', (req, res) => {
  
  console.log(req.body)
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required (id, name, email, password)' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
  }

  const newUser = {name, email, password, position:"empolyee" };
  users.push(newUser);
  writeDataToFile();

  res.status(201).json({
      message: 'User created successfully',
      user: newUser
  });
});


app.listen(port, () => {
    console.log(`app run on port ${port}`)
})