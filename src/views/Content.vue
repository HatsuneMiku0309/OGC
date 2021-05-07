<template>
  <div name="content" class="flex flex-col">
    <div
      class="flex h-16 w-full items-center px-5 flex-shrink-0 border-b border-solid border-gray-400"
    >
      <div class="flex flex-grow justify-start">cosmo</div>
      <div class="flex flex-grow justify-end">image</div>
    </div>
    <div
      ref="chatContent"
      id="chatContainer"
      class="flex flex-col flex-1 m-h-0 overflow-y-hidden hover:overflow-y-scroll"
    >
      <ChatBox
        v-for="(_messageObj, key) in messageArr"
        :key="key"
        :messageObj="_messageObj"
      />
    </div>
    <div class="flex h-20 px-3 py-1 flex-shrink-0 border-t border-gray-400">
      <textarea
        @keydown.ctrl.enter.prevent="newLine"
        @keydown.enter.prevent.exact="submit"
        @keydown.tab.prevent="appendSpace"
        v-model="inputText"
        class="border-2 border-gray-400 w-full p-1 rounded resize-none"
      ></textarea>
    </div>
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
import { ref, reactive, nextTick, onMounted } from "vue";
import ChatBox from "@/components/ChatBox.vue";

export default {
  name: "Content",
  components: { ChatBox },
  setup() {
    const messageArr = reactive([]);
    for (let i = 0; i < 100; i++) {
      messageArr.push({ message: "我的第" + (i + 1) + "個聊天" });
    }
    const chatContent = ref(null);
    onMounted(() => {
      let chatContainer = chatContent.value;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    });
    const inputText = ref("");
    const newLine = async (e) => {
      inputText.value += "\n";
      await nextTick();
      e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
    };
    const appendSpace = () => {
      inputText.value += "    ";
    };
    const submit = async (e) => {
      if (!e.ctrlKey && !e.altKey && e.target.value) {
        messageArr.push({ message: e.target.value });
        inputText.value = "";
        await nextTick();
        let chatContainer = chatContent.value;
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
    return {
      chatContent,
      inputText,
      messageArr,
      appendSpace,
      newLine,
      submit,
    };
  },
};
</script>

<style scoped></style>
