import MovieService from '@/services/MovieService'
import { Movie } from '@/types/index.js';
import { createStore as vuexCreateStore, Commit } from 'vuex'

export interface State {
  favoriteMovies: Array<Movie>;
  movies: Array<Movie>;
  filter: string;
}

const storeConfiguration = {
  state: {
    favoriteMovies: [] as Array<Movie>,
    movies: [] as Array<Movie>,
    filter: '' as string
  },
  getters: {
  },
  mutations: {
    ADD_MOVIE(state: State, movie: Movie): void {
      state.favoriteMovies.push(movie)
    },
    REMOVE_MOVIE(state: State, movie: Movie): void {
      const movieIdIndex = state.favoriteMovies.indexOf(movie)
      state.favoriteMovies.splice(movieIdIndex, 1)
    },
    SET_MOVIES(state: State, movies: Array<Movie>): void {
      state.movies = movies
    },
    SET_FILTER(state: State, filter: string): void {
      state.filter = filter
    }
  },
  actions: {
    updateFavorite({ commit, state }: { commit: Commit, state: State }, id: string): void {
      const movie = state.favoriteMovies.filter(m => m['id'] === parseInt(id))
      
      if(movie.length === 0) {
        commit('ADD_MOVIE', state.movies.find(m => m['id'] === parseInt(id)))
      }else {
        commit('REMOVE_MOVIE', movie.pop())
      }       
    },
    fetchMovies({ commit }: { commit: Commit }): void {
      MovieService.getMovies()
        .then(response => {
          commit('SET_MOVIES', response.data.results)
        }).catch((err: Error) => {
            console.log(err)
        })      
    },
    updateFilter({ commit }: { commit: Commit }, filter: string): void {
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

function makeState(initialState: unknown, overrideState: any) {
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
