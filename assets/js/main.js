const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonOl = document.querySelector('.pokemons');

function convertPokemonToLi(pokemon) {
	return `
		<li class="pokemon">
			<span class="number">#001</span>
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

fetch(url)
	.then((response) => response.json())
	.then((jsonBody) => {
		return jsonBody.results;
	})
	.then((pokemons) => {
		for (let i = 0; i < pokemons.length; i++) {
			pokemonOl.innerHTML += convertPokemonToLi(pokemons[i]);
		}
	})
	.catch((error) => console.error(error));
