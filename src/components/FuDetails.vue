<template>
    <div class="fu-details">
        <img class="fu-details__img" :src="selectedSong.album.cover_big">
        <div class="fu-details__column">
            <div>
                <h1 class="fu-details__title">{{ selectedSong.title_short }}</h1>
                <div class="fu-details__artist">
                    <img class="fu-details__artist__img" :src="selectedSong.artist.picture_small" alt="selectedSong.artist.name">
                    <span class="fu-details__artist__name">{{ selectedSong.artist.name }}</span>
                    <span class="fu-details__span darkred">321, 123 seguidores</span>
                </div>
                <p class="fu-details__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia earum asperiores assumenda nemo expedita sequi voluptatum sint adipisci voluptate, quod, doloribus consectetur, saepe rem.</p>
            </div>
            <div class="fu-details__buttons">
                <button class="fu-details__button">Reproducir</button>
                <button class="fu-details__button">Seguir</button>
            </div>
            <img class="fu-details__column__bg" :src="selectedSong.artist.picture_big" :alt="selectedSong.artist.name">
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "FuDetails",
    computed: {
        ...mapGetters([
            "selectedSong"
    ])
    }
}
</script>

<style lang="scss">

    .fu-details {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 150px 1fr;
        margin-bottom: 40px;

        &__img {
            width: 100% !important;
        }
    }

    @media screen and (min-width: 760px) {
        .fu-details {
            height: 250px;
            display: grid;
            grid-template-columns: 250px 1fr;
            grid-template-rows: 1fr;
            margin-bottom: 40px;
        }
    }

    .fu-details__img {
        height: 100%;
        object-fit: cover;
    }

    .fu-details__column {
        background: rgba(102, 35, 35, .8);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 40px;
        padding-left: 32px;
        padding-bottom: 20px;
        position: relative;
    }

    .fu-details__column__bg {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        z-index: -5;
    }

    .fu-details__title {
        font-size: 22px;
        line-height: 27.5px;
    }

    .fu-details__artist {
        display: flex;
        align-items: center;
        padding-top: 10px;
    }

    .fu-details__artist__img {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        object-fit: cover;
        margin-right: 15px;
    }

    .fu-details__span {
        font-size: 14px;
        line-height: 17.5px;
        font-family: Quicksand Light;
    }

    .fu-details__span:nth-child(3) {
        font-size: 10px !important;
        margin-left: 16px;
    }

    .fu-details__p {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 12px;
        font-family: Quicksand Light;
    }

    .fu-details__buttons {
        font-size: 14px;
    }

    .fu-details__button {
        line-height: 17.5px;
        padding: 7px 23px;
        background-color: #E86060;
        border: none;
        border-radius: 100px;
        color: white;
        margin-right: 20px;
        text-align: center;
        cursor: pointer;
    }

    .fu-details__button:last-child {
        background-color: transparent;
        border: 1px solid #EB5757;
        color:#E86060;
    }
    .fu-details__button:hover {
        background-color: white;
        border: none;
        color:#E86060;
        transition: .5s;
    }
</style>