<template>
  <div>
    <!--Header-->
    <div>
      <!--Default Banner. Can be modified -->
      <q-img class="q-mb-md bannerlong" src="images/courses_banner.png"></q-img>
      <!--Banner End-->
      <!--Infos-->
      <et-s-header
        titel="Welcome, User*in"
        content="Discover the asthetic hub of EtS and start your studies ASAP."
      ></et-s-header>
      <!--Infos Ende-->
      <!--OnePage Menu-->
      <q-tabs align="justify" class="ets-header text-weight-bolder">
        <q-route-tab to="/" label="Home" />
        <q-route-tab disable to="/courses" label="Courses" />
        <q-route-tab to="/about" label="About us" />
      </q-tabs>
      <!--OnePage Menu End-->
    </div>
    <!--Header End-->
    <!--Content-->
    <div class="flex justify-center w-100 q-mt-lg">
      <div class="w-90">
        <!--Lection 1-->
        <div class="flex justify-center q-mb-xl">
          <!--Header Lection 1-->
          <div class="w-100 q-py-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h5 text-weight-bold q-ma-md">Just an Act:</div>
                <div class="text text-h6 q-ma-md text-weight-light">
                  Learn the Magic of Web-Development!
                </div>
              </div>
              <router-link class="col-4 cardbg-medium cardlection-end" to="/cooverview">
              </router-link>
            </div>
          </div>
          <!--Header Lection 1 End-->
          <!--Lection 1 Chapter Cards-->
          <div class="w-100 q-pt-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md">
                  Chapter 1: Spectator
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end">
                <div class="flex justify-center items-center checkmark">
                  <i class="fa-regular fa-square-check"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="w-100 q-pt-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md">
                  Chapter 2: The Act
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <div class="w-100 q-pt-md disabled">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md cappeddesc">
                  Chapter 3: Another Promise
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <!--Lection 1 Chapter Cards End-->
          <!--Lection 1 Link-->
          <router-link class="q-mt-md text-body1 text text-weight-medium" to="/cooverview">
            <a>See more</a>
          </router-link>

          <!--Lection 1 Link End-->
        </div>
        <!--Lection 1 End-->
        <!--Lection 2-->
        <div class="flex justify-center q-mb-xl disabled">
          <!--Header Lection 2-->
          <div class="w-100 q-py-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h5 text-weight-bold text-italic q-ma-md">
                  Your Project:
                </div>
                <div class="text text-h6 q-ma-md text-weight-regular">
                  Want to be Part of EtS? <a>Join now!</a>
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <!--Header Lection 2 End-->
          <!--Lection 2 Chapter Cards-->
          <div class="w-100 q-pt-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md">Step 1: Login</div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end">
                <div class="flex justify-center items-center checkmark">
                  <i class="fa-regular fa-square-check"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="w-100 q-pt-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md">
                  Step 2: Contact us
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <div class="w-100 q-pt-md disabled">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md cappeddesc">
                  Step 3: Celebrate
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <!--Lection 2 Chapter Cards End-->
          <!--Lection 1 Link-->
          <a class="q-mt-md text-body1 text text-weight-medium">See more</a>
          <!--Lection 1 Link End-->
        </div>
        <!--Lection 2 End-->
        <!--Construction-->
        <div class="text-center ets-header text-h4 text-italic q-mb-xl">To be continue...</div>
        <div class="footerspace"></div>

        <!--Construction End-->
      </div>
    </div>
    <!--Content End-->
  </div>
</template>

<style lang="scss" scoped>


.footerspace {
  height: 10vh !important;
}
</style>
<script setup>
import EtSHeader from '../components/EtSHeader.vue';
</script>
