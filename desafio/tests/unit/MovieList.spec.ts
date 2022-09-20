import MovieList from '@/views/MovieList.vue'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'
import { movies as mockMovies } from '../fixture/MovieList.json'
import { Movie } from '@/types'

function mountMovieList(config: any = {}) {
    config.mountOptions = config.mountOptions || {}
    config.plugins = config.plugins || {}

    return mount(MovieList, {
        global: {
            plugins: [createStore(config.plugins.store), router]
        },
        ...config.mountOptions
    })
}

let wrapper: any

describe('MovieList', () => {


    beforeEach(() => {
        wrapper = mountMovieList()
    })

    test('should render the movies', () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    describe('page elements', () => {
        test('is rendered with the correct filter', () => {
            const filter = wrapper.find('[data-testid=movie-list-filter]')
            expect(filter.exists()).toBeTruthy()
        })
    })    

    describe('movies', () => {
        test('are rendered in a list with necessary information', () => {
            wrapper = mountMovieList({
                plugins: {
                    store: {
                        state: () => ({
                            movies: mockMovies
                        })
                    }
                }
            })
            const movies = wrapper.findAll('[data-testid=movie]')
            expect(movies).toHaveLength(mockMovies.length)
    
            movies.forEach((movie: { text: () => any }, index: number) => {
                const movieText = movie.text()
                expect(movieText).toContain(mockMovies[index].title)
            })
        })
    
        test('are rendered in a list with filtered information', () => {
            const filterContent = 'f'
            wrapper = mountMovieList({
                plugins: {
                    store: {
                        state: () => ({
                            movies: mockMovies,
                            filter: filterContent
                        })
                    }
                }
            })
            const movies = wrapper.findAll('[data-testid=movie]')
            expect(movies).toHaveLength(mockMovies.filter((m:Movie) => m.title.toLowerCase().startsWith(filterContent)).length)
    
            movies.forEach((movie: { text: () => any }, index: number) => {
                const movieText = movie.text()
                expect(movieText).toContain(mockMovies[index].title)
                expect(mockMovies[index].title.toLowerCase().startsWith(filterContent)).toBeTruthy()
            })
        })
    })
})