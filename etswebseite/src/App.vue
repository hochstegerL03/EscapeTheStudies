<template>
  <q-layout view="hHr lpR ffr">
    <q-header reveal class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <!--Navbar used for the Main Navigation -->
        <et-s-navbar @showRightMenu="toggleRightDrawer"></et-s-navbar>
        <!--Navbar End-->
      </q-toolbar>
    </q-header>

    <!--Right Sidebar-->
    <q-drawer class="bg-accent" v-model="rightDrawerOpen" side="right" overlay bordered>
      <!--Close Btn-->
      <div>
        <q-btn
          class="float-right q-my-md q-mr-lg"
          dense
          flat
          round
          icon="close"
          @click="toggleRightDrawer"
        />
      </div>
      <!--Close Btn End-->
      <!--Drawer Menu-->
      <div class="row justify-center ets-w-100">
        <div class="ets-w-80">
          <div class="text-center q-mb-xl text-h3 ets-title">Escape the Studies</div>
          <div>
            <router-link to="/">
              <et-s-chat-nav colortype="white" class="q-pa-sm q-my-lg ets-title"
                ><span>Home</span></et-s-chat-nav
              >
            </router-link>
          </div>
          <div>
            <router-link to="/courses" class="">
              <et-s-chat-nav colortype="dark" direction="right" class="q-pa-sm q-my-lg ets-title"
                ><span>Courses</span></et-s-chat-nav
              >
            </router-link>
          </div>
          <div>
            <router-link to="/about">
              <et-s-chat-nav colortype="white" class="q-pa-sm q-my-lg ets-title"
                ><span>About Us</span></et-s-chat-nav
              >
            </router-link>
          </div>
          <div>
            <router-link disabled to="/sign" class="disabled">
              <et-s-chat-nav colortype="dark" direction="right" class="q-pa-sm q-my-lg ets-title"
                ><span>Login in</span></et-s-chat-nav
              >
            </router-link>
          </div>
          <div>
            <router-link disabled to="/sign" class="disabled">
              <et-s-chat-nav colortype="white" class="q-pa-sm q-my-lg ets-title"
                ><span>Sign Up</span></et-s-chat-nav
              >
            </router-link>
          </div>
        </div>
      </div>
      <!--Drawer Menu-->
    </q-drawer>
    <!--Right Sidebar End-->

    <q-page-container class="scroll">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import EtSNavbar from './components/EtSNavbar.vue';
import EtSChatNav from './components/EtSChatNav.vue';

const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
<style lang="scss">
// Überarbeitet

//Typografie
.ets-text {
  font-family: 'Roboto', sans-serif;
}

.ets-header {
  font-family: 'Source Sans Pro', sans-serif;
}

.ets-underline {
  text-decoration: underline;
}

.ets-image-capped {
  max-height: 10rem;
}

.ets-text-shadow {
  text-shadow: 5px 5px 5px black;
}

.ets-lightbar {
  background-color: $secondary;
  width: 80%;
  height: 100%;
  max-height: 6vh;
  border-radius: 0vw 15px 15px 15px;
  z-index: 1;
  position: relative;
}

//Elements
.ets-button-menu {
  background-color: $secondary;
  color: white;
  height: 8vh;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
}

.ets-banner {
  max-height: 50vh;
  background-color: $secondary;
}

.ets-banner-small {
  max-height: 20vh;
  background-color: $secondary;
}

.placeholder {
  background-color: $accent;
}

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.ets-title {
  font-family: 'Lobster', cursive;
}

.ets-fake-button {
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.placeholder-preview {
  background-color: $accent;
  width: 100%;
  height: 25vh;
}

.ets-disabled {
  opacity: 0.5;
  pointer-events: none;
}

.footer {
  font-size: 0.86rem;
}
.header {
  font-family: 'Roboto', sans-serif;
}

.ets-text-mono {
  font-family: 'Roboto Mono', monospace;
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

.ets-w-100 {
  width: 100% !important;
}
.ets-w-90 {
  width: 90%;
  max-width: 1024px;
}
.ets-w-80 {
  width: 80% !important;
}
.w-70 {
  width: 70% !important;
}

.ets-w-50 {
  width: 50% !important;
}

.ets-max-screen-800 {
  max-width: 800px;
}

.ets-h-100 {
  height: 100% !important;
}

.ets-card-lection {
  border-radius: 15px;
}

.ets-card-lection-start {
  border-radius: 15px 0px 0px 15px;
}

.ets-card-lection-end {
  border-radius: 0px 15px 15px 0px;
  height: 100% !important;
}

.ets-font-icon {
  height: 100% !important;
  font-size: 2rem;
  color: white;
}

.ets-overflow-scroll {
  white-space: nowrap;
  overflow: auto;
}
.ets-overflow-scroll::-webkit-scrollbar {
  display: none;
}

.image {
  max-width: 500px;
}
</style>
