const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cons = require('consolidate')
const dust = require('dustjs-helpers')
const pg = require('pg')


var DBconnecter = require('./database')

// Initialize app
var app = express()


// DB connection string
var conString = "post://PostGres:APPMSXPS@localhost/recipeBook"

// Assign Dust engine
app.engine('dust', cons.dust)

// Set view engine
app.set('view engine', 'dust')

// Set folder for static files
app.use("/static", express.static(path.join(__dirname, 'public')))


// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// Routes to get request
app.get('/', function(req, res) {
    console.info("GET request made on '/'")
    DBconnecter.getAll(function(response) {
        res.render('index', {recipes: response.rows})
    })
})

// Add Recipe Handler
app.post('/add', function(req, res) {
    console.info("POST request made on '/'")
    DBconnecter.insertData(req.body.name, req.body.ingredients, req.body.directions , function(response) {
        res.redirect('/')
    })
})

// Edit Recipe Handler
app.post('/edit', function(req, res) {
    console.info("POST request made on '/edit'")
    DBconnecter.alterData(req.body.id, req.body.name, req.body.ingredients, req.body.directions , function(response) {
        res.redirect('/')
    })
})

// Delete Recipe Handler
app.post('/delete', function(req, res) {
    console.log("POST request made on '/delete")
    DBconnecter.deleteData(req.body.id, function(response) {
        res.redirect('/')
    })
})



// Set port for the app to listen
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started at: http://localhost:" + (process.env.PORT || 3000))
})