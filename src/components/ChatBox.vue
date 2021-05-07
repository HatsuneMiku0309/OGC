<template>
  <div class="hover:bg-teal-100 py-2 pl-2">
    <span>
      <pre>{{ message }}</pre>
    </span>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "ChatBox",
  props: { messageObj: { type: Object, required: true } },
  setup(props) {
    const { message } = reactive(props.messageObj);

    return { message };
  },
};
</script>

<style scoped></style>
