import characters from '../data/characters.json'

/**
 * returns the list of characters with optional sorting
 * @param {{sort?: string, order?: string}} [options]
 * @returns {Array}
 */
export const getCharacters = (options = {}) => {
  const { sort = 'name', order = 'asc' } = options || {};

  // Defensive copy to avoid mutating original data
  const list = [...characters];

  // Normalized comparator
  const compare = (a, b) => {
    if (sort === 'modified') {
      const da = a.modified ? new Date(a.modified) : new Date(0);
      const db = b.modified ? new Date(b.modified) : new Date(0);
      return da - db;
    }

    // default: sort by name (case-insensitive)
    const na = (a.name || '').toLowerCase();
    const nb = (b.name || '').toLowerCase();
    if (na < nb) return -1;
    if (na > nb) return 1;
    return 0;
  };

  list.sort((a, b) => {
    const res = compare(a, b);
    return order === 'desc' ? -res : res;
  });

  return list;
}

/**
 * returns a character by id
 * @param {*} id 
 * @returns 
 */
export const getCharacterById = (id) => {
  const found = characters.find(character => character.id === id);
  if (!found) {
    throw new Error(`Character with id ${id} not found`);
  }
  return found;
}