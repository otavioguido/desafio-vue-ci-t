import MovieFilter from '@/components/MovieFilter.vue'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'

function mountMovieFilter(config: any = {}) {
    config.mountOptions = config.mountOptions || {}
    config.plugins = config.plugins || {}

    return mount(MovieFilter, {
        global: {
            plugins: [createStore(config.plugins.store), router]
        },
        ...config.mountOptions
    })
}

let wrapper: any

describe('MovieFilter', () => {

    beforeEach(() => {
        wrapper = mountMovieFilter()
    })

    test(`render the filter's data successfully`, () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    describe('filter elements', () => {
        test('is rendered with the correct elements', () => {
            const label = wrapper.find('[data-testid=filter-label]')
            const input = wrapper.find('[data-testid=filter-input]')
            expect(label.exists()).toBeTruthy()
            expect(input.exists()).toBeTruthy()
            expect(label.text()).toContain('Filter')
        })
    })

    // describe('filter update', () => {
    //     test('us rendered with necessary information', async () => {
    //         const filterContent = 'udisandjkasmjnkdsja'
    //         wrapper = mountMovieFilter({
    //             plugins: {
    //                 store: {
    //                     state: () => ({
    //                         filter: filterContent
    //                     })
    //                 }
    //             }
    //         })            
    //         await wrapper.find('[data-testid=filter-input]').trigger('keyup')
    //         console.log(wrapper.find('[data-testid=filter-input]'))
    //         expect(wrapper.find('[data-testid=filter-input]').text()).toContain(filterContent)
    //     })
    // })
})