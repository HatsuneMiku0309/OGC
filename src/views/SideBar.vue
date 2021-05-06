<template>
  <div name="side-bar" class="flex flex-col basic-color">
    <div
      name="top-nav"
      class="flex h-16 w-full border-b hover:bg-green-400 cursor-pointer"
    >
      <div
        title="Open Generation Chat"
        class="top-nav flex flex-1 items-center px-4"
      >
        OGC
      </div>
      <div class="flex items-center w-20">edit</div>
    </div>
    <div class="overflow-y-hidden hover:overflow-y-scroll m-2 h-full">
      <TreeMenu v-for="(tree, key) in treeMenu" :key="key" :menu="tree" />
    </div>
  </div>
</template>

<script>
import TreeMenu from "@/components/TreeMenu.vue";
export default {
  name: "SideBar",
  components: { TreeMenu },
  setup() {
    return {
      treeMenu: [
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
        { title: "Theards" },
        { title: "Menu1", childs: ["1", "2"] },
        { title: "Menu2", childs: ["3", "4"] },
      ],
    };
  },
};
</script>

<style scoped>
.top-nav::before {
  content: "";
  @apply w-4;
  @apply h-4;
  @apply bg-no-repeat;
  @apply left-14;
  @apply absolute;
  background-image: url("@/../public/assets/images/chevron-down.svg");
}
</style>
