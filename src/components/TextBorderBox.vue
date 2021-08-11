<template>
  <div class="TextBorderBox" v-bind="$attrs">
    <slot>
      <p>text</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "TextBorderBox",
};
</script>

<style lang="stylus">
.TextBorderBox
    border 1px solid white
    height auto
    padding 5px
</style>
