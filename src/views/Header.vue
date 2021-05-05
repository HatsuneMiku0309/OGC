<template>
  <div class="basic-color flex items-center">
    <div name="space" class="flex justify-center flex-1"></div>
    <div name="search" class="flex flex-2 justify-center min-w-0 max-w-lg mr-2">
      <input
        type="text"
        placeholder="Search"
        class="search h-full w-full block bg-transparent pl-8 border-2 border-green-500 border-solid rounded-lg text-green-600 font-bold focus:outline-none"
      />
    </div>
    <div class="flex flex-grow justify-end flex-1 pr-2">
      <div name="profile-image" class="image-box">
        <img
          class="w-8 h-8 rounded-lg border-2 border-solid border-green-600 cursor-pointer"
          src="r/../public/assets/images/cute-cat.jpg"
        />
        <div class="login-status"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.search::placeholder {
  @apply text-green-500;
}

.search {
  background-image: url("@/../public/assets/images/search.svg");
  background-size: 16px;
  background-position: 10px 50%;
  @apply bg-no-repeat;
}

.login-status {
  @apply absolute;
  @apply flex;
  @apply w-4;
  @apply h-4;
  @apply right-1;
  @apply top-6;
}

.login-status::before {
  content: "";
  @apply inline-flex;
  @apply m-auto;
  @apply w-3;
  @apply h-3;
  @apply border-2;
  @apply border-solid;
  @apply border-teal-200;
  @apply rounded-full;
  /* @apply bg-teal-500; */
  @apply bg-black;
}

.image-box {
  min-width: 2rem;
}
</style>
