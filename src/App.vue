<template>
  <div>
    <Header class="h-10 border-gray-400 border-b" />
    <div name="container" class="flex content">
      <SideBar class="w-64 overflow-y-hidden" />
      <Content class="flex-auto" />
    </div>
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

<style scoped>
.content {
  height: calc(100vh - 2.5rem);
}
</style>
