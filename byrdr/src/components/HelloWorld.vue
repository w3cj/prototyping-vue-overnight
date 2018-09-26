<template>
  <v-container fluid>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md4 column>
          <v-card>
            <v-card-title class='clear-top-bottom'>
              <h3>Never wonder where to find a bird again.</h3>
            </v-card-title>
            <v-card-text>
              <p>
                Bird watching taken to a whole new level. Byrdr is an app to share all your best sightings, see where all the best spots are, and check out great finds by other byrdrs.
              </p>
            </v-card-text>
          </v-card>
          <mailchimp/>
        </v-flex>
         <v-flex xs12 md8>
           <v-img
            :src="`web_gbbc_sandhill_crane_3_bob-howdeshell_tn_2012_kk.jpg`"
            class="grey lighten-2"
          ></v-img>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import mailchimp from './mailchimp.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    mailchimp,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 p {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
