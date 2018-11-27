<template>
<div id="imageApp">
  <v-card class="elevation-10 mt-4">
    <v-img @click="test" :src="imgsrc" height="350px" width="350px">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">1. Bild</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-card>
</div>
</template>

<script>
export default {
  data: () =>({
    imgsrc: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  }),
  methods:{
      test: () => {
          console.log('Cloccjjjca');

      }
  },
  mounted() {
    console.log('MOUNTED!');
  }
}
</script>

