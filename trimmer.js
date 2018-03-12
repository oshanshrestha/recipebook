var trim = function(content, callback) {
    for (let i = 0; i < content.length; i++) {
        content[i].name = content[i].name.trim()
        content[i].ingredients = content[i].ingredients.trim()
        content[i].directions = content[i].directions.trim()
    }
    callback(content)
}

module.exports = trim