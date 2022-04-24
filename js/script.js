// adding list of data entries
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

// functions to add & getAll Pokémon
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

// function to fetch list from API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

// function to trigger showDetails function
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

  function loadDetails(item) {
   let url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();
   }).then(function (details) {
     // This adds the details to the item
     item.imageUrl = details.sprites.front_default;
     item.height = details.height;
     item.types = details.types;
   }).catch(function (e) {
     console.error(e);
   });
 }

 // function to show modal
  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    let title = pokemon.name;
		let titleElement = (document.innerText = title);

		let heightElement = document.createElement('p');
		heightElement.innerText = 'Height: ' + pokemon.height;

		let weightElement = document.createElement('p');
		weightElement.innerText = 'Weight: ' + pokemon.weight;

		let typeElement = document.createElement('p');
		typeElement.innerText = 'Types: ';

    let imageElement = document.createElement('img');
		imageElement.classList.add('modal-image');
		imageElement.src = pokemon.imageUrl;

		modalContainer.appendChild(modal);
    modal.appendChild(titleElement);
		modal.appendChild(imageElement);
		modal.appendChild(heightElement);
		modal.appendChild(weightElement);
		modal.appendChild(typeElement);

    modalContainer.classList.add('is-visible');
  }

  // function to show details of selected pokémon
   function showDetails(pokemon) {
     loadDetails(pokemon).then(function () {
       showModal(pokemon);
   });
  }

// all accessible functions in IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
