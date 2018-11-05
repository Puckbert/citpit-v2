<template>
  <div id="Signup">
    <v-container elevation-10 mt-5>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="font-weight-thin display-4">Sign In</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field label="Email" solo></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field name="password" label="Password" id="password" type="password" solo required></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" @click="login">
                <v-btn color="primary" type="submit" to="/app">Sign In</v-btn>
                <v-btn color="light-blue lighten-5" type="submit" to="/signup">Sign Up</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
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
}
</script>

