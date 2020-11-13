<template>
  <div class="fu-player">
    <img class="fu-player__image" :src="image_url" :alt="name" />
    <div class="fu-player__details">
      <p class="fu-player__name">{{ name }}</p>
      <p class="fu-player__album">{{ album }}</p>
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
  data() {
    return {
      audio: new Audio(this.url),
      isPaused: true,
      volume: 50,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
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
  background-color: #2196F3;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
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

.fu-player__album {
  font-weight: 400;
  font-size: 12px;
}

.fu-player__play {
  align-self: center;
  justify-self: center;
  color: white;
  font-size: 20px;
  background-color: #6ABDFF;
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
}

.fu-player__volumeRange {
  appearance: none;
  outline: none;
  border-radius: 8px;
  height: 6px;
  cursor: pointer;
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
</style>