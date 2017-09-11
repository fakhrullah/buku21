import QuizPage from '@/components/Quiz'

/* global describe, expect, it */
describe('Quiz.vue', () => {
  it('has a created hook', () => expect(QuizPage.created).to.be.a('function'))
})

// TODO test render elements
// I tried but it seems like vm.$el after mounted is undefined.
