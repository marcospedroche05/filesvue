<template>
  <FilesComponent/>
</template>

<script>
import FilesComponent from './components/FilesComponent.vue';

export default {
  name: 'App',
  components: {
    FilesComponent
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
