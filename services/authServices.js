const apiKey = 'AIzaSyDraSd0Lxkzx1AIJBhMKgaM-1AqkV_6QWw';
const databaseUrl = `https://movies-4a050.firebaseio.com`;
const registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

import { request } from './requestServices.js';

export const register = async (email, password) => {
    let res = await request(registerUrl, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
};