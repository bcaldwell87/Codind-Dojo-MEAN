var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "piglet" };
var bees = { character: "Bees" };
var christopher = { character: "Christopher Robin" };
var owl = { character: "owl" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffolumps = { character: "Heffolumps" };

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
            console.log("You attempted to head North, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log("You headed North and arrived at " + player.location.character + "'s house!");
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You attempted to head South, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log("You headed South and arrived at " + player.location.character + "'s house!");
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You attempted to head East, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log("You headed East and arrived at " + player.location.character + "'s house!");
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You attempted to head West, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log("You headed West and arrived at " + player.location.character + "'s house!");
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