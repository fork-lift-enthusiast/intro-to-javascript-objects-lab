const pokemon = require("./data.js");
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

game.difficulty = "easy";

starter = pokemon[3];
game.party.push(starter);

game.party.push(pokemon[14], pokemon[22], pokemon[37]);

for (i = 0; i <= game.gyms.length; i++) {
  if (game.gyms[i].difficulty <= 3) {
    game.gyms[i].completed = true;
  }
  if (game.gyms[i].difficulty >= 3) {
    break;
  }
}
console.log(game);

game.party[0] = pokemon[4];

for (i = 0; i <= game.party.length; i++) {
  console.log(game.party[i]);
}

count = 0;
for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log(pokemon[i].name);
    count += 1;
  }
  if (count >= 4) {
    break;
  }
}

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[150]);
console.log(game.party);

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
  game.items[1].quantity -= 1;
};

for (i = 0; i <= game.gyms.length; i++) {
  if (game.gyms[i].difficulty <= 6) {
    game.gyms[i].completed = true;
  }
  if (game.gyms[i].difficulty >= 6) {
    break;
  }
}

game.gymStatus = function () {
  gymTalley = {
    completed: 0,
    incomplete: 0,
  };
  console.log(gymTalley.completed);
  for (i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed === true) {
      gymTalley.completed += 1;
    } else {
      gymTalley.incomplete += 1;
    }
  }
  console.log(gymTalley);
};
game.gymStatus();

game.partyCount = function () {
  count = 0;
  for (i = 0; i < game.party.length; i++) {
    count += 1;
  }
  return count;
};
game.partyCount();

for (i = 0; i <= game.gyms.length; i++) {
  if (game.gyms[i].difficulty <= 8) {
    game.gyms[i].completed = true;
  }
  if (game.gyms[i].difficulty >= 8) {
    break;
  }
}

console.log(game);
