<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex xs12>
        <v-form>
          <v-text-field
            v-model="search"
            label="Search"
          ></v-text-field>
        </v-form>
      </v-flex>
      <v-flex justify-center xs12 v-if="loading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex
        v-for="photo in filteredPhotos"
        v-bind="{ [size]: true }"
        :key="photo.id"
      >
        <Bird :bird="photo" :addBird="addBird" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Bird from './Bird';

export default {
  props: ['size', 'addBird'],
  components: {
    Bird,
  },
  data: () => ({
    loading: true,
    search: '',
    photos: [],
  }),
  async mounted() {
    const API_URL = 'https://www.inaturalist.org/observations.json?iconic_taxa[]=Aves&per_page=200';
    const response = await fetch(API_URL);
    const result = await response.json();
    let photos = [];
    result.forEach((sighting) => {
      photos = photos.concat(sighting.photos.map((p) => {
        p.title = sighting.species_guess;
        return p;
      }));
    });
    this.photos = photos;
    this.loading = false;
  },
  computed: {
    filteredPhotos() {
      if (!this.search) return this.photos;
      const regexp = new RegExp(this.search, 'gi');
      return this.photos.filter(p => p.title && p.title.match(regexp));
    },
  },
};
</script>

<style>

</style>
