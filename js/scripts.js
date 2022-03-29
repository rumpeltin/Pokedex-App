// adding list of data entries
let pokemonRepository = (function () {
  let pokemonList = [
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

//  forEach displaying list in document & console
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 2) {
    document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big!" + '<br/>');
    console.log(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big!");
  } else {
    // or document.write("<p>" + list[i].name + " (height: " + list[i].height + ")" + "</p>")
    document.write(pokemon.name + " (height: " + pokemon.height + ")" + '<br/>');
    console.log(pokemon.name + " (height: " + pokemon.height + ")");
  }
});
