<template>
  <div id="Login">
    <v-container elevation-10 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout align-content-center justify-center>
             <h3 class="display-3">Sign In</h3>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field label="Email" id="email" solo></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field name="password" label="Password" id="passwort" type="password" solo required></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" @click="login">
                <v-btn color="primary" type="submit">Sign In</v-btn>
                <v-btn color="light-blue lighten-5" type="submit" to="/signup">Sign Up</v-btn>
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
import {
  mapState,
  mapMutations
} from 'vuex'

const LOGIN_URL = 'http://localhost:5000/auth/login'

export default {
  data() {
    return {
      title: 'Login',
    }
  },
  methods: {
    ...mapMutations([
      'SET_LOGGED_IN',
      'SET_USER'
    ]),

    login() {
      const userData = {
        email: email.value,
        passwort: passwort.value
      };
     

      fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      }).then((response) => {
        console.log(response.user);
        localStorage.token = response.user.token;
        setTimeout(() => {
          this.SET_USER(response.user);
          this.$router.push('/app');
        }, 1000);
      })


    },

    clear: () => {
      console.log(password.value);
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
      'isLoggedIn',
      'user'
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
