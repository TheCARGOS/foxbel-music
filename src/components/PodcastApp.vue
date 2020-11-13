<template>
    <div class="podcast-app">
        <fu-search></fu-search>
        <fu-details></fu-details>

        <div class="podcast-app__results">
            <h1 class="podcast-app__results__title">Resultados</h1>
            <div class="podcast-app__results__podcasts">
                <div v-for="podcast in podcasts" :key="podcast.id">
                    <podcast-item
                        :image="podcast.urls.logo_image.original"
                        :name="podcast.title"
                        :album="podcast.album"
                    ></podcast-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FuSearch from './FuSearch.vue';
import FuDetails from './FuDetails.vue';
import PodcastItem from './PodcastItem.vue';

// import { mapGetters } from "vuex"

export default {
    name: "PodcastApp",
    components: {
        FuSearch,
        FuDetails,
        PodcastItem
    },
    computed: {
        getFirstPodcast () {
            return this.$store.state.currentPodcasts[0]
        }
    },
    created () {
        this.$store.dispatch("setPodcasts")
    }
}
</script>

<style>
    .podcast-app {
        max-height: 100vh;
        padding: 0 40px;
    }

    .podcast-app__results__title {
        font-size: 22px;
        color: #E86060;
        line-height: 27.5px;
    }

    .podcast-app__results__podcasts {
        padding: 20px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, 160px);
        grid-template-rows: repeat(auto-fill, 160px);
        gap: 22px;
        row-gap: 66px;
    }
    
</style>