<template>
  <v-app id="app" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list dense>
        <v-list-tile @click="test">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Implementiere On Click -->
        <v-list-tile @click="test">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>App</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Implementiere On Click -->
        <v-list-tile @click="test">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="test">
          <v-list-tile-action>
            <v-icon color="red">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
      </v-list>
      <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      <v-list>
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
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex shrink>
            <v-card class="elevation-10 ma-5">
              <v-img @click="test" height="300px" width="300px" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
            <v-card class="elevation-10 ma-5">
              <v-img @click="test" height="300px" width="300px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" aspect-ratio="2.75">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
 
  data: () => ({
    drawer: null,
    name: "App",
  }),
  methods: {
    test: () => {
      console.log('Clickkkkkk!');
    }
  } 
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
