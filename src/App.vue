<template>
  <div id="app">

    <Header></Header>
    <Toggle></Toggle>
    <Skills></Skills>

  </div>
</template>

<script>
import Toggle from './components/Toggle.vue'
import Skills from './components/Skills.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Skills,
    Toggle,
    Header
  }
}
</script>

<style>
body {
  background: #202020;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
