<template>
    <div class="sidenav">
    <img class="sidenav__title" src="../assets/foxbel-music.png" alt="foxbel title">

      <div class="sidenav__list">
        <h2 class="sidenav__list__title">Mi libreria</h2>
        <ul class="sidenav__list__ul">
          <li class="sidenav__list__item">Recientes</li>
          <li class="sidenav__list__item">Artistas</li>
          <li class="sidenav__list__item">Albums</li>
          <li class="sidenav__list__item">Canciones</li>
          <li class="sidenav__list__item">Estaciones</li>
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
    name: "Sidenav"
}
</script>

<style>
    .sidenav {
        background: #662323;
        height: 100vh;
        width: 330px;
        color: white;
        font-family: Quicksand;
        display: flex;
        flex-direction: column;
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
</style>