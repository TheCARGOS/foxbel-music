<template>
    <header class="fu-search__header">
        <input class="fu-search__header__search" type="text" placeholder="Buscar">
        <div>
            <i class="fu-search__header__icon fas fa-user-alt"></i>
            <span class="fu-search__header__span">Carlos L.</span>
        </div>
    </header>
</template>

<script>
export default {
    name: "FuSearch"
}
</script>

<style scoped>
    .fu-search__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 40px;

    }

    .fu-search__header__search {
        width: 524px;
        font-size: 18px;
        padding: 7px 16px;
        border: 1px solid #828282;
        border-radius: 100px;
        color: #BDBDBD;
    }

    .fu-search__header__icon {
        height: 13px;
        width: 14px;
        margin-right: 12px;
        color: #E86060;
    }

    .fu-search__header__span {
        font-size: 16px;
        font-weight: lighter;
    }
</style>