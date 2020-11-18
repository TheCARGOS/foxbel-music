<template>
    <header class="fu-search__header">
        <div>
            <i class="fas fa-bars" @click="openSidenav()"></i>
            <input class="fu-search__header__search"
                @change="getResults()"
                v-model="toSearch"
                type="text"
                placeholder="Buscar"
            >
        </div>
        <div>
            <i class="fu-search__header__icon fas fa-user-alt"></i>
            <span class="fu-search__header__span">Carlos L.</span>
        </div>
    </header>
</template>

<script>
export default {
    name: "FuSearch",
    data () {
        return {
            toSearch: ""
        }
    },
    methods: {
        getResults () {
            this.$store.dispatch("getResults", this.toSearch)
        },
        openSidenav () {
            const sidenav = document.getElementsByClassName("sidenav")[0]
            sidenav.classList.remove("sidenav--hidden")
        }
    }
}
</script>

<style scoped lang="scss">
    .fu-search__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 40px;
    }

    .fu-search__header > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fa-bars {
        font-size: 18px;
        margin-right: 20px;
        cursor: pointer;
        z-index: 6000;
        color: #662323;
    }

    .fu-search__header__search {
        width: 200px;
        font-size: 18px;
        padding: 7px 16px;
        border: 1px solid #828282;
        border-radius: 100px;
        color: #BDBDBD;
    }

    @media screen and (min-width: 860px) {
        .fu-search__header__search {
            width: 524px;
            font-size: 18px;
            padding: 7px 16px;
            border: 1px solid #828282;
            border-radius: 100px;
            color: #BDBDBD;
        }
    }


    .fu-search__header__search:focus {
        outline: none;
    }

    .fu-search__header__icon {
        height: 13px;
        width: 14px;
        margin-right: 12px;
        color: #E86060;
    }

    .fu-search__header__span {
        font-size: 16px;
        font-family: Quicksand Light;
    }
</style>