<template>
    <div class="song-item" @click="selectSong(song)">
        <figure class="song-item__figure">
            <img class="song-item__figure__img" :src="song.album.cover_big" :alt="song.title">
            <i class="fas fa-play song-item__figure__icon"></i>
        </figure>
        <h2 class="song-item__title">{{ song.title_short }}</h2>
        <h3 class="song-item__subtitle">{{ song.artist.name }}</h3>
    </div>
</template>

<script>
// import { mapGetters } from "vuex"

export default {
    name: "SongItem",
    props: {
        song: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectSong (song) {
            this.$store.dispatch("selectSong", song)
        }
    }
}
</script>

<style>
    .song-item {
        cursor: pointer;
        position: relative;
    }

    .song-item:first-child {
        cursor: pointer;
        margin: 0;
    }

    .song-item__figure {
        position: relative;
        height: auto;
        width: 100%;
    }

    .song-item__figure:hover {
        transform: scale(1.1);
        transition: .2s;
    }

    .song-item:hover h2{
        transform: scale(1.4) translateY(-30px);
        text-align: center;
        transition: .2s;
        z-index: 12250;
        background-color: white;
        width: 80%;
        margin: auto;
    }

    .song-item__figure__img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .song-item__figure:hover .song-item__figure__img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        outline: 5px solid#EB5757;
        transform: rotate(5deg);
        transition: transform .5s;
    }

    .song-item__figure__icon {
        position: absolute;
        color: white;
        left: 50%;
        top: 50%;
        font-size: 38px;
        transform: translate(-50%, -50%);
    }

    .song-item__title {
        font-size: 14px;
        font-weight: bolder;
    }

    .song-item__subtitle {
        font-size: 12px;
        font-weight: lighter;
        font-family: Quicksand Light;
    }
</style>