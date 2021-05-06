<template>
  <div class="">
    <div class="cursor-pointer">
      <i class="menu-open"></i><span>{{ title }}</span>
    </div>
    <div
      v-for="(child, key) in childs"
      :key="key"
      class="pl-4 hover:bg-green-400 cursor-pointer"
    >
      <span>{{ child }}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "TreeMenu",
  props: ["menu"],
  setup(prop) {
    const { title, childs = [] } = reactive(prop.menu);

    return {
      title,
      childs,
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

.menu-open::before {
  content: "";
  background-image: url("@/../public/assets/images/caret-down.svg");
  @apply bg-no-repeat;
  @apply w-4;
  @apply h-4;
  @apply relative;
  @apply inline-block;
}
</style>
