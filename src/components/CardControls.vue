<template>
  <div class="CardControls">
    <div class="CardControls-buttons">
      <div class="CardControls-buttons--subcontainer">
        <CardControlPlay />
        <CardControl controlType="plus" />
        <CardControlLike />
        <CardControlDislike />
      </div>

      <CardControlExpand />
    </div>
    <div class="CardControls-info">
      <p class="CardControls-matchRate CardControls-info-element">
        {{ matchRate }}
      </p>
      <TextBorderBox class="CardControls-info-element">
        <p>{{ classification }}</p>
      </TextBorderBox>
      <p class="CardControls-info-element">{{ seasons }}</p>
      <TextBorderBox class="CardControls-info-element">
        {{ maxRes }}
      </TextBorderBox>
    </div>
    <div class="CardControls-genres">
      <p v-for="(genre, index) in genres" :key="index">{{ genre }}</p>
    </div>
  </div>
</template>

<script>
import CardControl from "./CardControl.vue";
import CardControlLike from "./CardControlLike.vue";
import CardControlDislike from "./CardControlDislike.vue";
import CardControlPlay from "./CardControlPlay.vue";
import TextBorderBox from "./TextBorderBox.vue";
import CardControlExpand from "./CardControlExpand.vue";
import SelectedMovieInfo from "@/composables/SelectedMovieInfo.js";
export default {
  name: "CardControls",
  components: {
    CardControl,
    CardControlLike,
    CardControlDislike,
    CardControlPlay,
    TextBorderBox,
    CardControlExpand,
  },
  setup() {
    const { classification, matchRate, seasons, maxRes, genres } =
      SelectedMovieInfo("movies/selectedMovie");
    return {
      classification,
      matchRate,
      seasons,
      maxRes,
      genres,
    };
  },
};
</script>

<style lang="stylus">
.CardControls
  display flex
  flex-direction column
  background-color #292929
  padding 20px
.CardControls-buttons
  display flex
  width 100%
  justify-content space-between
  margin-bottom 25px
  &--subcontainer
    display flex
    .CardControl
      margin-right 15px
.CardControls-info-element
  margin-right 15px !important
.CardControls-info
  display flex
  color #fff
  align-items center
  p
    margin 0
  .CardControls-matchRate
    color #12e335
    font-weight bold

.CardControls-genres
  display flex
  color #fff
  p
    display flex
    &:after
      content "\A"
      width 5px
      height 5px
      border-radius 50%
      background #707070
      display inline-block
      margin auto 10px;
    &:last-child
      &:after
        display none
</style>
