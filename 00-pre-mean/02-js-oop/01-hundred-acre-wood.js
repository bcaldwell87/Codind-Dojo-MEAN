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
piglet.east = tigger.north; 
tigger.north.west = piglet;
bees.west = tigger.north 
bees.south.east = tigger;
christopher.north = eeyore.south;
christopher.west = piglet.north; 
owl.east = christopher;
owl.north.east = pooh.west; 
rabbit.south = pooh.east; 
rabbit.west = owl.east; 
gopher.west = rabbit;
kanga.south = owl.east; 
eeyore.south = kanga;
heffolumps.west = kanga.north; 