let pokemonList = [];
pokemonList = [
  {name: "bulbasaur",
  height: 0.7,
  type: "grass"
  },

  {name: "eevee",
  height: 0.3,
  type: ["water", "speed"]
  },

  {name: "wartortle",
  height: 1,
  type: "water","defense"
  },

  {name: "fearow",
  height: 1.2,
  type: ["flying", "speed"]
  },

  {name: "arbok",
  height: 3.5,
  type: "poison"
  },

  {name: "tentacruel",
  height: 1.6,
  type: ["water", "poison"]
  },

  {name: "dratini",
  height: 1.8,
  type: ["dragon", "attack"]
  }
];

for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 1) {
    console.log(pokemonList[i].name + " is a smol boi.");
  } else if (pokemonList[i].height > 1 && pokemonList[i].height < 3) {
    console.log(pokemonList[i].name + " is a good-sized boi.");
  } else {
    console.log(pokemonList[i].name + " wat ein Oschi!");
  }
}
