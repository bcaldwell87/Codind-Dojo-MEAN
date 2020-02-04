var tigger = {
    character: "Tigger",
    greet: function(){
        console.log("Tigger says, 'The wonderful thing about Tiggers is Tiggers are wonderful things!'");
    }
};
var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Pooh says, 'HELLLOOOOOO!'");
    }
};
var piglet = { character: "Piglet",
    greet: function(){
        console.log("Piglet says, 'Welcome to my home!'");
    }
};
var bees = { character: "Bees",
    greet: function(){
        console.log("Bzzz!");
    }
};
var christopher = { character: "Christopher Robin",
    greet: function(){
        console.log("Christopher says, 'Welcome Welcome!'");
    }
};
var owl = { character: "Owl",
    greet: function(){
        console.log("Owl says, 'Hoot hoot!'");
    }
};
var rabbit = { character: "Rabbit",
    greet: function(){
        console.log("Rabbit says, 'Helllooooo'");
    }
};
var gopher = { character: "Gopher",
    greet: function(){
        console.log("Gopher says, 'Helloo!'");
    }
};
var kanga = { character: "Kanga",
    greet: function(){
        console.log("Kanga says, 'Helloooo!'");
    }
};
var eeyore = { character: "Eeyore",
    greet: function(){
        console.log("Eeyore says,m 'HelLLOloooo'");
    }
};
var heffolumps = { character: "Heffolumps",
    greet: function(){
        console.log("Heffolumps says, 'Welcome!'");
    }
};

tigger.north = pooh;
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopher;
piglet.east = pooh;
piglet.north = owl;
bees.west = pooh;
bees.north = rabbit;
christopher.south = pooh;
christopher.west = owl;
christopher.east = rabbit;
christopher.north = kanga;
owl.south = piglet;
owl.east = christopher;
rabbit.south = bees;
rabbit.west = christopher;
rabbit.east = gopher;
gopher.west = rabbit;
kanga.south = christopher;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffolumps;
heffolumps.west = eeyore;

var player = {
    location: tigger
}

function move(dir){
    if(dir == "north" || dir == "North"){
        if(player.location.north == null){
            console.log("You attempt to head North, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log("You head North and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You attempt to head South, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log("You head South and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You attempt to head East, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log("You head East and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You attempt to head West, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log("You head West and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
}

move("north");
move("west");
move("north");
move("east");
move("north");
move("north");
move("east");