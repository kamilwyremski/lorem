<script setup lang="ts">


</script>

<template>
  <main>
    <h1>Lorem ipsum generator</h1>
    <button v-for="i in 5" :key="i">
      {{ i }} paragraphs
    </button>
  </main>
</template>

<style scoped>
h1{
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
