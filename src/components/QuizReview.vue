<template>
  <div class="quiz-review quiz-page">
    <ul class="questions-list">
      <li class="question"
        :class="{wrong: !q.gotCorrect}"
        v-for="(q, index) in userSubmited">
        <!-- TODO question id -->
        <div class="question-id">{{ index }}</div>
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
    display: flex;
    border-top: solid 1px var(--gray-light-alpha);
    padding: var(--ws-m) 0;
  }

  .question-body {
    margin-bottom: var(--ws-l);
  }

  .wrong {
    background-color: var(--gray-lighter-alpha);
  }

  .question-id {
    margin: auto var(--ws-m);
    text-align: center;
  }

  .user-answer-status {
    color: var(--gray-alpha);
    font-style: oblique;
    font-size: 85%;
    margin-top: var(--ws-m);
    margin-bottom: var(--ws-m);
  }

  .question-answer {
    margin: var(--ws-s) 0;
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
