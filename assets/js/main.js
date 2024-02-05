// import { pokeapi } from './poke-api.js';
const pokemonOl = document.querySelector('.pokemons');

function convertPokemonToLi(pokemon) {
	return `
		<li class="pokemon">
			<span class="number">${pokemon.order}</span>
			<span class="name">${pokemon.name}</span>

			<div class="detail">
				<ol class="types">
					<li class="type">grass</li>
					<li class="type">poison</li>
				</ol>

				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
					alt=${pokemon.name}
				/>
			</div>
		</li>
	`;
}

pokeapi.getPokemons().then((pokemons) => {
	pokemonOl.innerHTML += pokemons.map(convertPokemonToLi).join('');
});
