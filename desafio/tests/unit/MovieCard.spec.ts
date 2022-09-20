import MovieCard from '@/components/MovieCard.vue'
import { mount } from '@vue/test-utils'
import { movie as mockMovie } from '../fixture/SingleMovie.json'

describe('MovieCard - success cases', () => {
    test(`render the movie's data successfully`, () => {

        const wrapper = mount(MovieCard, {
            props: {
                movie: mockMovie
            },
        })
        
        const wrapperHtml = wrapper.html()
        expect(wrapperHtml).toContain(mockMovie.title)
        expect(wrapperHtml).toContain(mockMovie.poster_path)
    })
})