# Prototyping Overnight with Vue

## Outline

* What is Vue.js
* Brief History of Vue.js
* Story: Pinterest for bird watchers is looking to build an app
  * App: Getting started with the CLI Tool
    * https://cli.vuejs.org/guide/
    * `npm install -g @vue/cli`
  * App: Create app with Vue CLI 3
    * `vue ui`
    * `git checkout 01-vue-cli`
* Story: We need to gauge interest in our app
  * App: Build a landing page using a component framework (Vuetify)
    * https://vuetifyjs.com/en/
    * `vue add vuetify`
      * https://www.npmjs.com/package/vue-cli-plugin-vuetify
    * `git checkout 02-add-vuetify`
  * App: Hook up email form to mailchimp for email list
    * `git checkout 03-add-landing-mailchimp`
  * App: Deploy with now.sh
* Story: Users should see a stream of bird watching photos from the iNaturalist API
  * App: List recent bird watching photos
    * https://www.inaturalist.org/observations.json?iconic_taxa[]=Aves&d1=2018-09-01
  * App: Deploy with now.sh
  * App: Search bird watching photos
    * `git checkout 04-stream-bird-photos`
  * App: View bird sightings on a map
    * https://github.com/xkjyeah/vue-google-maps
    * https://github.com/xkjyeah/vue-google-maps/blob/vue2/examples/infowindow.html
    * `git checkout 05-map-sightings`
  * App: Deploy with now.sh
* Story: Users want to sign up and create their own boards
  * App: Vue Router for login / sign up / home / dashboard
  * App: Add Firebase Login
    * `git checkout 06-firebase-auth`
  * App: Users can create boards (Firebase Firestore)
    * https://github.com/gdg-tangier/vue-firestore
    * `git checkout 07-create-boards`
  * App: Users can add images to boards
  * App: Deploy with now.sh
* Story: Next steps, where do we go from here?
  * Other plugins / modules for Vue
    * Testing
    * Mobile - Quasar / Weex / Native Script
    * Awesome Vue
  * Vue Meetup
  * Awesome Vue
