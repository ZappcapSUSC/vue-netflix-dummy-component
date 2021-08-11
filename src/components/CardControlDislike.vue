<template>
  <CardControl
    control-type="dislike"
    @click="handleDislike"
    :class="{ 'CardControlDislike--disliked': liked === false }"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CardControl from "./CardControl.vue";
export default {
  name: "CardControlDislike",
  components: { CardControl },
  setup() {
    const store = useStore();
    const liked = computed(() => store.getters["movies/selectedMovieLiked"]);
    const handleDislike = () => {
      store.dispatch("movies/dislikeSelectedMovie");
    };
    return {
      handleDislike,
      liked,
    };
  },
};
</script>

<style lang="stylus">
.CardControlDislike--disliked
    background-color red
</style>
