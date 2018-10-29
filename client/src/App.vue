<template>
  <v-app id="app" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app disable-route-watcher>
      <v-list dense>
        <v-list-tile v-if="!isLoggedIn" :to="{path: '/login'}">
          <v-list-tile-action>
            <v-icon>forward</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="nav-drawer-link">Login</v-list-tile-title>
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
        <v-list-tile v-if="isLoggedIn" @click="logout" :to="{path: '/login'}">
          <v-list-tile-action>
            <v-icon color="red">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
      <v-subheader v-if="isLoggedIn" class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      <v-list v-if="isLoggedIn">
        <v-list-tile v-for="item in items2" :key="item.text" avatar @click="test">
          <v-list-tile-avatar>
            <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
          </v-list-tile-avatar>
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ name }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
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
  ])
  } ,
  methods: {
    ...mapMutations([
      'SET_LOGGED_IN'
    ]),
    test: () => {
      console.log('Clickkkkkk!');
    },
    logout: function() {
      this.SET_LOGGED_IN(false);  
    }
  },

};
</script>

<style>
.nav-drawer-link{
  text-decoration: none;
  color: red;
}
.nav-drawer-link:hover{
  text-decoration: none;
}

</style>
