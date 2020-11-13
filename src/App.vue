<template>
  <div id="app">
    <div class="sidenav-wrapper">
      <sidenav></sidenav>
    </div>

    <div class="podcast-app-wrapper">
      <podcast-app :podcasts="podcasts"></podcast-app>
    </div>


    <div v-if="currentPodcastClips.length > 0" class="app-player">
      <fu-player
        :name="getFirstClip.title"
        :album="getFirstClip.channel.title"
        :url="getFirstClip.urls.high_mp3"
        :image_url="getFirstClip.channel.urls.logo_image.original"
      ></fu-player>
    </div>
  </div>
</template>

<script>
import Sidenav from './components/Sidenav.vue';
import PodcastApp from './components/PodcastApp.vue';
import FuPlayer from "./components/FuPlayer";

export default {
  name: "App",
  components: {
    Sidenav,
    PodcastApp,
    FuPlayer
  },
  computed: {
    getFirstClip() {
      return this.currentPodcastClips[0];
    },
    currentPodcastClips () {
      return this.$store.state.currentPodcastClips
    }
  },
  created() {
    fetch("https://api.audioboom.com/channels/recommended")
      .then((response) => response.json())
      .then((data) => (this.podcasts = data.body));
  },
  data() {
    return {
      podcasts: [],
      currentPodcast: null,
    };
  },
  methods: {
    async handleClickPodcast(podcast) {
      const { id } = podcast;
      this.currentPodcast = podcast;
      const audio_clips = await this.getAudioClips(id);
      this.currentPodcastClips = audio_clips;
    },
    getAudioClips(id) {
      return fetch(`https://api.audioboom.com/channels/${id}/audio_clips`)
        .then((response) => response.json())
        .then((data) => data.body.audio_clips);
    },
    // comparePodcastWithCurrent(podcast) {
    //   return this.currentPodcast
    //     ? podcast.id === this.currentPodcast.id
    //     : false;
    // },
  },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100vh;
    display: grid;
    grid-template-columns: 330px 1fr;
    font-family: Quicksand;
  }

  .podcast-app-wrapper {
    /* max-width: 1224px;
    right: 0;
    margin-right: auto; */
  }
</style>
