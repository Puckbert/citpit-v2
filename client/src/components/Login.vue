<template>
<div id="Login">

  <md-field>
    <label>E-Mail</label>
    <md-input v-model="type"></md-input>
    <span class="md-helper-text">E-Mail Adresse</span>
  </md-field>
  <md-field>
    <label>Passwort</label>
    <md-input v-model="password" type="password"></md-input>
    <span class="md-helper-text">Passwort</span>
  </md-field>
  <md-button id="loginButton" class="md-raised md-primary">Login</md-button>


</div>
</template>

<script>
  export default {
      data() {
          return {
              title: 'Login'
          }
      }

  }

</script>

<style>
  body{
    width: 97%;
    height: 100%;
    margin: auto;
}

#loginButton{
    width: 30%;
}

</style>
