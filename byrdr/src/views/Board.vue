<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex xs10>
        <h1>{{board.name}}</h1>
        <h3 v-if="!boardImages.length">There are no images in this board.</h3>
      </v-flex>
      <v-flex xs2>
        <v-btn
          v-if="isUsersBoard"
          color="primary"
          @click="showSearch = !showSearch">{{showSearch ? 'Hide' : 'Show'}} Search</v-btn>
      </v-flex>
      <v-flex v-bind="{ xs8: showSearch, xs12: !showSearch }">
        <v-layout row wrap>
          <v-flex xs4 v-for="image in boardImages" :key="image['.key']">
            <Bird :bird="image" :removeBird="isUsersBoard ? removeBird : null" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-if="showSearch" xs4>
        <BirdPhotos class="search" size="xs12" :addBird="addBird" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from '@/firestore';
import BirdPhotos from '@/components/BirdPhotos';
import Bird from '@/components/Bird';

export default {
  props: ['user'],
  data: () => ({
    board: {},
    images: [],
    showSearch: false,
  }),
  components: {
    BirdPhotos,
    Bird,
  },
  firestore() {
    return {
      board: firestore.collection('boards').doc(this.$route.params.id),
      images: firestore.collection('images'),
    };
  },
  computed: {
    isUsersBoard() {
      /* eslint-disable no-underscore-dangle */
      return this._props.user && this._props.user.uid === this.board.uid;
    },
    boardImages() {
      return this.images.filter(i => i.board_id === this.$route.params.id);
    },
  },
  methods: {
    addBird(bird) {
      this.$firestore.images.add({
        /* eslint-disable no-underscore-dangle */
        uid: this._props.user.uid,
        board_id: this.$route.params.id,
        url: bird.medium_url,
        ...bird,
      });
    },
    async removeBird(bird) {
      await this.$firestore.images.doc(bird['.key']).delete();
    },
  },
};
</script>

<style>
.search {
  height: 800px;
  overflow-x: scroll;
}
</style>
