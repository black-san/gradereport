<template>
  <div id="app">
    <GradeReport/>
  </div>
</template>

<script>
import GradeReport from './components/GradeReport.vue'

export default {
  name: 'App',
  components: {
    GradeReport
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
