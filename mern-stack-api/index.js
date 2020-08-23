require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')

const path = require ('path')

// importing files
var postMessageRoutes = require('./controllers/postMessageController')

// Define Global Variables
var app = express()
const log = console.log;
const PORT = process.env.PORT || 4000; // Step 1

//Configuration of Variables 
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(PORT,()=>console.log('Server started at : 4000') )

app.use('/postMessages',postMessageRoutes)

// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'portfolio/build' ))

    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'build', 'index.html')); //relative path
    });
}