const express = require('express');
const productRoutes = require('./product.routes');
const userRouter = require('./user/user.router');
const bodyParser = require('body-parser');

const { logReq } = require('./middleware');
const { errorResponder } = require('./error.middleware')

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(userRouter);
app.use(logReq);
app.use(productRoutes);
app.use(errorResponder);

app.get('/', (_req, res) => {
    // send back a response in plain text
    res.send(`
        <h1>Welcome to our shop!</h1>
        <a href="/products">See all products</a><hr>
        <a href="/products/Brand%20A">See brand A's products</a><hr>
        <a href="/products/1">See the first product</a>`
    );
});

// start the server
app.listen(PORT,
    () => console.log(`Server listening on port ${PORT}.`));
