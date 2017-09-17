/* global describe, it, expect */

import Vue from 'vue'
import BuiProgress from '@/components/ui/BuiProgress.vue'

describe('BuiProgress.vue', () => {
  const Constructor = Vue.extend(BuiProgress)

  it('should render progress bar with 0 progress', () => {
    const vm = new Constructor({
      propsData: {
        value: 0,
        max: 10
      }
    }).$mount()

    expect(vm.$el.querySelector('.progress-bar').style.width)
      .to.equal('0%')
  })

  it('should render progress bar with 40% progress', () => {
    const vm = new Constructor({
      propsData: {
        value: 40,
        max: 100
      }
    }).$mount()

    expect(vm.$el.querySelector('.progress-bar').style.width)
      .to.equal('40%')
  })
})
