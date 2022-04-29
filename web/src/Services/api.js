import api from './config'

const token = `Bearer ${sessionStorage.getItem('token')}`
const headers = { Authorization: token }

export const Api = {
    Pokemon: {
        list: (pokemonPerPage, currentPage) => api.get('pokemon', { params: { pokemonPerPage, currentPage}}),
    },
    Bitcoin : {
        get: () => api.get('currency'),
    },
    User: {
        create: (params) => api.post('/users', params),
        list: () => api.get('/users', { headers }),
    },
    Auth: {
        login: (params) => api.post('/auth', params),
    },
    Transaction: {
      create: (params) => api.post('/transaction', params, { headers }),
      list: () => api.get('/transaction', { headers }),
    },
}