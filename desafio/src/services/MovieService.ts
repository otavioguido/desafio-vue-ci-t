import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=c0ae994ab1d00d353f72d6ac8303a891',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getMovies() {
        return apiClient.get('')
    },
    getMovie(id: string) {
        return apiClient.get(`/` + id)
    }
}
