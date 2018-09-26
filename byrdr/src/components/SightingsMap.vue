<template>
  <section class="sightings-map">
    <v-layout>
      <v-flex justify-center xs12 v-if="loading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <gmap-map v-if="!loading" :center="center" :zoom="4" style="width: 100%; height: 82vh">
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false">
        <p>{{selectedSighting.species_guess}}</p>
        <p>{{selectedSighting.place_guess}}</p>
        <p>{{selectedSighting.time_observed_at}}</p>
        <img
          v-if="selectedSighting.photos && selectedSighting.photos.length"
          :src="selectedSighting.photos[0].square_url" />
        <br />
        <a :href="selectedSighting.uri" target="_blank" noopener nofollow>View Sighting</a>
      </gmap-info-window>
      <gmap-marker
        :key="i" v-for="(m,i) in markers"
        :position="m.position"
        :clickable="true"
        @click="toggleInfoWindow(m,i)"></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
export default {
  data: () => ({
    loading: true,
    selectedSighting: {},
    infoWindowPos: null,
    infoWinOpen: false,
    currentMidx: null,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },
    center: {
      lat: 38.866709,
      lng: -99.1904817,
    },
    markers: [],
  }),
  async mounted() {
    const API_URL = 'https://www.inaturalist.org/observations.json?iconic_taxa[]=Aves&per_page=200';
    const response = await fetch(API_URL);
    const result = await response.json();
    const markers = result.map(sighting => ({
      position: {
        lat: Number(sighting.latitude),
        lng: Number(sighting.longitude),
      },
      sighting,
    }));
    this.markers = markers;
    this.loading = false;
    this.$ga.page({
      page: '/',
      title: 'Sighting Map page',
    });
  },
  methods: {
    toggleInfoWindow(marker, id) {
      this.infoWindowPos = marker.position;
      this.selectedSighting = marker.sighting;
      if (this.currentMidx === id) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = id;
      }
    },
  },
};
</script>
