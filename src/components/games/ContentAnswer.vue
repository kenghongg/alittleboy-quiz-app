<template>
  <div
    class="content-answer"
    :class="answerActive && answerCorrect ? 'correct' : answerActive ? 'wrong' : ''"
  >
    <div class="answer-selection">
      <div class="selection-item" v-for="(item, index) in ansListing" :key="index">
        <q-btn
          class="item-answer"
          flat
          no-caps
          @click="selectAnswer(index)"
          :class="{ active: item.ansActive }"
        >
          <div>{{ item.ansLabel }}</div>
        </q-btn>
      </div>
    </div>
  </div>

  <!-- <pre>answerActive~{{ answerActive }}</pre> -->
  <!-- <pre>answerCorrect~{{ answerCorrect }}</pre> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSpeechSynthesis } from 'src/utils/useSpeechSynthesis';

const { speak } = useSpeechSynthesis();

const props = defineProps(['ansList']);
const emits = defineEmits(['ansSubmit']);

const answerActive = ref(false);
const answerCorrect = ref(false);

const ansListing = ref([]);

const selectAnswer = (index) => {
  ansListing.value.forEach((item, i) => {
    item.ansActive = i === index;
    if (i === index) {
      speak(item.ansLabel);
      emits('ansSubmit', item);
      answerActive.value = true;
      answerCorrect.value = false;

      if (item.ansActive && item.ansCorrect) {
        answerCorrect.value = true;
      }
    }
  });
};

onMounted(() => {
  ansListing.value = props.ansList;
});
</script>

<style lang="scss" scoped>
.content-answer {
  height: 24rem;

  &.correct .answer-selection .selection-item .item-answer {
    opacity: 0.5;

    &.active {
      background: $green;
      // position: fixed;
      // bottom: 1rem;
      // left: 1rem;
      // width: calc(100% - 2rem);
      opacity: 1;
    }
  }

  &.wrong .answer-selection .selection-item .item-answer.active {
    background: $red;
  }

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
        height: 4rem;
        position: relative;
        opacity: 1;
        transition: 0.3s all;

        &.active {
          /* background: salmon; */
          color: #f9f9f9;
          // background: $red;
        }
      }

      .item-sound {
        .sound-btn {
          background: transparent;
        }
      }
    }
  }
}
</style>
