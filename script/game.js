//
//
//--Written by Chris McJunkin
//
//A game about travelling and learning the universe.
//Each 'item' of the universe is placed into an object categorized by it's name.
//In this iteration of the game, players just need to 'learn' the universe, Sun, and Earth.
//Commented code is to be left in place as a sort of flag for what I had in mind to build.
//I hope to come back to this one day, and make it the interactive dynamic I envisioned.
//
//

//---Globals---\\
let view = document.getElementById("game");
let enter = document.getElementById("play");
let save = document.getElementById("save");
let load = document.getElementById("load");
let userInput = document.getElementById("input");
let feedback = document.getElementById("feedback");
let newGame = document.getElementById("gameStart");
let story = document.getElementById("story");
let learnDisplay = document.getElementById("learnDisplay");

//---Objects---\\
var player = {
    commands: ["left", "right", "scale in", "scale out", "learn", "create"],
    learned: [],
    currentRoom: "",
    //commandCompare: function (compare) {    //compares userInput to commands
    //    let flag = false;
    //    console.log(compare == this.commands[0]);
    //    for (var i = 0; i < this.commands.length; i++) {
    //        if (compare == this.commands[i]) {
    //            flag = true;    //comparison has been found!
    //            break;
    //        }
    //    }
    //    return flag;
    //}

}

var canvas = {
    image: "",
    text: "This is your canvas, to build your own universe.",
    learn: function() {
        learnDisplay.innerText = "This is your home.";
    },
    create: function () {
        console.log(player.learned);
        if (player.learned.length == 3) {    //basically if the player has learned all 3 of the "puzzle pieces"
            endGame();
        }
        else {
            feedback.innerText = "With the might of your will, you throw everything you know onto the canvas, but something is still missing...Remember, you need a home planet, something to keep it warm, and a space for it to live.";
        }
    },
    scaleOut: function () {
        player.currentRoom = "map_universe";
    }
}

var map_universe = {
    image: "url('images/universe.png') no-repeat center",
    text: "You are the universe.",
    learn: function () {
        if (player.learned.indexOf("universe") > 0) { //if there is an index, for found item
            //do nothing
        }
        else {
            //otherwise add it to learned
            player.learned.push("universe");
        }
        learnDisplay.innerText = "Knowledge and understanding of the fundementals of existence seep into your being. You now know how to birth Creation.";
    },
    left: function(){
        feedback.innerText = "We do not know if we are in a multiverse.";
    },
    right: function(){
        feedback.innerText = "We do not know if we are in a multiverse.";
    },
    scaleIn: function () {
        player.currentRoom = "map_supercluster";
    },
    scaleOut: function(){
        player.currentRoom = "canvas";
    }
    
}

var map_supercluster = {
    image: "url('images/supercluster.jpg') no-repeat center",
    text: "You are our supercluster, Laniakea. The red dot represents our location in space.",
    learn: function () {
        //if (player.learned.indexOf("supercluster") > 0) { //if there is an index, for found item
        //    //do nothing
        //}
        //else {
        //    //otherwise add it to learned
        //    player.learned.push("supercluster");
        //}
        learnDisplay.innerText = "This is our neighborhood of the universe, containing a vast amount of local galaxies.";
    },
    left: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    right: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    scaleIn: function () {
        player.currentRoom = "map_localGroup";
    },
    scaleOut: function () {
        player.currentRoom = "map_universe";
    }
}

var map_localGroup = {
    image: "url('images/localGroup.png') no-repeat center",
    text: "You are our local group, home to over 50 galaxies.",
    learn: function () {
        //if (player.learned.indexOf("localGroup") > 0) { //if there is an index, for found item
        //    //do nothing
        //    console.log(player.learned.indexOf("localGroup"));
        //}
        //else {
        //    //otherwise add it to learned
        //    player.learned.push("localGroup");
        //}
        learnDisplay.innerText = "Some of our closest galactic neighbors are the Magellanic Clouds, and Andromeda.";
    },
    left: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    right: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    scaleIn: function () {
        player.currentRoom = "map_milkyway";
    },
    scaleOut: function () {
        player.currentRoom = "map_supercluster";
    }
}

var map_milkyway = {
    image: "url('images/milkyway.jpg') no-repeat center",
    text: "You are The Milky Way.",
    learn: function () {
        //if (player.learned.indexOf("milkyway") > 0) { //if there is an index, for found item
        //    //do nothing
        //}
        //else {
        //    //otherwise add it to learned
        //    player.learned.push("milkyway");
        //}
        learnDisplay.innerText = "Galaxies are necessary to harbor stars.";
    },
    left: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    right: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    scaleIn: function () {
        player.currentRoom = "map_solarSystem";
    },
    scaleOut: function () {
        player.currentRoom = "map_localGroup";
    }
}

var map_solarSystem = {
    image: "url('images/solarsystem.png') no-repeat center",
    text: "You are the solar system.",
    learn: function () {
        //if (player.learned.indexOf("solarSystem") > 0) { //if there is an index, for found item
        //    //do nothing
        //}
        //else {
        //    //otherwise add it to learned
        //    player.learned.push("solarSystem");
        //}
        learnDisplay.innerText = "Solar systems are collections of various space objects all orbiting a common center of mass. Contents vary from asteroids the size of a chair, to hypergiant stars.";
    },
    left: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    right: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    scaleIn: function () {
        player.currentRoom = "map_sun";
    },
    scaleOut: function () {
        player.currentRoom = "map_milkyway";
    }
}

var map_sun = {
    image: "url('images/sun.jpg') no-repeat center",
    text: "You are the Sun.",
    learn: function () {
        if (player.learned.indexOf("sun") > 0) { //if there is an index, for found item
            //do nothing
        }
        else {
            //otherwise add it to learned
            player.learned.push("sun");
        }
        learnDisplay.innerText = "You learned how to spark nuclear fusion, and craft dense mass, generating a strong gravitational field.";
    },
    left: function () {
        player.currentRoom = "map_earth";
    },
    right: function () {
        player.currentRoom = "map_earth";
    },
    scaleIn: function () {
        feedback.innerText = "A mysterious force is preventing you from shrinking into the Sun.";
    },
    scaleOut: function () {
        player.currentRoom = "map_solarSystem";
    }
}

var map_earth = {
    image: "url('images/earth.jpg') no-repeat center",
    text: "You are now Planet Earth.",
    learn: function () {
        if (player.learned.indexOf("earth") > 0) { //if there is an index, for found item
            //do nothing
        }
        else {
            //otherwise add it to learned
            player.learned.push("earth");
        }
        learnDisplay.innerText = "You obtain the knowledge of all mankind. You now know how to create a habitable planet with life.";
    },
    left: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    right: function () {
        feedback.innerText = "You cannot proceed this way.";
    },
    scaleIn: function () {
        feedback.innerText = "A mysterious force is preventing you from landing on Earth."
    },
    scaleOut: function () {
        player.currentRoom = "map_solarSystem";
    }
}


//---Functions---\\

function render() {
    let input = userInput.value;
    feedback.innerText = "";//
    learnDisplay.innerText = "";    
    //if (player.commandCompare(input)) {
        switch (userInput.value) {
            case "left":
                eval(player.currentRoom).left();
                break;
            case "right":
                eval(player.currentRoom).right();
                break;
            case "scale in":
                eval(player.currentRoom).scaleIn();
                break;
            case "scale out":
                eval(player.currentRoom).scaleOut();
                break;
            case "learn":
                eval(player.currentRoom).learn();
                break;
            case "create":
                eval(player.currentRoom).create();
                break;
        }
   // }
    userInput.value = "";   //
    story.innerHTML = "";   //reset

    story.innerText = eval(player.currentRoom).text;
    view.style.background = eval(player.currentRoom).image;
}

function saveGame() {
    if (confirm("Warning! Saving will overwrite data. Continue?")) {
        localStorage.clear();
        localStorage.setItem("learned", JSON.stringify(player.learned));    //save learned items into array
        localStorage.setItem("map", player.currentRoom);
    }
    else {
        //do nothing
    }
}

function loadGame() {
    player.learned = JSON.parse(localStorage.getItem("learned"));
    player.currentRoom = localStorage.getItem("map");
    view.innerHTML = "";
    userInput.value = "";
    render();
}

function clearSave() {
    localStorage.clear();
}

function start() {
    player.currentRoom = "map_universe";
    userInput.value = "";
    view.innerHTML = "";
    enter.style.display = "inline";
    save.style.display = "inline";
    load.style.display = "inline";
    clear.style.display = "inline";
    userInput.style.display = "inline"
    newGame.style.display = "none";
    render();
}

function endGame () {
    view.innerHTML = "<section><h1>You did it!</h1><br>You successfully learned everything you could, to make a safe place for your new home.";
    view.style.background = "none";
    enter.style.display = "none";
    save.style.display = "none";
    load.style.display = "none";
    clear.style.display = "none";
    userInput.style.display = "none";
    newGame.style.display = "block";
}

function keyHandler(event) {
    if (event.keyCode == 13) {
        render();
    }
}

//---Events---\\
var room = eval(player.currentRoom);
enter.addEventListener("click", render, false);
window.addEventListener("keydown", keyHandler, false);
save.addEventListener("click", saveGame, false);
load.addEventListener("click", loadGame, false);
clear.addEventListener("click", clearSave, false);
newGame.addEventListener("click", start, false);