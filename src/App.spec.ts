import { describe, it, expect } from 'vitest'

import { VueWrapper, mount } from '@vue/test-utils'
import App from './App.vue'

function findByText(wrap: VueWrapper, selector: string, text: string) {
  return wrap.findAll(selector).filter((n) => n.text() == text)
}

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Lorem ipsum generator')
  })

  it('setNumberOfParagraphs', () => {
    const wrapper = mount(App)
    wrapper.vm.setNumberOfParagraphs(3)
    expect(wrapper.vm.$data.numberOfParagraphs).toEqual(3)
  })

  it('getParagraphs', () => {
    const wrapper = mount(App)
    wrapper.vm.setNumberOfParagraphs(4)
    wrapper.vm.getParagraphs()
    expect(wrapper.vm.$data.output.split('<p>').length - 1).toEqual(4)
  })

  it('randomParagraphs', () => {
    const wrapper = mount(App)
    wrapper.vm.setNumberOfParagraphs(5)
    wrapper.vm.randomParagraphs()
    expect(wrapper.vm.$data.output.split('<p>').length - 1).toEqual(5)
  })

  it('Button set 2 paragraphs clicked', async () => {
    const wrapper = mount(App)
    const button = findByText(wrapper, 'button', '2 par.').at(0)
    await button?.trigger('click')
    expect(wrapper.vm.$data.numberOfParagraphs).toEqual(2)
  })
})
