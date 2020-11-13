<template>
    <div class="fu-details">
        <img class="fu-details__img" src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7248cf84-147c-11eb-bca5-e85774a5f3b9.jpg?crop=2678%2C1507%2C40%2C231&resize=1180" alt="Artist details">
        <div class="fu-details__column">
            <div>
                <h1 class="fu-details__title">{{ currentPodcast.title }}</h1>
                <span class="fu-details__span">Lo mejor de Adele</span>
                <span class="fu-details__span darkred">321, 123 seguidores</span>
                <p class="fu-details__p">Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.</p>
            </div>
            <div class="fu-details__buttons">
                <button class="fu-details__button">Reproducir</button>
                <button class="fu-details__button">Seguir</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "FuDetails",
    ...mapGetters([
            "currentPodcast"
    ])
}
</script>

<style>
    .fu-details {
        height: 250px;
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 1fr;
        margin-bottom: 40px;
    }

    .fu-details__img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }

    .fu-details__column {
        background: rgba(167, 0, 0, 70%);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 40px;
        padding-left: 32px;
        padding-bottom: 20px;
    }

    .fu-details__title {
        font-size: 22px;
        line-height: 27.5px;
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
</style>