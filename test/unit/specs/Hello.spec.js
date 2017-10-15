import Vue from 'vue'
import EditorControls from '@/components/EditorControls'

/* eslint-disable no-undef */
describe('EditorControls.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(EditorControls)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.editor label').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
