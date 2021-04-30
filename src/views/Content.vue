<template>
  <div name="content" class="bg-white">
    content
    <router-view v-slot="{ component }">
      <suspense>
        <template #default>
          <component :is="component" />
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </suspense>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped lang="scss"></style>
