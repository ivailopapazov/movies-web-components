const apiKey = 'AIzaSyDraSd0Lxkzx1AIJBhMKgaM-1AqkV_6QWw';

const api = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    login:`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
};

import { request } from './requestServices.js';

export const register = async (email, password) => {
    let res = await request(api.register, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
};

export const login = async (email, password) => {
    let res = await request(api.login, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
};