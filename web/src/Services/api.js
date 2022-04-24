import axios from "axios";

const api = axios.create({
    baseURL:process.env.REACT_APP_SERVER,
})

export const Api = {
    Pokemon: {
        list: (pokemonPerPage, currentPage) => api.get('pokemon', { params: { pokemonPerPage, currentPage}}),
    },
    Bitcoin : {
        get: () => api.get('currency'),
    },
    User: {
        create: (params) => api.post('/users', params),
    },
    Auth: {
        login: (params) => api.post('/auth', params),
    },
}