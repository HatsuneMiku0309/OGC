<template>
  <Header class="h-10" />
  <div id="container" name="container" class="flex">
    <SideBar class="w-1/6" />
    <Content class="flex-auto" />
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import SideBar from "./views/SideBar.vue";
import Content from "./views/Content.vue";

export default {
  name: "MainPage",
  components: { SideBar, Content, Header },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
