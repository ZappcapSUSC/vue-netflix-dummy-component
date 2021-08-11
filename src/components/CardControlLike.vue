<template>
  <CardControl
    control-type="like"
    @click="handleLike"
    :class="{ 'CardcontrolLike--liked': liked }"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CardControl from "./CardControl.vue";
export default {
  name: "CardControlLike",
  components: { CardControl },
  setup() {
    const store = useStore();
    const liked = computed(() => store.getters["movies/selectedMovieLiked"]);
    const handleLike = () => {
      store.dispatch("movies/likeSelectedMovie");
    };

    return {
      handleLike,
      liked,
    };
  },
};
</script>

<style lang="stylus">
.CardcontrolLike--liked
    background-color green
</style>
