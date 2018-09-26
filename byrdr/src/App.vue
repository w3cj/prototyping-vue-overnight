<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
        >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bird Sightings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :loading="loggingIn"
        :disabled="loggingIn"
        color="error"
        class="white--text"
        @click.native="login()"
        v-if="!user"
      >
        Login with Google
        <v-icon right dark>input</v-icon>
      </v-btn>
      <v-menu offset-y v-if="user">
        <v-btn
          slot="activator"
          fab
        >
          <v-avatar>
            <img
              :src="user.photoURL"
              :alt="user.displayName"
            >
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile
            @click="logout()"
          >
            <v-list-tile-title>LogOut</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-tabs
        centered
        icons-and-text
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab href="#bird-photos">
          Image Stream
          <v-icon>image</v-icon>
        </v-tab>

        <v-tab href="#sightings-map">
          Sightings Map
          <v-icon>map</v-icon>
        </v-tab>

        <v-tab-item
          id="bird-photos"
        >
          <BirdPhotos/>
        </v-tab-item>

        <v-tab-item
          id="sightings-map"
        >
          <SightingsMap/>
        </v-tab-item>
      </v-tabs>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase';

import BirdPhotos from '@/components/BirdPhotos';
import SightingsMap from '@/components/SightingsMap';
import firestore from './firestore';

export default {
  name: 'App',
  components: {
    BirdPhotos,
    SightingsMap,
  },
  firestore: () => ({
    users: firestore.collection('users'),
  }),
  data() {
    return {
      clipped: false,
      drawer: true,
      user: null,
      title: 'Byrdr',
      loggingIn: false,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggingIn = false;
        this.user = user;
        this.$firestore.users.doc(user.uid).set({
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
        });
      } else {
        this.loggingIn = false;
        this.user = null;
      }
    });
  },
  methods: {
    async login() {
      this.loggingIn = true;
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    },
    async logout() {
      await firebase.auth().signOut();
    },
  },
};
</script>
