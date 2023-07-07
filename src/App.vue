<script setup lang="ts">
  import { ref } from 'vue';
  import lorem from './lorem.json';
  let output = ref("");
  let numberOfParagraphs = ref(1);
  const setNumberOfParagraphs = (amount: number) => {
    numberOfParagraphs.value = amount;
    getParagraphs();
  }
  const getParagraphs = () => {
    output.value = lorem.slice(0, numberOfParagraphs.value).map(p => `<p>${p}</p>`).join("\n");
  }
  getParagraphs();
  const randomParagraphs = () => {
    output.value = lorem.sort(() => 0.5 - Math.random()).slice(0, numberOfParagraphs.value).map(p => `<p>${p}</p>`).join("\n");
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output.value);
  }
</script>

<template>
  <main>
    <h1>Lorem ipsum generator</h1>
    <div class="buttons">
      <button v-for="i in 9" :key="i" :class="{ active: i == numberOfParagraphs}" @click="setNumberOfParagraphs(i)">
        {{ i }} par.
      </button>
      <button @click="randomParagraphs()">Random</button>
      <button @click="copyToClipboard()">Copy to clipboard</button>
    </div>
    <textarea readonly v-model="output"></textarea>
    <p>Project repository: <a href="https://github.com/kamilwyremski/lorem" title="Lorem Ipsum Repository">https://github.com/kamilwyremski/lorem</a></p>
    <p>Project 2023 by <a href="https://wyremski.pl/en" title="Kamil Wyremski">Kamil Wyremski</a></p>
  </main>
</template>

<style scoped>
h1{
  font-weight: 500;
  font-size: 2.6rem;
}
.buttons{
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
button {
  --b: 3px; 
  --s: .45em; 
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color-text);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color-text) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}
button:hover,
button:focus-visible{
  --_p: 0px;
  outline-color: var(--color-text);
  outline-offset: .05em;
}
button.active,
button:active {
  background: var(--color-text);
  color: #fff;
}
textarea{
  width: 100%; 
  max-width: 100%;
  min-width: 100%;
  height: 15rem;
  background-color: #373B44;
  color: var(--color-text);
  margin-bottom: 1rem;
}
p{
  margin-bottom: 1rem;
}
a{
  color: var(--color-text);
}
</style>
