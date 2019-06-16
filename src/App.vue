<template>

  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  transition: 0.7s;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
  border: none;
  outline: none;
}
#app {
  text-align: center;
  border: none;

}
</style>
