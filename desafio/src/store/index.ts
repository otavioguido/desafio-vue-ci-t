import MovieService from '@/services/MovieService'
import { Movie } from '@/types/index.js';
import { createStore } from 'vuex'

export default createStore({
  state: {
    favoriteMovies: [] as Array<Movie>,
    movies: [] as Array<Movie>,
    filter: '' as string
  },
  getters: {
  },
  mutations: {
    ADD_MOVIE(state, movie: Movie): void {
      state.favoriteMovies.push(movie)
    },
    REMOVE_MOVIE(state, movie: Movie): void {
      const movieIdIndex = state.favoriteMovies.indexOf(movie)
      state.favoriteMovies.splice(movieIdIndex, 1)
    },
    SET_MOVIES(state, movies: Array<Movie>): void {
      state.movies = movies
    },
    SET_FILTER(state, filter: string): void {
      state.filter = filter
    }
  },
  actions: {
    updateFavorite({ commit }, id): void {
      const movie = this.state.movies.find(m => m['id'] == id)
      if(movie !== undefined && !this.state.favoriteMovies.includes(movie)) {
        commit('ADD_MOVIE', movie)
      }else {
        commit('REMOVE_MOVIE', movie)
      }       
    },
    fetchMovies({ commit }): void {
      MovieService.getMovies()
        .then(response => {
          commit('SET_MOVIES', response.data.results)
        }).catch((err: any) => {
            console.log(err)
        })      
    },
    updateFilter({ commit }, filter: string): void {
      commit('SET_FILTER', filter)
    }
  },
  modules: {
  }
})
