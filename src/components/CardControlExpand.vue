<template>
  <CardControl control-type="expand" @click="handleExpand" />
</template>

<script>
import { useStore } from "vuex";
import CardControl from "./CardControl.vue";
export default {
  name: "CardControlExpand",
  components: { CardControl },
  setup() {
    const store = useStore();
    const handleExpand = () => {
      store.dispatch(
        "movies/modalMovieIdSet",
        store.getters["movies/selectedMovieId"]
      );
      store.dispatch("movieCard/modalOpenedSet", true);
    };

    return {
      handleExpand,
    };
  },
};
</script>

<style lang="stylus"></style>
