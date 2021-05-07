<template>
  <div class="">
    <div class="cursor-pointer" @click="openMenu">
      <i class="menu" :class="{ 'menu-open': isOpenMenu }"></i
      ><span>{{ title }}</span>
    </div>
    <div v-if="isOpenMenu">
      <span
        v-for="(child, key) in childs"
        :key="key"
        class="flex pl-4 hover:bg-green-400 cursor-pointer"
        >{{ child }}</span
      >
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "TreeMenu",
  props: { menu: { type: Object, required: true } },
  setup(prop) {
    const { title, childs = [] } = reactive(prop.menu);
    const isOpenMenu = ref(false);
    const openMenu = () => {
      isOpenMenu.value = isOpenMenu.value ? false : true;
    };

    return {
      title,
      childs,
      isOpenMenu,
      openMenu,
    };
  },
};
</script>

<style scoped>
.menu::before {
  content: "";
  background-image: url("@/../public/assets/images/caret-right.svg");
  @apply bg-no-repeat;
  @apply w-4;
  @apply h-4;
  @apply relative;
  @apply inline-block;
}

.menu.menu-open::before {
  content: "";
  background-image: url("@/../public/assets/images/caret-down.svg");
  @apply bg-no-repeat;
  @apply w-4;
  @apply h-4;
  @apply relative;
  @apply inline-block;
}
</style>
