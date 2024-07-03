<template>
  <div class="answer-selection">
    <div class="selection-item" v-for="(item, index) in answersList" :key="index">
      <q-btn
        class="item-answer"
        flat
        no-caps
        @click="selectAnswer(index)"
        :class="{ active: item.answerActive }"
      >
        <div>{{ item.answerLabel }}</div>
      </q-btn>
      <!-- <div class="item-sound">
        <q-btn icon="volume_up" round flat class="sound-btn" @click="() => speak(item.answerLabel)" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSpeechSynthesis } from 'src/utils/useSpeechSynthesis';

const { speak } = useSpeechSynthesis();

const answersList = ref([]);

answersList.value = [
  { answerId: '1', answerLabel: 'Malaysia', answerActive: false },
  { answerId: '2', answerLabel: 'Maldives', answerActive: false },
  { answerId: '3', answerLabel: 'United States', answerActive: false },
  { answerId: '4', answerLabel: 'Israel', answerActive: false }
];

const selectAnswer = (index) => {
  answersList.value.forEach((item, i) => {
    item.answerActive = i === index;
    if (i === index) {
      speak(item.answerLabel);
    }
  });
};
</script>

<style lang="scss" scoped>
.answer-selection {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;

  .selection-item {
    display: flex;
    align-items: center;
    gap: 1rem;

    .item-answer {
      padding: 1rem;
      background-color: #f9f9f9;
      width: 100%;
      border-radius: 8px;
      text-align: center;
      font-size: 1rem;
      height: 60px;

      &.active {
        /* background: salmon; */
        color: #f9f9f9;
        background: $red;
      }
    }

    .item-sound {
      .sound-btn {
        background: transparent;
      }
    }
  }
}
</style>
