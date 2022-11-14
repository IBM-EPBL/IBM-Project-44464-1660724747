app.use(express.json());

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

let staticPath = path.join(__dirname, "public");
//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json())

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
    let {
        name,
        email,
        password,
        number,
        tac,
        notification
    } = req.body;

    // form validations
    if (name.length < 3) {
        return res.json({
            'alert': 'name must be 3 letters long'
        });
    } else if (!email.length) {
        return res.json({
            'alert': 'enter your email'
        });
    } else if (password.length < 8) {
        return res.json({
            'alert': 'password should be 8 letters long'
        });
    } else if (!number.length) {
        return res.json({
            'alert': 'enter your phone number'
        });
    } else if (!Number(number) || number.length < 10) {
        return res.json({
            'alert': 'invalid number, please enter valid one'
        });
    } else if (!tac) {
        return res.json({
            'alert': 'you must agree to our terms and conditions'
        });
    }
})

//login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
})
app.get('/login', (req, res) => {
    let {
        email,
        password
    } = req.body;

    if (!email.length || !password.length) {
        return res.json({
            'alert': 'fill all the Inputs'
        })
    }
})

// seller route
app.get('/seller', (req, res) => {
    res.sendFile(path.join(staticPath, "seller.html"));
})

// add product
app.get('/add-product', (req, res) => {
    res.sendFile(path.join(staticPath, "addProduct.html"));
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})