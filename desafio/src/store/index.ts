/* eslint-disable @typescript-eslint/ban-types */
import MovieService from '@/services/MovieService'
import { Movie } from '@/types/index.js';
import { createStore as vuexCreateStore } from 'vuex'

const storeConfiguration = {
  state: {
    favoriteMovies: [] as Array<Movie>,
    movies: [] as Array<Movie>,
    filter: '' as string
  },
  getters: {
  },
  mutations: {
    ADD_MOVIE(state: any, movie: Movie): void {
      state.favoriteMovies.push(movie)
    },
    REMOVE_MOVIE(state: any, movie: Movie): void {
      const movieIdIndex = state.favoriteMovies.indexOf(movie)
      state.favoriteMovies.splice(movieIdIndex, 1)
    },
    SET_MOVIES(state: any, movies: Array<Movie>): void {
      state.movies = movies
    },
    SET_FILTER(state: any, filter: string): void {
      state.filter = filter
    }
  },
  actions: {
    updateFavorite({ commit, state }: { commit: Function, state: any }, id: string): void {
      const movie = (state.favoriteMovies as Array<Movie>).filter(m => m['id'] === parseInt(id))
      
      if(movie.length === 0) {
        commit('ADD_MOVIE', (state.movies as Array<Movie>).find(m => m['id'] === parseInt(id)))
      }else {
        commit('REMOVE_MOVIE', movie.pop())
      }       
    },
    fetchMovies({ commit }: { commit: Function }): void {
      MovieService.getMovies()
        .then(response => {
          commit('SET_MOVIES', response.data.results)
        }).catch((err: any) => {
            console.log(err)
        })      
    },
    updateFilter({ commit }: { commit: Function }, filter: string): void {
      commit('SET_FILTER', filter)
    }
  },
  modules: {
  }
}

const defaultOverrides = {
  state: () => {
    return {}
  }
}

function makeState(initialState: any, overrideState: any) {
  return {
    ...(typeof initialState === 'function' ? initialState(): initialState),
    ...overrideState()
  }
}

export function createStore(storeOverrides = defaultOverrides) {
  return vuexCreateStore({
    ...storeConfiguration,
    ...storeOverrides,
    ...{
      state: makeState(storeConfiguration.state, storeOverrides.state)
    }
  })
}

export default createStore()
