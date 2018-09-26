<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title" class="ml-5"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span class="ml-5">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'Byrdr',
    };
  },
};
</script>
