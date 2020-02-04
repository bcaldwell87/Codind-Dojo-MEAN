function userLanguages(users) {
    var interestedIn = [];
    for (var i = 0; i < users.length; i++) {
      var toon = users[i];
      var interests = toon.interests;
      for (var k in interests) {
        var ints = interests[k];
        for (var k = 0; k < ints.length; k++) {
          interestedIn.push(ints[k]);
        }
      }
      console.log(toon.fname + " " + toon.lname + " knows " + toon.languages);
      var pop = interestedIn.pop();
      console.log(toon.fname + " " + toon.lname + " is also interested in " + interestedIn.join(",") + " and " + pop + "\n");
    }
  }
  
  
var users = [
{
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
    music: ["guitar", "flute"],
    dance: ["tap", "salsa"],
    television: ["Black Mirror", "Stranger Things"]
    }
},
{
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
    food: ["honey", "honeycomb"],
    flowers: ["honeysuckle"],
    mysteries: ["Heffalumps"]
    }
},
{
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
    space: ["stars", "planets", "improbability"],
    home: ["tea", "yellow bulldozers"]
    }
}
]

userLanguages(users);