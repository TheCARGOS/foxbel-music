<template>
  <div class="fu-player">
    <img class="fu-player__image" :src="selectedSong.album.cover_big" :alt="selectedSong.artist.name" />
    <div class="fu-player__details">
      <p class="fu-player__name">{{ selectedSong.title_short }}</p>
      <div class="fu-player__artist">
        <img class="fu-player__artist__img" :src="selectedSong.artist.picture_small" alt="selectedSong.artist.name">
        <span class="fu-player__artist__name">{{ selectedSong.artist.name }}</span>
      </div>
    </div>
    <div class="fu-player__play" @click="handlePodcast">
      <i v-if="isPaused" class="fas fa-play"></i>
      <i v-else class="fas fa-pause"></i>
    </div>
    <div class="fu-player__volume">
      <input
        class="fu-player__volumeRange"
        type="range"
        min="0"
        max="100"
        v-model="volume"
        v-on:input="setVolume"
      />
      <div class="fu-player__volumeIcon" @click="toggleVolume">
        <i v-if="volume > 0" class="fas fa-volume-up"></i>
        <i v-else class="fas fa-volume-mute"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.audio.src = this.selectedSong.preview
  },
  data() {
    return {
      audio: new Audio(),
      isPaused: true,
      volume: 50
    }
  },
  computed: {
    selectedSong () {
      return this.$store.getters.selectedSong
    }
  },
  watch: {
    selectedSong: {
      handler () {
        this.audio.src = this.selectedSong.preview
        this.audio.pause()
        this.isPaused = true
      }
    }
  },
  methods: {
    handlePodcast() {
      if (this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
      this.isPaused = !this.isPaused;
    },
    setVolume() {
      this.audio.volume = this.volume / 100;
    },
    toggleVolume() {
      if (this.audio.muted) {
        this.volume = 100;
      } else {
        this.volume = 0;
      }
      this.audio.muted = !this.audio.muted;
      this.setVolume();
    },
  },
};
</script>

<style>
/* Estilos del Reproductor -> fu-player */
.fu-player {
  display: grid;
  grid-template-columns: 100px repeat(3, 1fr);
  background-color: #EB5757;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
}

@media screen and (min-width: 1024px) {
  .fu-player {
    z-index: 50000;
  }
}

.fu-player__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  vertical-align: top;
}

.fu-player__details {
  margin-left: 20px;
  color: #fff;
  align-self: center;
}

.fu-player__name {
  font-weight: bold;
  font-size: 14px;
}

.fu-player__artist {
    display: flex;
    align-items: center;
    padding-top: 10px;
}

.fu-player__artist__img {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    object-fit: cover;
    margin-right: 15px;
}

.fu-player__artist__name {
  font-weight: 400;
  font-size: 12px;
}

.fu-player__play {
  align-self: center;
  justify-self: center;
  color: white;
  font-size: 20px;
  background-color: #FF7676;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.fu-player__volume {
  display: flex;
  align-items: center;
  margin-right: 32px;
  justify-self: end;
  justify-content: space-around;
  padding-left: 10px;
}

.fu-player__volumeRange {
  appearance: none;
  outline: none;
  border-radius: 8px;
  height: 6px;
  cursor: pointer;
  width: 50px;
}

.fu-player__volumeRange::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
}

.fu-player__volumeIcon {
  color: white;
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
}

@media screen and (min-width: 760px) {
  .fu-player__volume {
    justify-self: end;
  }

  .fu-player__volumeRange {
    width: 150px;
  }
}
</style>