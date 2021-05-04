<template>
  <div>
    <h1>{title}</h1>
    <div v-for="(child, key) in childs" :key="key">
      <div>{child}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  setup(prop) {
    console.log(prop);

    return {};
  },
};
</script>

<style scoped></style>
