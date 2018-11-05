<template>
  <div id="Signup">
    <v-content class="pa-5">
      <v-form ref="form" lazy-validation>
        <h3>Signup</h3>
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

