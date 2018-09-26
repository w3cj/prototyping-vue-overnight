<template>
  <v-card>
    <v-img
      :src="bird.medium_url"
      height="600px"
    >
      <v-container
        fill-height
        fluid
        pa-2
      >
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" v-text="bird.title"></span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon :href="bird.native_page_url" target="_blank" noopener nofollow>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon v-if="addBird" @click="addBird(bird)">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn icon v-if="removeBird" @click="removeBird(bird)">
        <v-icon>remove</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['bird', 'addBird', 'removeBird'],
};
</script>

