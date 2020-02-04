es (10 sloc)  462 Bytes

var animals = require("../controllers/animals.js")

module.exports = function(app){

    app.get("/", animals.index)

    app.get("/animals/new", animals.newForm)

    app.get("/animals/:_id", animals.details)

    app.get("/animals/edit/:_id", animals.editPage)

    app.post("/animals", animals.addAnimal)

    app.post("/animals/:_id", animals.editAnimal)

    app.post("/animals/destroy/:_id", animals.deleteAnimal)
