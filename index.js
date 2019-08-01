const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const userController = require('./routers/userController');
const commentController = require('./routers/commentController');

const app = express();
// Body Parser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors({ origin: '*' }));

//Port Number
//const port = process.env.PORT || 8080;

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    return res.send('index.js')
})
app.use('/users', userController);
app.use('/comments', commentController);

// Start Server
app.listen(3000, () => console.log('Server started at port :3000'));