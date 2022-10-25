<template>
  <div class="flex justify-center">
    <div class="capped-sm">
      <!--Infos-->
      <et-s-header
        titel="Welcome"
        content="Discover a World decorated with Code and Style!"
      ></et-s-header>
      <!--Infos Ende-->
      <!--Image Logo-->
      <div class="flex justify-center items-center q-mt-xl">
        <q-img class="w-50 q-mt-xl" src="svgs/logo.svg"></q-img>
        <div class="w-90">
          <!--Chat Nav-->
          <et-s-chat-nav class="q-pa-md q-my-lg"
            ><span class="titelold">Login with Google</span></et-s-chat-nav
          >
          <et-s-chat-nav colortype="dark" direction="right" class="q-pa-md q-mt-lg"
            ><span class="titelold">Sign Up</span></et-s-chat-nav
          >
          <!--Chat Nav-->
          <!--Guest-->
          <div class="flex justify-center q-my-md">
            <router-link to="/" class="text-black text text-body1 text-weight-light text-center"
              >Login as a Guest</router-link
            >
          </div>
          <!--Guest-->
        </div>
        <!--Chat Input-->
        <div class="row justify-start items-center q-ma-md q-gutter-sm w-100">
          <div class="col-9 chatinput">
            <div class="flex items-center justify-center h-100">
              <div class="q-mx-md text-center text-mono">Let the Programming begin...</div>
            </div>
          </div>
          <div class="col-2 chatinput round"></div>
        </div>
        <!--Chat Input End-->
      </div>
    </div>
  </div>
  <!--Image Logo End-->
</template>
<style lang="scss" scoped>
.w-50 {
  width: 50%;
}

.chatinput {
  background-color: $accent;
  border-radius: 25px;
  height: 7vh !important;
}
.round {
  border-radius: 50%;
}
</style>
<script setup>
import EtSHeader from '../components/EtSHeader.vue';
import EtSChatNav from '../components/EtSChatNav.vue';
</script>
