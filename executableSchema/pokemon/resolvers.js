const pokemons = require('nerds').resolve('Pokemon', 100000).asArray();
const { find } = require('lodash');

module.exports = {
  Query: {
    pokemons: () => pokemons,
    pokemon: (_, { id,  name}) => {
      if (id != null) {
        return find(pokemons, { national_pokedex_number: id });
      }

      if (name == null) return null;

      const search = name.toLowerCase();
      
      return find(pokemons, pokemon => {
        return pokemon.name.toLowerCase().includes(search);
      });
    }
  },
  Pokemon: {
    id: pokemon => pokemon.national_pokedex_number,
    evolvedFrom: ({ evolves_from }) => {
      if (evolves_from.startsWith('egg')) return null;

      return find(pokemons, { name: evolves_from });
    },
    evolvesInto: ({ name }) => {
      return find(pokemons, { evolves_from: name });
    }
  }
}