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

  function addListItem(pokemon) {
    let interface = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    interface.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(pokemon);
  })
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//  forEach displaying list in document & console
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
