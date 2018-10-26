<template>
  <div id="app">
    <div class="topBar">
    <h2>PicIt</h2> 
    <nav> 
      <router-link to="/landingPage">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign Up!</router-link>
      <router-link to="/app">App</router-link>
    </nav> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  margin: 0 auto;
  text-align: center;
}

.topBar {
  background: red;
  width: 100%;
  margin: 0 0 0 0;
}
</style>
