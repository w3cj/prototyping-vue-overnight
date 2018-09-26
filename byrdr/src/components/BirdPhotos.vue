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
        xs4
        :key="photo.id"
      >
        <v-card>
          <v-img
            :src="photo.medium_url"
            height="600px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="photo.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon :href="photo.native_page_url">
              <v-icon>bookmark</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
        p.title = sighting.taxon.common_name ? sighting.taxon.common_name.name : '';
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
      return this.photos.filter(p => p.title.match(regexp));
    },
  },
};
</script>

<style>

</style>
