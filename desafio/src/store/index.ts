import MovieService from '@/services/MovieService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    favoriteMovies: [],
    movies: []
  },
  getters: {
  },
  mutations: {
    ADD_MOVIE(state, movie: Movie): void {
      (state.favoriteMovies as Array<Movie>).push(movie)
    },
    REMOVE_MOVIE(state, movie: Movie): void {
      const movieIdIndex = (state.favoriteMovies as Array<Movie>).indexOf(movie)
      state.favoriteMovies.splice(movieIdIndex, 1)
    },
    SET_MOVIES(state, movies: Array<Movie>): void {
      (state.movies as Array<Movie>) = movies
    }
  },
  actions: {
    manageFavoriteMovies({ commit }, id): void {
      const movie = this.state.movies.find(m => m['id'] == id)
      if(movie !== undefined && !(this.state.favoriteMovies as Array<Movie>).includes(movie)) {
        commit('ADD_MOVIE', movie)
      }else {
        commit('REMOVE_MOVIE', movie)
      }       
    },
    fetchMovies({ commit }) {
      MovieService.getMovies()
        .then(response => {
          commit('SET_MOVIES', response.data.results)
        }).catch((err: any) => {
            console.log(err)
        })      
    }
  },
  modules: {
  }
})
