// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./scriptEx8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', async () => {
    const expectMessage = await getPokemonDetails ('Olá, esse pokemon está na lista!');
    try {
      expect(getPokemonDetails(pokemnon)).toEqual('expectMessage');
    } catch (error) {
      return 'Olá, esse pokemon não está na lista!'
    }
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    expect(getPokemonDetails).toEqual('Bulbasaur', 'Charmander', 'Squirtle');
  });
});


// TEST NÃO PASSOU