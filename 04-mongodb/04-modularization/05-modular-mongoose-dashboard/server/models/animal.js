var mongoose = require("mongoose");

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Animal name required!"], minlength: 3},
    age: {type: Number, required: [true, "Animal age required!"], min: 1, max: 15},
    color: {type: String, required: [true, "Animal color required!"], minlength: 3}
    }, {timestamps: true});

    mongoose.model("Animal", FerretSchema);
