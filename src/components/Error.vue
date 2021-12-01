<template>
  <Error v-if="error" :error="error" />
</template>

<script>
export default {
  name: "Error",
  props: ["error"],
};
</script>

<style></style>
