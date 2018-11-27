<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" clipped fixed app>
        <v-list dense>
          <v-list-tile v-if="!isLoggedIn" :to="{ path: '/login' }">
            <v-list-tile-action>
              <v-icon>forward</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="isLoggedIn" :to="{path: '/profile'}">
            <v-list-tile-action>
              <v-icon>account_box</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- Implementiere On Click -->
          <v-list-tile v-if="isLoggedIn" :to="{path: '/app'}">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>App</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- Implementiere On Click -->
          <v-list-tile v-if="isLoggedIn" :to="{path: '/settings'}">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout" :to="{path: '/login'}">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>

        <v-subheader v-if="isLoggedIn" class="grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list v-if="isLoggedIn" dense>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="test">
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>ABCDEFG</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-avatar
          v-if="Object.keys(user).length != 0"
          color="grey lighten-4"
        >   <img alt="" :src="user.imageURL">
        </v-avatar>
        <v-btn flat v-if="Object.keys(user).length != 0">{{ user.email }}</v-btn>
      </v-toolbar>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'


export default {

  data: () => ({
    drawer: null,
  }),
  computed:{ ...mapState([
    'name',
    'isLoggedIn',
    'user'
  ]),
  } ,
  methods: {
    ...mapMutations([
      'SET_LOGGED_IN',
      'CLEAR_USER',
      'SET_USER'
    ]),
    test: () => {
      console.log('Clickkkkkk!');
    },
    logout: function() {
      this.CLEAR_USER(); 
    }
  },

};
</script>

<style>
/* .v-list-tile-link-active{
  background: black;
  color: blue;
} */

</style>
