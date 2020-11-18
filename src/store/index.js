import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPaused: true,
    selectedSong: {
      "id": "1109731",
      "readable": true,
      "title": "Lose Yourself (From \"8 Mile\" Soundtrack)",
      "title_short": "Lose Yourself",
      "title_version": "(From \"8 Mile\" Soundtrack)",
      "link": "https://www.deezer.com/track/1109731",
      "duration": "326",
      "rank": "985755",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
      "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
      "artist": {
        "id": "13",
        "name": "Eminem",
        "link": "https://www.deezer.com/artist/13",
        "picture": "https://api.deezer.com/artist/13/image",
        "picture_small": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/250x250-000000-80-0-0.jpg",
        "picture_big": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "119606",
        "title": "Curtain Call: The Hits",
        "cover": "https://api.deezer.com/album/119606/image",
        "cover_small": "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
        "cover_big": "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
        "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
        "tracklist": "https://api.deezer.com/album/119606/tracks",
        "type": "album"
      },
      "type": "track"
    },
    selectedArtist: {},
    genres: [],
    results: []
  },
  getters: {
    genres: state => state.genres? state.genres : [],
    results: state => state.results? state.results : [],
    songs: state => state.results? state.results : [],
    selectedSong: state => state.selectedSong? state.selectedSong : []
  },
  mutations: {
    getGenres (state, payload) {
      state.genres = payload
    },
    getResults (state, payload) {
      state.results = payload
    },
    selectSong (state, payload) {
      state.selectedSong = payload
    },
    toggleIsPaused (state, bool) {
      state.isPaused = bool
    }
  },
  actions: {
    async getGenres (ctx) {
      const response = await fetch(`/genre`)
      const payload = await response.json()
      ctx.commit("getGenres", payload.data)
    },
    async getResults (ctx, word) {
      const response = await fetch(`/search?q=${word}`)
      const payload = await response.json()
      ctx.commit("getResults", payload.data)
    },
    async selectSong (ctx, song) {
      ctx.commit("selectSong", song)
    },
    async toggleIsPaused (ctx, bool) {
      ctx.commit("toggleIsPaused", bool)
    }
  },
  modules: {
  }
})
