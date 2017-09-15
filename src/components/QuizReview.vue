<template>
  <div class="quiz-review quiz-page">
    <ul class="questions-list">
      <li class="question"
        :class="{wrong: !q.gotCorrect, correct: q.gotCorrect}"
        v-for="(q, index) in userSubmited">
        <!-- for objective question -->
        <div>
          <div class="user-answer-status">
            <span v-if="q.gotCorrect">Tahniah! Anda jawab betul.</span>
            <span v-if="!q.gotCorrect && q.userAnswer">Opps! Anda jawab salah.</span>
            <span v-if="!q.gotCorrect && !q.userAnswer">Hmm... Anda tak jawab.</span>
          </div>
          <div class="question-body">
            {{ q.question }}
          </div>
          <div v-if="!q.gotCorrect && q.userAnswer" class="question-answer wrong-answer">
            {{ q.userAnswer }}
          </div>
          <div class="question-answer correct-answer">
            {{ q.correctAnswer }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'quiz-review',
  props: ['questions'],
  computed: {
    userSubmited () {
      let userSubmited = []
      this.questions.forEach(q => {
        let submited = {}
        submited.question = q.question
        submited.gotCorrect = false
        // only handle objective question
        q.answers.forEach(a => {
          if (a.isCorrect) submited.correctAnswer = a.answer
          if (a.isChoosed) {
            submited.userAnswer = a.answer
            if (a.isCorrect) submited.gotCorrect = true
          }
        })
        userSubmited.push(submited)
      })
      return userSubmited
    }
  }
}
</script>

<style lang="postcss">
.quiz-review {
  text-align: left;

  > ul {
    margin: 0;
    padding: 0;
  }

  .question {
    border-top: solid 1px var(--gray-light-alpha);
    padding: var(--ws-l) var(--ws-m);
  }

  .question-body {
    margin-bottom: var(--ws-l);
  }

  .correct {
    background-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(60, 255, 0, 0.6);
  }

  .wrong {
    background-color: var(--gray-light-alpha);
    background-color: rgba(255, 98, 98, 0.6);
  }

  .question-id {
    margin: auto var(--ws-m);
    text-align: center;
  }

  .user-answer-status {
    color: rgba(255, 255, 255, 0.8);
    font-style: oblique;
    font-size: 80%;
    margin-top: var(--ws-m);
    margin-bottom: var(--ws-m);

    .wrong &::before {
      content: "✗✗✗";
    }
  }

  .question-answer {
    margin: var(--ws-m) 0;
  }

  .wrong-answer::before {
    content: "✗";
    margin-right: var(--ws-m);
  }

  .correct-answer::before {
    content: "✔";
    margin-right: var(--ws-m);
  }
}

</style>
