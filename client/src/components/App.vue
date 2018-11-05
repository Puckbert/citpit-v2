<template>
  <div id="app" mt-1>
    <v-content class="pa-0 mt-1">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink justify-center mt-5>
            <v-card class="elevation-10 mt-4">
              <v-img @click="test" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="350px" width="350px">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">1. Bild</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
            <v-card class="elevation-10 mt-3">
              <v-img @click="test" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="350px">
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

