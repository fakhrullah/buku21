<template>
  <div class="quiz-review quiz-page">
    <ul class="questions-list">
      <li class="question"
        :class="{wrong: !q.gotCorrect}"
        v-for="(q, index) in questions">
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
  props: ['questions']
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
    border-top: solid 1px rgba(0,0,0,0.05);
    padding: 8px 0;
  }

  .question-body {
    margin-bottom: 16px;
  }

  .wrong {
    background-color: rgba(0,0,0,0.03);
  }

  .question-id {
    min-width: 24px;
    margin: auto 8px;
    text-align: center;
  }

  .user-answer-status {
    color: rgba(0,0,0,0.4);
    font-style: oblique;
    font-size: 85%;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .question-answer {
    margin: 4px 0;
  }

  .wrong-answer::before {
    content: "✗";
    margin-right: 8px;
  }

  .correct-answer::before {
    content: "✔";
    margin-right: 8px;
  }
}

</style>
