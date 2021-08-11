<template>
  <div class="MovieModalInfoDisplay">
    <span class="MovieModalInfoDisplay-title">{{ title }}: </span>
    <span
      v-for="(element, index) in elementsArray"
      :key="`MovieModalInfoDisplay-element-${index}`"
      class="MovieModalInfoDisplay-element"
    >
      {{ element }}<span v-if="index < elementsArray.length - 1">, </span>
    </span>
    <!-- This should be a link -->
    <span class="MovieModalInfoDisplay-more" v-if="limit < elements.length"
      >, more
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "MovieModalInfoDisplay",
  props: {
    title: {
      type: String,
      default: "title",
    },
    elements: {
      type: Array,
      default() {
        return [];
      },
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const elementsArray = computed(() => {
      if (props.limit > 0) {
        return props.elements.slice(0, props.limit);
      }
      return props.elements;
    });

    return {
      elementsArray,
    };
  },
};
</script>

<style lang="stylus">
.MovieModalInfoDisplay
    font-size 14px
    line-height 20px
    margin .5em
    margin-left 0
    word-break break-word
    text-align left
.MovieModalInfoDisplay-title
    color #777
.MovieModalInfoDisplay-element
    color #ddd
    margin 0
    cursor pointer
    outline-color #fff
    &:last-child
        .MovieModalInfoDisplay-element--comma
            display none
.MovieModalInfoDisplay-more
    color #ddd
    font-style italic
</style>
