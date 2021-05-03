<template>
  <div name="side-bar" class="flex flex-col h-screen basic-color">
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
    <div class="overflow-y-hidden hover:overflow-y-scroll h-screen">
      <div name="menu">
        <h1>menu1</h1>
        <div>01</div>
        <div>02</div>
      </div>
      <div name="menu2">
        <h1>menu2</h1>
        <div>03</div>
        <div>04</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.top-nav::before {
  content: "▽";
  color: #337ab7;
  position: absolute;
  left: 3.5rem;
}
</style>
