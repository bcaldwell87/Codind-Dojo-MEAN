var mongoose = require("mongoose");
var Animal = mongoose.model("Animal");

module.exports = {

    index: function(req, res){
        console.log("~Root~");
        Animal.find({}, function(err, animals){
            if(err){
                console.log("~Error matching DB request!~", err);
            }
            else{
                res.render("index", {info: animals});
            }
        })
    },

    newForm: function(req, res){
        console.log("~New Form~");
        res.render("new");
    },

    details: function(req, res){
        console.log("~Find~")
        Animal.findOne({_id:req.params._id}, function(err, animal){
            if(err){
                console.log("~Error matching DB request!~", err);
            }
            else{
                res.render("details", {animal:animal});
            }
        })
    },

    editPage: function(req, res){
        console.log("~Edit Page~");
        Animal.findOne({_id:req.params._id}, function(err, animal){
            if(err){
                console.log("Error mactching DB request!~", err);
            }
            else{
                res.render("edit", {animal:animal});
            }
        })
    },

    addAnimal: function(req, res){
        console.log("~Post~", req.body);
        var Animal = new Animal({name: req.body.name, age: req.body.age, color: req.body.color});
        animal.save(function(err){
            if(err){
                console.log("~Something added a Animal!~", err);
                for(var key in err.errors){
                    req.flash("animalform", err.errors[key].message);
                }
                res.redirect("/animals/new");
            }
            else{
                console.log("~Successfully added a Animal!~");
                res.redirect("/");
            }
        })
    },

    editAnimal: function(req, res){
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
    },

    deleteAnimal: function(req, res){
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
    }
}
