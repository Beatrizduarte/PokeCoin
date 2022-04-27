import axios from "axios";

const api = axios.create({
    baseURL:process.env.REACT_APP_SERVER,
})

  let token;

    api.interceptors.request.use(request => {
        token = sessionStorage.getItem('Token');
      if(token !== null) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
      }
  
      return request
    }, error => {
      return Promise.reject(error.response)
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
        list: () => api.get('/users'),
    },
    Auth: {
        login: (params) => api.post('/auth', params),
    },
    Transaction: {
      create: (params) => api.post('/transaction', params),
      list: () => api.get('/transaction', {header: { Authorization: token}}),
    },
}