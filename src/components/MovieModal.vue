<template>
  <Modal class="MovieModal">
    <div
      class="MovieModal-img-container"
      :style="{
        'background-image': `url(${imgUrl})`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
      }"
    >
      <div class="MovieModal-img-container-graident"></div>
      <div class="MovieModal-controls-container">
        <img src="@/assets/img/dummylogo.png" alt="" />
        <div class="MovieModal-controls">
          <CardControlPlay :has-text="true" />
          <CardControl controlType="plus" />
          <CardControlLike />
          <CardControlDislike />
        </div>
      </div>
    </div>
    <div class="MovieModal-info-wrapper">
      <div class="MovieModal-info-column">
        <div class="MovieModal-info">
          <p class="MovieModal-matchRate MovieModal-info-element">
            {{ matchRate }}
          </p>
          <TextBorderBox class="MovieModal-info-element">
            <p>{{ classification }}</p>
          </TextBorderBox>
          <p class="MovieModal-info-element">{{ seasons }}</p>
          <TextBorderBox class="MovieModal-info-element">
            {{ maxRes }}
          </TextBorderBox>
        </div>
        <p style="color: white; font-size: 16px; text-align: left">
          {{ description }}
        </p>
      </div>
      <div class="MovieModal-info-column">
        <MovieModalInfoDisplay title="Cast" :elements="cast" :limit="3" />
        <MovieModalInfoDisplay
          title="This movie is"
          :elements="genres"
          :limit="3"
        />
      </div>
    </div>
  </Modal>
</template>

<script>
import { computed, onUnmounted } from "vue";
import { useStore } from "vuex";
import Modal from "./Modal.vue";
import CardControl from "./CardControl.vue";
import CardControlLike from "./CardControlLike.vue";
import CardControlDislike from "./CardControlDislike.vue";
import CardControlPlay from "./CardControlPlay.vue";
import TextBorderBox from "./TextBorderBox.vue";
import MovieModalInfoDisplay from "./MovieModalInfoDisplay.vue";
import SelectedMovieInfo from "@/composables/SelectedMovieInfo.js";
export default {
  name: "MovieModal",
  components: {
    CardControl,
    CardControlLike,
    CardControlDislike,
    CardControlPlay,
    Modal,
    TextBorderBox,
    MovieModalInfoDisplay,
  },
  props: {},
  setup() {
    const store = useStore();
    const selectedMovieModal = computed(
      () => store.getters["movies/selectedMovieModal"]
    );
    const imgUrl = computed(() =>
      require(`@/assets/img/${
        selectedMovieModal.value ? "dummymodal.jpg" : "default.jpg"
      }`)
    );
    onUnmounted(() => {
      store.dispatch("movies/modalMovieIdSet", null);
    });

    const {
      classification,
      matchRate,
      seasons,
      maxRes,
      genres,
      description,
      cast,
    } = SelectedMovieInfo("movies/selectedMovieModal");
    return {
      classification,
      matchRate,
      seasons,
      maxRes,
      genres,
      imgUrl,
      description,
      cast,
    };
  },
};
</script>

<style lang="stylus">
.MovieModal
  display flex
  flex-direction column
  width 850px
.MovieModal-img-container
    height 480px
    width 100%
    position relative
.MovieModal-img-container-graident
    background linear-gradient(to top,#181818,transparent 50%)
    position absolute
    top 0
    left 0
    height 100%
    width 100%
.MovieModal-controls-container
    display flex
    flex-direction column
    width 40%
    position absolute
    bottom 5%
    left 3em
    img
        width 100%
        height auto
        margin-bottom 1.5em
    .MovieModal-controls
        display flex
        width 100%
        justify-content space-between
        align-items center
.MovieModal-info-wrapper
  background-color #181818
  padding 0 3em 2em
  // display flex
  // justify-content space-between
  display grid
  -ms-grid-columns minmax(0,2fr) minmax(0,1fr)
  grid-template-columns minmax(0,2fr) minmax(0,1fr)
  -webkit-column-gap 2em
  -moz-column-gap 2em
  column-gap 2em
  width 100%
  box-sizing border-box
.MovieModal-info-element
  margin-right 15px !important
.MovieModal-info
  display flex
  color #fff
  align-items center
  p
    margin 0
  .MovieModal-matchRate
    color #12e335
    font-weight bold
</style>
