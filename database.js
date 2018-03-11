const { Client } = require('pg')

var DBconnecter = {
    getAll: function(callback) {
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
    },
    insertData: function(name, ingredients, directions, callback) {
        const client = new Client()
            
        client.connect()


        client.query('INSERT INTO recipes (name, ingredients, directions) VALUES ($1, $2, $3);', [name, ingredients, directions], (err, res) => {
            if (err) {
                console.error("Error running queries.\n", err)
            }
            console.log('Recipe added succesfully')
            callback(res)
        })
    },
    alterData: function(id, name, ingredients, directions, callback) {
        const client = new Client()
            
        client.connect()

        client.query('UPDATE recipes SET name=$2, ingredients=$3, directions=$4 WHERE id=$1;', [id, name, ingredients, directions], (err, res) => {
            if (err) {
                console.error("Error running queries.\n", err)
            }
            console.log('Recipe edited succesfully')
            console.log(res)
            callback(res)
        })
    },
    deleteData: function(id, callback) {
        const client = new Client()
            
        client.connect()
        
        client.query('DELETE FROM recipes WHERE id = $1;', [id], (err, res) => {
            if (err) {
                console.error("Error running queries.\n", err)
            }
            console.log('Recipe deleted succesfully')
            console.log(res)
            callback(res)
        })
    }
}
module.exports = DBconnecter