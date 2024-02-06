import { pokeapi } from './poke-api.js';
const pokemonOl = document.querySelector('.pokemons');
const loadMoreButton = document.querySelector('#loadMoreButton');

const maxRecords = 151;
const limit = 50;
let offset = 0;

function loadPokemonItens(offset, limit) {
	pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
		const newHtml = pokemons
			.map(
				(pokemon) => `
				<li class="pokemon ${pokemon.type}">
					<span class="number">${pokemon.number}</span>
					<span class="name">${pokemon.name}</span>

					<div class="detail">
						<ol class="types">
							${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
						</ol>

						<img src=${pokemon.photo} alt=${pokemon.name} />
					</div>
				</li>
			`
			)
			.join('');

		pokemonOl.innerHTML += newHtml;
	});
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
	offset += limit;
	const qtdRecordNextPage = offset + limit;

	if (qtdRecordNextPage >= maxRecords) {
		const newLimit = maxRecords - offset;
		loadPokemonItens(offset, newLimit);

		loadMoreButton.parentElement.removeChild(loadMoreButton);
	}

	loadPokemonItens(offset, limit);
});
