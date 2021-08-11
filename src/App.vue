<template>
  <!-- Use v-for for cards -->
  <MovieCard id="1a" />
  <Scrim v-if="isScrimOpen" />
  <transition name="scale">
    <div class="App-modal-wrapper" v-if="modalOpen">
      <MovieModal class="App-modal" />
    </div>
  </transition>
</template>

<script>
//TODO Inicializar app store para definir estado de abierto y cerrado de modal
import { computed } from "vue";
import { useStore } from "vuex";
import MovieModal from "./components/MovieModal.vue";
import MovieCard from "./components/MovieCard.vue";
import Scrim from "./components/Scrim.vue";

export default {
  name: "App",
  components: {
    MovieModal,
    MovieCard,
    Scrim,
  },
  setup() {
    const store = useStore();
    const modalOpen = computed(() => store.getters["movieCard/isModalOpened"]);
    const isScrimOpen = computed(() => store.getters["appIsScrimOpen"]);
    const toggleModal = () => {
      store.dispatch("movieCard/modalOpenedSet", true);
    };
    return {
      modalOpen,
      toggleModal,
      isScrimOpen,
    };
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  display flex
  flex-direction column
  justify-content center
  align-items center
  overflow auto
.App-modal-wrapper
  position absolute
  top 0
  // left 50%
  // transform translateX(-50%)
  display flex
  justify-content center
  align-items flex-start
  overflow auto
.scale-enter-active
  animation scaleAnim 0.5s

.scale-leave-active
  animation scaleAnim 0.5s reverse

@keyframes scaleAnim
  0%
    transform scale(0)
  100%
    transform scale(1)
</style>
