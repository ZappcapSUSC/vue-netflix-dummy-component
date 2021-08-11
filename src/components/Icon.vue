<template>
  <svg :class="['Icon', `Icon-${iconId}`]" v-bind="$attrs">
    <use :xlink:href="`#icon-${iconId}`" />
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    iconId: {
      type: String,
      default: undefined,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.Icon
  display inline-block
  size 1em
  stroke-width 0
  stroke currentColor
  fill currentColor
.Icon-close
  width (20 / 32 * 1em)
  height (20 / 32 * 1em)
.Icon-play
  width (32 / 32 * 1em)
  height (32 / 32 * 1em)
.Icon-plus
  width (32 / 32 * 1em)
  height (32 / 32 * 1em)
.Icon-like
  width (32 / 32 * 1em)
  height (32 / 32 * 1em)
.Icon-dislike
  width (32 / 32 * 1em)
  height (32 / 32 * 1em)
.Icon-expand
  width (32 / 32 * 1em)
  height (32 / 32 * 1em)
</style>
