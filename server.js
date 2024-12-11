const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

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

app.get('/products',(req, res) => {
    res.status(200).send(pizzas)
})

app.listen(port, () => {
    console.log(`app run on port ${port}`)
})