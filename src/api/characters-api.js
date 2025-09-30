import charactersData from '../data/characters.json';

export const getCharacters = () => {
    return  charactersData;
}

export const getCharactersById = (id) => {
    return charactersData.find(character => character.id === id);
}