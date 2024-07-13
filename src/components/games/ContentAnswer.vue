<template>
  <div
    class="content-answer"
    :class="answerActive && answerCorrect ? 'correct' : answerActive ? 'wrong' : ''"
  >
    <div class="answer-selection">
      <div class="selection-item" style="opacity: 0">
        <q-btn class="item-answer" flat no-caps>
          <div>Empty</div>
        </q-btn>
      </div>

      <div class="selection-item" v-for="(item, index) in ansListing" :key="index">
        <q-btn
          class="item-answer"
          flat
          no-caps
          @click="selectAnswer(index)"
          :class="{ active: item.ansActive }"
        >
          <div class="answer-img" :style="{ backgroundImage: 'url(' + item.imgPath + ')' }">
            <img src="../../assets/games/img-placeholder.jpg" />
          </div>
          <!-- <div>{{ item.ansLabel }}</div> -->
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
  /* height: 24rem; */

  &.correct .answer-selection .selection-item .item-answer {
    &.active {
      background: $green;
      opacity: 1;
    }
  }

  &.wrong .answer-selection .selection-item .item-answer.active {
    background: $red;
  }

  .answer-selection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;

    .selection-item {
      display: flex;
      align-items: center;
      gap: 1rem;

      &:first-child {
        grid-column: span 2;
        .item-answer {
          height: 4rem;
        }
      }

      .item-answer {
        padding: 1rem;
        background-color: #f9f9f9;
        // background-color: #c1da7c;
        width: 100%;
        border-radius: 8px;
        text-align: center;
        font-size: 1rem;
        height: 8rem;
        position: relative;
        opacity: 1;
        transition: 0.3s all;
        /* background-color: #ffffff;
        box-shadow:
          0 4px 6px rgba(0, 0, 0, 0.1),
          0 10px 20px rgba(0, 0, 0, 0.15); */

        &.active {
          color: #f9f9f9;
        }

        .answer-img {
          aspect-ratio: 1 / 1;
          background-position: center center;
          background-size: contain;
          background-repeat: no-repeat;
          margin: auto;
          // opacity: 0.1;

          img {
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
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
