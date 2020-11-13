<template>
    <div class="podcast-item">
        <img class="podcast-item__img" :src="currentPodcast.image" alt="">
        <h2 class="podcast-item__title">{{ currentPodcast.name }}</h2>
        <!-- <h3 class="podcast-item__subtitle">{{ currentPodcast.album }}</h3> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "PodcastItem",
    props: {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        album: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    computed: {
        ...mapGetters([
            "currentPodcast"
        ])
    }
}
</script>

<style>
    .podcast-item {
        cursor: pointer;
    }

    .podcast-item:first-child {
        cursor: pointer;
        margin: 0;
    }

    .podcast-item__img {
        height: 160px;
        width: 160px;
        object-fit: cover;
    }

    .podcast-item__title {
        font-size: 14px;
        font-weight: bolder;
    }

    .podcast-item__subtitle {
        font-size: 12px;
        font-weight: lighter;
        font-family: Quicksand Light;
    }
</style>