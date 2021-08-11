<template>
  <button
    class="CardControl"
    :class="{
      'CardControl--white-inverted': scheme === 'white-inverted',
      'CardControl--has-text': text !== null,
    }"
  >
    <Icon class="CardControl-icon" :icon-id="controlType" />
    <p class="CardControl-text" v-if="text">{{ text }}</p>
  </button>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "CardControl",
  props: {
    controlType: {
      type: String,
      required: true,
      validator(value) {
        // The value must match one of these strings
        return ["play", "plus", "like", "dislike", "expand"].includes(value);
      },
      default: "play",
    },
    scheme: {
      //Visual schema
      type: String,
      default: "normal",
      validator(value) {
        // The value must match one of these strings
        return ["normal", "white-inverted"].includes(value);
      },
    },
    text: {
      type: [String, null],
      default: null,
    },
  },
  components: { Icon },
  setup(props) {
    //TODO Divide buttons per function
    const buttonFunction = () => {
      switch (props.controlType) {
        case "plus":
          return () => {
            console.log("plus");
          };
        case "expand":
          return () => {
            console.log("expand");
          };
        default:
          return () => {
            console.log("Not a control type");
          };
      }
    };
    return {
      buttonFunction,
    };
  },
};
</script>

<style lang="stylus">
.CardControl
  border-radius 50%
  padding 9px
  border 3px solid #9c9c9c
  background-color #4a4a4a
  color #fff
  font-size 24px
  display flex
  justify-content center
  align-items center
  cursor pointer
  &:hover
    border 3px solid #fff
  &--white-inverted
    background-color #fff
    color #000
    border 3px solid #fff
    &:hover
      opacity 0.8
  &--has-text
    border-radius 4px
    padding-left 2rem
    padding-right 2.4rem
    justify-content start
    .CardControl-icon
      margin-right 1rem
    .CardControl-text
      font-family: Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2.4rem;
      margin 0
</style>
