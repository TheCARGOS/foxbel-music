import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    podcasts: [],
    currentPodcastClips: [],
    currentPodcast: null,
  },
  getters: {
    getFirstClip(ctx) {
      return ctx.currentPodcastClips[0];
    },
    podcasts (ctx) {
      return ctx.podcasts
    },
    currentPodcast (ctx) {
      return ctx.currentPodcast
    }
  },
  mutations: {
    setPodcasts (ctx, payload) {
      ctx.podcasts = payload
    },
    async handleClickPodcast(ctx, payload) {
      ctx.state.currentPodcast = payload.podcast;
      ctx.state.currentPodcastClips = payload.audio_clips;
    },
    getAudioClips(ctx, payload) {
      ctx.state.podcasts = payload
    }
  },
  actions: {
    setPodcasts (ctx) {
      fetch("https://api.audioboom.com/channels/recommended")
        .then((response) => response.json())
        .then(data => ctx.commit("setPodcasts", data.body));
    },

    async handleClickPodcast(ctx, podcast) {
      const { id } = podcast;
      const audio_clips = await this.getAudioClips(id);
      ctx.commit("handlePodcast", {podcast, audio_clips})
    },

    getAudioClips(ctx, id) {
      return fetch(`https://api.audioboom.com/channels/${id}/audio_clips`)
        .then((response) => response.json())
        .then((data) => ctx.commit("getAudioClips", data.body.audio_clips));
    },
  },
  modules: {

  }
})
