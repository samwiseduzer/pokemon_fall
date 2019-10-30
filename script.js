for (var i = 0; i < pokemonNames.length; i++) {
  addPokemon(pokemonNames[i]);
}

function addPokemon(name) {
  // 1- create element
  var pokeEl = document.createElement('div');
  // 2- customize the element
  pokeEl.innerText = name;
  pokeEl.classList.add('pokemon');
  // 3- get future parent
  var pokeList = document.getElementById('pokemon-list');
  // 4- append new element to parent
  pokeList.appendChild(pokeEl);
}
