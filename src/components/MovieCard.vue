<template>
  <div class="MovieCard" @mouseover="hoverOn" @mouseleave="hoverOff">
    <img class="MovieCard-image" :src="imgUrl" alt="" />
    <transition name="fade">
      <CardControls v-if="isMouseOver" />
    </transition>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CardControls from "./CardControls";
export default {
  name: "MovieCard",
  components: { CardControls },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = useStore();
    const isMouseOver = ref(false);
    const hoverOn = () => {
      isMouseOver.value = true;
      store.dispatch("movies/selectMovie", props.id);
    };
    const hoverOff = () => {
      isMouseOver.value = false;
      store.dispatch("movies/selectMovie", null);
    };
    const imgUrl = computed(() =>
      require(`@/assets/img/${
        isMouseOver.value ? "dummyhover.jpg" : "dummycover.jpg"
      }`)
    );
    return {
      isMouseOver,
      hoverOn,
      hoverOff,
      imgUrl,
    };
  },
};
</script>

<style lang="stylus">
.MovieCard
    width 25vw
    overflow hidden
    display flex
    flex-direction column
    transition all 0.3s ease
    &:hover
        width 33vw
.MovieCard-image
    width 100%
    object-fit cover
.fade-enter-active, .fade-leave-active
  transition opacity .2s ease
.fade-enter-from, .fade-leave-to
  opacity 0
</style>
