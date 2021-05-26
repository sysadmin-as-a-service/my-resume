<template>
  <div id="app">

    <Hero></Hero>
    <Toggle></Toggle>
    <Skills></Skills>

  </div>
</template>

<script>
import Toggle from './components/Toggle.vue'
import Skills from './components/Skills.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    Skills,
    Toggle,
    Hero
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');

* {
  font-family: 'Dosis', sans-serif;
}

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

a {
  color: #d2d2d2
}
</style>
