<template>
  <div class="flex justify-center">
    <div class="ets-max-screen-800">
      <!--Infos-->
      <EtSHeader
        titel="Welcome"
        content="Discover a World decorated with Code and Style!"
      ></EtSHeader>
      <!--Infos Ende-->
      <!--Image Logo-->
      <div class="flex justify-center items-center q-mt-xl">
        <img class="ets-w-50 q-mt-lg q-mb-md" src="svgs/logo.svg"/>
        <!--Chat Nav-->
        <div class="ets-w-90">
          <EtSChatNav class="q-pa-md q-my-lg"
            ><span class="ets-title">Login with Google</span></EtSChatNav
          >
          <span class="row justify-center"><GoogleLogin :callback="callback" /></span>

          <!--Guest-->
          <div class="flex justify-center q-my-lg">
            <router-link to="/" class="text-black text text-body1 text-weight-light text-center"
              >Login as a Guest</router-link
            >
          </div>
          <!--Guest-->
        </div>
        <!--Chat Nav-->
        <!--Chat Input-->
        <div class="row justify-start items-center q-ma-md q-gutter-sm ets-w-100">
          <div class="col-9 ets-chat-decoration">
            <div class="flex items-center justify-center ets-h-100">
              <div class="q-mx-md text-center ets-text-mono">Let the Programming begin...</div>
            </div>
          </div>
          <div class="col-2 ets-chat-decoration ets-round"></div>
        </div>
        <!--Chat Input End-->
      </div>
    </div>
  </div>
  <!--Image Logo End-->
</template>
<style lang="scss" scoped>
.ets-chat-decoration {
  background-color: $accent;
  border-radius: 35px;
  height: 4rem !important;
}
.ets-round {
  border-radius: 50%;
  width: 4rem !important;
}
</style>
<script setup>
import EtSHeader from '../components/EtSHeader.vue';
import EtSChatNav from '../components/EtSChatNav.vue';
import { decodeCredential } from 'vue3-google-login';

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  const userData = decodeCredential(response.credential);
  console.log('Handle the userData', userData.email);
};
</script>
