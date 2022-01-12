const URL_SWAPI = 'https://swapi.dev/api/';
const URL_IMAGES = 'https://starwars-visualguide.com/assets/img/';

const entities = new Map();
entities.set('characters', 'people');
entities.set('planets', 'planets');
entities.set('starships', 'starships');

const getImageUrl = (entity, id) => `${URL_IMAGES}${entity}/${id}.jpg`
const getDataUrl = (entityKey, id) => `${URL_SWAPI}${entities.get(entityKey)}/${id}`

export {getDataUrl, getImageUrl, entities};