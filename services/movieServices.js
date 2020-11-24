import { request } from './requestServices.js';

const databaseUrl = `https://movies-4a050.firebaseio.com`;
const api = {
    movies: `${databaseUrl}/movies.json`
}

export const getAllMovies = async (searchText) => {
    let res = await request(api.movies, 'GET');

    return Object.keys(res).map(key => ({key, ...res[key]})).filter(x => !searchText || searchText == x.title);
}