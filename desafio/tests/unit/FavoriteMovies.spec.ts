import FavoriteMovies from '@/views/FavoriteMovies.vue'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'
import { movies as mockMovies } from '../fixture/MovieList.json'
import { Movie } from '@/types'

function mountFavoriteMovies(config: any = {}) {
    config.mountOptions = config.mountOptions || {}
    config.plugins = config.plugins || {}

    return mount(FavoriteMovies, {
        global: {
            plugins: [createStore(config.plugins.store), router]
        },
        ...config.mountOptions
    })
}

let wrapper: any

describe('MovieList', () => {


    beforeEach(() => {
        wrapper = mountFavoriteMovies()
    })

    test('should render the movies', () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    test('is rendered with the correct filter', () => {
        const filter = wrapper.find('[data-testid=favorite-movie-list-filter]')
        expect(filter.exists()).toBeTruthy()
    })

    test('are rendered in a list with necessary information', () => {
        wrapper = mountFavoriteMovies({
            plugins: {
                store: {
                    state: () => ({
                        favoriteMovies: mockMovies
                    })
                }
            }
        })
        const favoriteMovies = wrapper.findAll('[data-testid=favorite-movie]')
        expect(favoriteMovies).toHaveLength(mockMovies.length)

        favoriteMovies.forEach((movie: { text: () => any }, index: number) => {
            const movieText = movie.text()
            expect(movieText).toContain(mockMovies[index].title)
        })
    })

    test('are rendered in a list with filtered information', () => {
        const filterContent = 'f'
        wrapper = mountFavoriteMovies({
            plugins: {
                store: {
                    state: () => ({
                        favoriteMovies: mockMovies,
                        filter: filterContent
                    })
                }
            }
        })
        const favoriteMovies = wrapper.findAll('[data-testid=favorite-movie]')
        expect(favoriteMovies).toHaveLength(mockMovies.filter((m:Movie) => m.title.toLowerCase().startsWith(filterContent)).length)

        favoriteMovies.forEach((movie: { text: () => any }, index: number) => {
            const movieText = movie.text()
            expect(movieText).toContain(mockMovies[index].title)
            expect(mockMovies[index].title.toLowerCase().startsWith(filterContent)).toBeTruthy()
        })
    })
})