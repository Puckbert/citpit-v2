<template>
  <div id="app">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex shrink>
            <v-card class="elevation-10 ma-5">
              <v-img @click="test" height="300px" width="300px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                aspect-ratio="2.75">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">1. Bild</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
            <v-card class="elevation-10 ma-5">
              <v-img @click="test" height="300px" width="300px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                aspect-ratio="2.75">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">2. Bild</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
    data: () => ({
    drawer: null,
  }),
  methods:{
      test: () => {
          console.log('Cloccjjjca');

      }
  }
}
</script>

