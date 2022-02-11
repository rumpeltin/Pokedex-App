let pokemonList = [];
pokemonList = [
  {name: "Bulbasaur",
  height: 0.7,
  type: "grass"
  },

  {name: "Eevee",
  height: 0.3,
  type: ["water", "speed"]
  },

  {name: "Wartortle",
  height: 1,
  type: ["water", "defense"]
  },

  {name: "Fearow",
  height: 1.2,
  type: ["flying", "speed"]
  },

  {name: "Arbok",
  height: 3.5,
  type: "poison"
  },

  {name: "Tentacruel",
  height: 1.6,
  type: ["water", "poison"]
  },

  {name: "Dratini",
  height: 1.8,
  type: ["dragon", "attack"]
  }
];

for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 2) {
    document.write(" " + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!" + '<br/>');
  } else {
    document.write(" " + pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + '<br/>');
  }
}
