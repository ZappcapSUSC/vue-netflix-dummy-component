<template>
  <div class="Modal" v-bind="$attrs">
    <slot></slot>
    <button @click="closeModal" class="Modal-closeButton">
      <Icon icon-id="close" class="Modal-closeIcon"></Icon>
    </button>
  </div>
</template>

<script>
import { onBeforeMount, onUnmounted } from "vue";
import { useStore } from "vuex";
import Icon from "./Icon.vue";
export default {
  name: "Modal",
  components: { Icon },
  setup() {
    const store = useStore();
    const closeModal = () => {
      store.dispatch("movieCard/modalOpenedSet", false);
    };
    onBeforeMount(() => {
      store.dispatch("appScrimSet", true);
    });
    onUnmounted(() => {
      store.dispatch("appScrimSet", false);
    });
    return {
      closeModal,
    };
  },
};
</script>

<style lang="stylus">
.Modal
  border-radius 5px
  width auto
  height auto
  // padding 20px 20px
  position relative
  display flex
.Modal-closeButton
  position absolute
  display flex
  right 15px
  top 15px
  font-size 30px
  color #fff
  border 0
  padding 8px
  background-color #181818
  -webkit-border-radius 50%
  -moz-border-radius 50%
  border-radius 50%
  cursor pointer
</style>
