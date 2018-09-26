<template>
  <v-tabs
        centered
        icons-and-text
      >
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab href="#user-boards">
      Boards
      <v-icon>dashboard</v-icon>
    </v-tab>
    <v-tab href="#bird-photos">
      Image Stream
      <v-icon>image</v-icon>
    </v-tab>

    <v-tab href="#sightings-map">
      Sightings Map
      <v-icon>map</v-icon>
    </v-tab>

    <v-tab-item
      id="user-boards"
    >
      <AllBoards />
    </v-tab-item>

    <v-tab-item
      id="bird-photos"
    >
      <BirdPhotos size="xs4"/>
    </v-tab-item>

    <v-tab-item
      id="sightings-map"
    >
      <SightingsMap/>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import AllBoards from '@/components/AllBoards';
import BirdPhotos from '@/components/BirdPhotos';
import SightingsMap from '@/components/SightingsMap';

export default {
  name: 'home',
  components: {
    BirdPhotos,
    SightingsMap,
    AllBoards,
  },
};
</script>
