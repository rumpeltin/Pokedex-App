// Pokémon IIFE
const pokemonRepository = (function () {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=84';

  // Adding all Pokémon to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Getting all the Pokémon from the list
  function getAll() {
    return pokemonList;
  }

  // Showing the Pokémon alongside their attributes
  function addListItem(pokemon) {
    const pokemonListElement = document.querySelector('.list-group');
    const listPokemon = document.createElement('li');
    const button = document.createElement('button');

    listPokemon.classList.add('group-list-item');
    button.textContent = pokemon.name;
    button.classList.add('btn-primary', 'search-button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');

    listPokemon.append(button);
    pokemonListElement.append(listPokemon);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  // Load the list with JSON
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          const pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };

          add(pokemon);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // Load all the Pokémon details
  async function loadDetails(item) {
    try {
      const response = await fetch(item.detailsUrl);
      const details = await response.json();

      // Adds the details to the item
      item.imageUrl = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.height = details.height;
      item.types = details.types;
    } catch (error) {
      console.error(error);
    }
  }

  // Show all the Pokémon details
  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // Showing & hiding the modal
  function showModal(pokemon) {
    const modalTitle = $('.modal-title');
    const modalBody = $('.modal-body');

    const pokemonName = $(`<h2>${pokemon.name}</h2>`);
    const pokemonHeight = $(`<p>Height: ${pokemon.height}</p>`);
    const imageElement = $('<img class="pokemon-modal-image">');
    const imageElementBack = $('<img class="pokemon-modal-image">');
    const typeElement = document.createElement('p');

    imageElement.attr('src', pokemon.imageUrl);
    imageElementBack.attr('src', pokemon.imageUrlBack);

    typeElement.textContent = pokemon.types
      .map(function (type) {
        return type.type.name;
      })
      .join(', ');

    modalTitle.empty();
    modalBody.empty();

    modalTitle.append(pokemonName);
    modalBody.append(imageElement);
    modalBody.append(imageElementBack);
    modalBody.append(typeElement);
    modalBody.append(pokemonHeight);
  }

  $(document).ready(function () {
    $('#myInput').on('keyup', function () {
      const value = $(this).val().toLowerCase();

      $('.search-button').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  // Making all functions accessible
  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
  };
})();

// Calling the functions
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
