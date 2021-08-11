<template>
  <CardControl
    control-type="play"
    scheme="white-inverted"
    @click="handlePlay"
    :text="hasText ? 'Play' : null"
  />
</template>

<script>
import { useStore } from "vuex";
import CardControl from "./CardControl.vue";
export default {
  name: "CardControlPlay",
  props: {
    hasText: {
      type: Boolean,
      default: false,
    },
  },
  components: { CardControl },
  setup() {
    const store = useStore();
    const handlePlay = () => {
      store.dispatch("movies/playSelectedMovie");
    };

    return {
      handlePlay,
    };
  },
};
</script>

<style lang="stylus"></style>
