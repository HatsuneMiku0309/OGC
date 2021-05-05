<template>
  <div name="content" class="flex flex-col">
    <div class="flex h-14 items-center px-5 flex-shrink-0">
      <div class="flex flex-grow justify-start">cosmo</div>
      <div class="flex flex-grow justify-end">image</div>
    </div>
    <div
      class="flex flex-col flex-1 m-h-0 overflow-y-hidden hover:overflow-y-scroll"
    >
      <div><span>我的第一個聊天</span></div>
      <div>
        <span class="whitespace-pre-wrap">
          <pre>我的第二個聊天    還有換行拉</pre>
        </span>
      </div>
    </div>
    <div class="flex h-20 px-5 flex-shrink-0">input</div>
    <!--
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
    -->
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped></style>
