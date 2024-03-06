import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();





// Assuming you have a MongoDB URI stored in an environment variable
// const uri = process.env.MONGODB_URI;

// // Check if the URI is defined and is a string
// if (!uri || typeof uri !== 'string') {
//   console.error('MongoDB URI is undefined or not a string');
//   process.exit(1);
// }

// // Connect to MongoDB using Mongoose
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1);
//   });


// import order from './router/order.js';
import users from './router/user.js';
import product from './router/product.js';
import warehouse from './router/warehouse.js';
import orders from './router/order.js';
import aggregate from './router/aggregationService.js';

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/order', order);
app.use('/users', users);
app.use('/products', product);
app.use('/warehouse', warehouse);
app.use('/orders', orders);
app.use('/aggregate', aggregate);


app.listen(process.env.PORT, function () {
     console.log(`listening on ${process.env.PORT}`);
});
