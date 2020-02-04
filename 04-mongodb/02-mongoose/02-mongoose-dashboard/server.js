//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
mongoose.Promise = global.Promise;


//Config
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "animals",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

//Sockets

//Database
mongoose.connect("mongodb://localhost/animal_dashboard");

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Animal name required!"], minlength: 3},
    age: {type: Number, required: [true, "Animal age required!"], min: 1, max: 15},
    color: {type: String, required: [true, "Animal color required!"], minlength: 3}
    }, {timestamps: true});
    mongoose.model("Animal", AnimalSchema);
    var Animal = mongoose.model("Animal");

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    Animal.find({}, function(err, animals){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            res.render("index", {info: animals});
        }
    })
});

app.get("/animals/new", function(req, res){
    console.log("~New Form~");
    res.render("new");
});

app.get("/animals/:_id", function(req, res){
    console.log("~Find~")
    Animal.findOne({_id:req.params._id}, function(err, animal){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            res.render("show", {animal:animal});
        }
    })
});

app.get("/animals/edit/:_id", function(req, res){
    console.log("~Edit Page~");
    Animal.findOne({_id:req.params._id}, function(err, animal){
        if(err){
            console.log("Error mactching DB request!~", err);
        }
        else{
            res.render("edit", {animal:animal});
        }
    })
});

app.post("/animals", function(req, res){
    console.log("~Post~", req.body);
    var animal = new Animal({name: req.body.name, age: req.body.age, color: req.body.color});
    animal.save(function(err){
        if(err){
            console.log("~Something added a animal!~", err);
            for(var key in err.errors){
                req.flash("animalform", err.errors[key].message);
            }
            res.redirect("/animals/new");
        }
        else{
            console.log("~Successfully added a animal!~");
            res.redirect("/");
        }
    })
});

app.post("/animals/:_id", function(req, res){
    console.log("~Edit~");
    Animal.findOne({_id:req.params._id}, function(err, animal){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            Animal.update({_id: animal._id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color}}, function(err){
                if(err){
                    console.log("~Error updating~", err);
                }
                else{
                    res.redirect("/");
                }
            })
        }
    })
});

app.post("/animals/destroy/:_id", function(req, res){
    console.log("~Destroy~");
    Animal.findOne({_id:req.params._id}, function(err, animal){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            Animal.remove({_id:animal._id}, function(err){
                if(err){
					console.log("~Error on delete!~", err);
				}
				else{
					res.redirect("/");
				}
            })
        }
    })
});

//Port
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})
