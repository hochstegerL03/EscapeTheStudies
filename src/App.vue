<template>
  <q-layout view="hHh lpR ffr">
    <q-header reveal class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <!--Navbar used for the Main Navigation -->
        <et-s-navbar @showRightMenu="toggleRightDrawer"></et-s-navbar>
        <!--Navbar End-->
      </q-toolbar>
    </q-header>

    <!--Right Sidebar-->
    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>
    <!--Right Sidebar End-->

    <q-page-container>
      <!--Default Banner. Can be modified -->
      <et-s-banner
        class="q-mb-md bannerlong"
        img="url('./src/assets/images/home_gears_banner.jpg')"
      ></et-s-banner>
      <!--Banner End-->
      <!--Infos-->
      <et-s-header
        titel="Escape the Studies"
        content="Brace yourself and enter a brand new Universe of Tech and Games"
        link="Learn more..."
      ></et-s-header>
      <!--Infos Ende-->
      <!--OnePage Menu-->
      <q-tabs align="justify">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
      <!--OnePage Menu End-->
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EtSNavbar from './components/EtSNavbar.vue';
import EtSBanner from './components/EtSBanner.vue';
import EtSHeader from './components/EtSHeader.vue';

const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
<style scoped>
.bannerlong {
  width: 100%;
  height: 15vh;
}
</style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,700&display=swap');
.subheader {
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  color: $secondary;
  text-decoration: none;
}
a:link {
  color: $secondary;
}

a:visited {
  color: $primary;
}

a:hover {
  color: $primary;
}

a:active {
  color: $primary;
}
</style>
