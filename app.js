import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import order from './router/order.js';
import users from './router/user.js';
import product from './router/product.js';
import warehouse from './router/warehouse.js';
import orders from './router/order.js';
import aggregate from './router/aggregationService.js';



const app = express();
dotenv.config();





//Assuming you have a MongoDB URI stored in an environment variable
 const url = process.env.MONGODB_LOCAL_URL


// Check if the URI is defined and is a string
// if (!url || typeof url !== 'string') {
//   console.error('MongoDB URI is undefined or not a string');
//   process.exit(1);
// }

// Connect to MongoDB using Mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/order', order);
app.use('/users', users);
app.use('/products', product);
app.use('/warehouse', warehouse);
app.use('/orders', orders);
app.use('/aggregate', aggregate);

app.get('/test',(req,res)=>{
    res.send('Aws build with node.js')

})

app.listen(process.env.PORT, function () {
     console.log(`listening on ${process.env.PORT}`);
});
