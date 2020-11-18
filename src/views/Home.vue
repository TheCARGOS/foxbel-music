<template>
  <div class="home">
    <div class="sidenav-wrapper">
      <sidenav></sidenav>
    </div>

    <div class="podcast-app-wrapper">
      <podcast-app :songs="songs"></podcast-app>
    </div>


    <div v-if="selectedSong.title" class="app-player">
      <fu-player
        :name="selectedSong.title"
        :artist="selectedSong.artist.name"
        :url="selectedSong.preview"
        :image_url="selectedSong.album.cover_big"
      ></fu-player>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidenav from '../components/Sidenav.vue';
import PodcastApp from '../components/PodcastApp.vue';
import FuPlayer from "../components/FuPlayer";

import { mapGetters } from "vuex"

export default {
  name: 'Home',
  components: {
    Sidenav,
    PodcastApp,
    FuPlayer
  },
  data () {
    return {
        loading: false,
        selection: 1,
        file: 'http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1.mp3',
    }
  },
  created () {
    this.$store.dispatch("getGenres")
    this.$store.dispatch("getResults", "eminem")
  },
  computed: {
    ...mapGetters([
        "genres",
        "results",
        "songs",
        "selectedSong"
    ])
  },
  methods: {
    selected (song) {
        this.$store.dispatch("selectSong", song)
    }
  }
}
</script>

<style>
  .home {
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    font-family: Quicksand;
  }
  @media screen and (min-width: 1024px) {
    .home {
      grid-template-columns: 330px 1fr;
      font-family: Quicksand;
    }
  }
</style>