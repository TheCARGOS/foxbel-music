<template>
    <div class="sidenav sidenav--hidden">
    <img class="sidenav__title" src="../assets/foxbel-music.png" alt="foxbel title">
    <i class="sidenav__close fas fa-times" @click="closeSidenav()"></i>

    <div class="sidenav__list">
      <h2 class="sidenav__list__title">Mi libreria</h2>
      <ul class="sidenav__list__ul">
        <li class="sidenav__list__item">Recientes</li>
        <li class="sidenav__list__item" @click="setFilter('artist')">Artistas</li>
        <li class="sidenav__list__item" @click="setFilter('album')">Albums</li>
        <li class="sidenav__list__item" @click="setFilter('track')">Canciones</li>
      </ul>
    </div>

    <div class="sidenav__list">
      <h2 class="sidenav__list__title">Playlist</h2>
      <ul class="sidenav__list__ul">
        <li class="sidenav__list__item">Metal</li>
        <li class="sidenav__list__item">Para bailar</li>
        <li class="sidenav__list__item">Rock 90's</li>
        <li class="sidenav__list__item">Baladas</li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "Sidenav",
    methods: {
        closeSidenav () {
            const sidenav = document.getElementsByClassName("sidenav")[0]
            sidenav.classList.add("sidenav--hidden")
        },
        setFilter (value) {
            this.$store.dispatch("setFilter", value)
        }
    }
}
</script>

<style lang="scss">
    @media screen and (min-width: 1024px) {
        .sidenav {
            max-width: 5000px !important;
            .sidenav__close {
                display: none;
            }

            &--hidden > * {
                opacity: unset !important;
                transition: 0;
            }
        }
    }

    .sidenav {
        background: #662323;
        height: 100%;
        width: 330px;
        color: white;
        font-family: Quicksand;
        display: flex;
        flex-direction: column;
        position: fixed;
        max-width: 5000px;
        transition: .6s;
        z-index: 500;
    }

    .sidenav--hidden {
      max-width: 0;
      transition: .3s;
    }

    .sidenav--hidden > * {
        opacity: 0;
        transition: .3s;
    }

    .sidenav__close {
        position: absolute;
        font-size: 18px;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .sidenav__title {
        width: 250px;
        height: 59px;
        margin-top: 50px;
        align-self: center;
        margin-bottom: 30px;
    }

    .sidenav__list {
        padding: 0 40px;
        font-family: Quicksand;
        margin-bottom: 30px;
    }

    .sidenav__list__title {
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 4px;
        line-height: 27.5px;
    }

    .sidenav__list__ul {
        list-style-type: none;
    }

    .sidenav__list__item {
        font-size: 16px;
        font-family: Quicksand Light;
        margin-bottom: 8px;
        cursor: pointer;
        line-height: 20px;
    }

    .sidenav__list__item:hover {
        font-weight: bolder;
    }
    .sidenav__list__item:hover::before {
        content: "";
        width: 5px;
        height: 20px;
        position: absolute;
        left: 0;
        background-color: #E86060;
    }
</style>