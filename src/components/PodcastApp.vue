<template>
    <div class="song-app">
        <fu-search></fu-search>
        <fu-details></fu-details>

        <div class="song-app__results">
            <h1 class="song-app__results__title">Resultados</h1>
            <div class="song-app__results__songs">
                <div v-for="song in songs" :key="song.id">
                    <song-item
                        :song="song"
                    ></song-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FuSearch from './FuSearch.vue';
import FuDetails from './FuDetails.vue';
import SongItem from './SongItem.vue';

// import { mapGetters } from "vuex"

export default {
    name: "PodcastApp",
    components: {
        FuSearch,
        FuDetails,
        SongItem
    },
    props: [
        "songs"
    ]
   
}
</script>

<style>
    .song-app {
        max-height: 100vh;
        padding: 0 40px;
    }

    .song-app__results__title {
        font-size: 22px;
        color: #E86060;
        line-height: 27.5px;
    }

    .song-app__results__songs {
        padding: 20px 0;
        display: grid;
        grid-template-columns: repeat(2, 160px);
        grid-template-rows: repeat(auto-fill, 160px);
        row-gap: 66px;
        column-gap: 14px;
        margin-bottom: 150px;
    }

    @media screen and (min-width: 460px) {
        .song-app__results__songs {
            grid-template-columns: repeat(auto-fill, 160px);
            grid-template-rows: repeat(auto-fill, 160px);
            gap: 22px;
            row-gap: 66px;
        }
    }
    
</style>