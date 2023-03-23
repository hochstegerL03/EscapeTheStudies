<template>
  <div>
    <div>
      <!--Header-->
      <div>
        <!--Default Banner. Can be modified -->
        <q-img
          class="q-mb-md ets-banner"
          src="https://qyiwkgwvtdxnsowzibpm.supabase.co/storage/v1/object/public/pictures/images/about_success_banner.jpg?t=2023-03-19T11%3A45%3A25.004Z"
        ></q-img>
        <!--Banner End-->
        <!--OnePage Menu-->
        <OnPageMenu></OnPageMenu>
        <!--OnePage Menu End-->
      </div>
      <!--Header End-->
      <!--Content-->
      <div class="flex justify-center q-mt-lg">
        <div class="ets-w-90">
          <!--Impressum-->
          <div class="q-my-lg ets-text">
            <!--Caption-->
            <figure class="q-ma-none row">
              <div class="text-weight-bold text-h5 ets-title-grow">
                Escape the Studies is a small group of Students
              </div>
              <figcaption class="ets-text-small-grow text-weight-light text-italic q-mt-xs">
                - sponsored by HTL Wien West
              </figcaption>
            </figure>
            <!--Caption End-->
            <!--Impressum Body-->
            <div class="row q-mt-lg">
              <!--Team-->
              <div class="ets-text-grow">
                <div class="text-weight-regular q-my-md">
                  Four Students, one class and only one Job: Graduate from the
                  <a href="https://www.htlwienwest.at/">HTL Wien West</a> and do so with style...
                </div>
                <div class="text-weight-regular q-my-md">
                  Okay, maybe we just want to graduate, even without style.
                </div>
                <div class="text-weight-regular q-my-md">
                  <b>Raphael Losko</b> - Backend / Website Support.
                </div>
                <div class="text-weight-regular q-my-md">
                  <b>Dominik Peric</b> - Server / Database
                </div>
                <div class="text-weight-regular q-my-md">
                  <b>Lukas Hochsteger</b> - Webdeveloper
                </div>
                <div class="text-weight-regular q-my-md">That's it. Have a nice day.</div>
                <div class="text-weight-regular q-my-md">
                  If you need or want to know anything more:
                  <a href="https://www.wikipedia.org/">Here!</a>
                </div>
              </div>
              <!--Team Ende-->
              <div class="row q-mt-xl ets-text-grow">
                <div class="col-12">Impressum</div>
                <div class="col-sm-6 col-12 q-mt-lg">
                  <div class="text-weight-regular">Dominik</div>
                  <div class="text-weight-regular">Peric</div>
                  <div class="text-weight-regular">HTL Wien West</div>
                  <div class="text-weight-regular">Thaliastraße 125</div>
                  <div class="text-weight-regular">1160 Wien</div>
                </div>
                <div class="col-sm-6 col-12 q-mt-lg">
                  <div class="text-weight-regular ets-underline">Kontaktaufnahme:</div>
                  <div class="text-weight-regular">E-Mail: peric.d03@htlwienwest.at</div>
                  <div class="text-weight-regular">Telefon: +43 678 1221811</div>
                  <div class="text-weight-regular">Fax: -</div>
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
            <div class="text-center ets-header text-body1 text-weight-bold ets-fake-button">
              Commit Arson
            </div>
            <div class="text-center ets-header text-body2 text-italic">Arson Committed: Yes</div>
          </div>
          <div class="col-6">
            <div class="text-center ets-header text-body1 text-weight-bold ets-fake-button">
              Data Security
            </div>
            <div class="text-center ets-header text-body2 text-italic">Smart People: > 1</div>
          </div>
        </div>
        <!--Funny Buttons End-->
      </div>
      <!--Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ets-text-grow {
  font-size: calc(115% + 1vw) !important;
  line-height: calc(150% + 0.5vw) !important;
}
.ets-title-grow {
  font-size: calc(150% + 1vw) !important;
  line-height: calc(150% + 0.5vw) !important;
}
.ets-text-small-grow {
  font-size: calc(70% + 1vw) !important;
  line-height: calc(100% + 0.5vw) !important;
}
</style>
<script setup>
import OnPageMenu from '../components/OnPageMenu.vue';
</script>
