const { Client } = require('pg')

var DBconnecter = function(callback) {
    const client = new Client(/*{
        user: 'LearnPostGres',
        host: 'localhost',
        database: 'recipeBook',
        password: 'APPMSXPS',
        port: 5432,
    }*/)
        
    client.connect()

    client.query('SELECT * FROM recipes', (err, res) => {
        if (err) {
            console.error("Error running queries.")
        }
        callback(res)
    })
}

module.exports = DBconnecter