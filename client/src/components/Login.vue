<template>
  <div id="Login">
    <v-container fluid elevation-10 mt-3>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center" >
          <h1>Sign In</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field name="email" label="Email" id="email" type="email" solo required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field name="password" label="Password" id="password" type="password" solo required></v-text-field>
              </v-flex> 
              <v-flex class="text-xs-center" mt-5 @click="login">
                <v-btn color="primary" type="submit">Sign In</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container align-start justify-space-around fill-height elevation-5 mt-5>
      <div id="oAuthDiv" ma-4>
        Google
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
      <div id="oAuthDiv" ma-4>
        Facebook
      </div>
      <div id="oAuthDiv" ma-4>
        Github
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const LOGIN_URL = 'http://localhost:5000/signup'

  export default {
    data() {
      return {
        title: 'Login',
      }
    },
    methods: {
      ...mapMutations([
        'SET_LOGGED_IN'
      ]),
      login: function() {
        this.SET_LOGGED_IN(true);
        async
        
      },
      clear: () => {
        console.log('CLEAR FORM');
      },
      onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      },
    },
    computed: { 
      ...mapState([
        'isLoggedIn'
      ])
    }
  }
</script>

<style>
  body {
    width: 97%;
    height: 100%;
    margin: 0 auto;
  }

  #loginButton {
    width: 30%;
  }

  h3{
    margin-left: 7px;
  }

  #oAuthDiv{
    margin: 5%;
  }

</style>
