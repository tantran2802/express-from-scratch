import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';
const app = express();
const port = 3000;
//middleware
app.use(express.json());
//form url encoded
app.use(express.urlencoded({extended: false}));
app.get('/', (req,res) => {
    res.status(200).send('Hello World!');
});
app.use('/api/products', productRoute);

app.get('/tshirt', (req,res) => {
    res.status(200).send({
        tshirt: "polo",
        size: 'large'
    });
});
app.post('/tshirt/:id', (req,res) => {
    const {id} = req.params;
    const {logo} = req.body;
    if (!logo) res.status(418).send({message: 'We need a logo!'});
    res.send({
        tshirt: `your tshirt logo ${logo} with ID: ${id}`
    })
})

app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`);
});
mongoose.connect("mongodb+srv://tantran2802:dGv0gO5Bf8WpVbHx@postifydb.jubyyhf.mongodb.net/?retryWrites=true&w=majority&appName=PostifyDB")
.then(() => console.log("Connect to Database!"))
.catch(() => console.log("Connect failed!"));
// mongodb+srv://tantran2802:dGv0gO5Bf8WpVbHx@postifydb.jubyyhf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=PostifyDB

export default app;