<template>
  <div id="Login">
    <v-content class="pa-5">
      <v-form ref="form" lazy-validation>
        <v-text-field class="ma-2" label="E-Mail" required></v-text-field>
        <v-text-field class="ma-2" label="Passwort" required></v-text-field>
        <v-select class="ma-2" :items="schools" :rules="[v => !!v || 'Item is required']" label="Schule" required></v-select>
        <v-checkbox :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
          required></v-checkbox>

        <v-btn @click="login">
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-content>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        title: 'Login',
        schools: [
          'Käthe-Kollwitz Gymnasium',
          'Albert Eistein Realschule',
          'RandomSchuleABC'
        ],
      }
    },
    methods: {
      ...mapMutations([
        'SET_LOGGED_IN'
      ]),
      login: function() {
        this.SET_LOGGED_IN(true);
        console.log(this.isLoggedIn);
        
      },
      clear: () => {
        console.log('CLEAR FORM');
      }
    },
    computed: { 
      ...mapState([
        'isLoggedIn'
      ])
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
