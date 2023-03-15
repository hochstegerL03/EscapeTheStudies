<template>
  <div class="flex justify-center">
    <div class="ets-container">
      <!--Header-->
      <div>
        <!--Default Banner. Can be modified -->
        <q-img class="q-mb-md" src="images/about_success_banner.jpg"></q-img>
        <!--Banner End-->
        <!--OnePage Menu-->
        <OnPageMenu></OnPageMenu>
        <!--OnePage Menu End-->
      </div>
      <!--Header End-->
      <!--Content-->
      <div class="flex justify-center q-mt-lg">
        <div class="w-90">
          <!--Impressum-->
          <div class="q-my-lg">
            <!--Caption-->
            <figure class="q-ma-none row text">
              <div class="text-weight-bold text-h5">
                Escape the Studies is a small group of Students
              </div>
              <figcaption class="text-weight-light text-italic w-90 q-mt-xs">
                - sponsored by HTL Wien West
              </figcaption>
            </figure>
            <!--Caption End-->
            <!--Impressum Body-->
            <div class="row q-mt-lg">
              <!--Team-->
              <div class="">
                <div class="text-h6 text-weight-regular q-my-md">
                  Four Students, one class and only one Job: Graduate from the
                  <a href="https://www.htlwienwest.at/">HTL Wien West</a> and do so with style...
                </div>
                <div class="text-h6 text-weight-regular q-my-md">
                  Okay, maybe we just want to graduate, even without style.
                </div>
                <div class="text-h6 text-weight-regular q-my-md">
                  <b>Raphael Losko</b> - Backend / Website Support.
                </div>
                <div class="text-h6 text-weight-regular q-my-md">
                  <b>Dominik Peric</b> - Server / Database
                </div>
                <div class="text-h6 text-weight-regular q-my-md">
                  <b>Lukas Hochsteger</b> - Webdeveloper
                </div>
                <div class="text-h6 text-weight-regular q-my-md">That's it. Have a nice day.</div>
                <div class="text-h6 text-weight-regular q-my-md">
                  If you need or want to know anything more:
                  <a href="https://www.wikipedia.org/">Here!</a>
                </div>
              </div>
              <!--Team Ende-->
              <div class="row q-mt-xl">
                <div class="col-12 text-h6">Impressum</div>
                <div class="col-md-6 col-12 q-mt-lg">
                  <div class="text-h6 text-weight-regular">Dominik</div>
                  <div class="text-h6 text-weight-regular">Peric</div>
                  <div class="text-h6 text-weight-regular">HTL Wien West</div>
                  <div class="text-h6 text-weight-regular">Thaliastraße 125</div>
                  <div class="text-h6 text-weight-regular">1160 Wien</div>
                </div>
                <div class="col-md-6 col-12 q-mt-lg">
                  <div class="text-h6 text-weight-regular ets-underline">Kontaktaufnahme:</div>
                  <div class="text-h6 text-weight-regular">E-Mail: peric.d03@htlwienwest.at</div>
                  <div class="text-h6 text-weight-regular">Telefon: +43 678 1221811</div>
                  <div class="text-h6 text-weight-regular">Fax: -</div>
                </div>
              </div>
            </div>
            <!--Impressum Body End-->
          </div>
          <!--Impressum End-->
        </div>
        <!--Funny Buttons-->
        <div class="ets-button-menu row justify-center items-center">
          <div class="col-6">
            <div class="text-center subheader text-h6 text-weight-bold">Commit Arson</div>
            <div class="text-center subheader text-body2 text-italic">Arson Committed: Yes</div>
          </div>
          <div class="col-6 text-center subheader text-h6 text-weight-bold">
            <div class="text-center subheader text-h6 text-weight-bold">Data Security</div>
            <div class="text-center subheader text-body2 text-italic">Smart People: > 1</div>
          </div>
        </div>
        <!--Funny Buttons End-->
      </div>
      <!--Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>
<script setup>
import OnPageMenu from '../components/OnPageMenu.vue';
</script>
