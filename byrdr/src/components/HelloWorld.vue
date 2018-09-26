<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/web_gbbc_sandhill_crane_3_bob-howdeshell_tn_2012_kk.jpg" alt="Sandhill cranes" class="mb-5">
        <mailchimp />
      </v-layout>
    </v-slide-y-transition>
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
    mailchimp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
img {
  width: 50%;
  height: auto;
}
</style>
