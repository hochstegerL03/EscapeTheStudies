<template>
  <div>
    <!--Header-->
    <div>
      <!--Default Banner. Can be modified -->
      <q-img class="q-mb-md bannercap" src="images/about_success_banner.jpg"></q-img>
      <!--Banner End-->
      <!--OnePage Menu-->
      <q-tabs align="justify" class="subheader text-weight-bolder">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/courses" label="Courses" />
        <q-route-tab to="/about" label="About us" />
      </q-tabs>
      <!--OnePage Menu End-->
    </div>
    <!--Header End-->
    <!--Content-->
    <div class="flex justify-center w-100 q-mt-lg">
      <div class="w-90">
        <!--Impressum-->
        <div class="q-my-lg">
          <!--Caption-->
          <figure class="w-100 q-ma-none row text">
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
            <!--Chapter 1-->
            <div>
              <div class="text-h6 text-weight-regular q-my-md">
                Four Students, one class and only one Job: Graduate from the
                <a href="https://www.htlwienwest.at/">HTL Wien West</a> and do so with style...
              </div>
              <div class="text-h6 text-weight-regular q-my-md">
                Okay, maybe we just want to graduate, even without style.
              </div>
              <div class="text-h6 text-weight-regular q-my-md">
                <b>Raphael Losko</b> - The suicidal man who knows da wae.
              </div>
              <div class="text-h6 text-weight-regular q-my-md">
                <b>Dominik Peric</b> - The Doki Doki Literature Club Member and Server Janitor.
              </div>
              <div class="text-h6 text-weight-regular q-my-md">
                <b>Lukas Hochsteger</b> - Me. Fun Fact: I like to commit arson, make useless
                Wireframes / Websites and to annoy Raphael Losko.
              </div>
              <div class="text-h6 text-weight-regular q-my-md">That's it. Have a nice day.</div>
              <div class="text-h6 text-weight-regular q-my-md">
                If you need or want to know anything more:
                <a href="https://www.wikipedia.org/">Here!</a>
              </div>
            </div>
            <!--Chapter 1-->
          </div>
          <!--Impressum Body End-->
        </div>
        <!--Impressum End-->
      </div>
      <!--Funny Buttons-->
      <div class="funnybtn w-100 row justify-center items-center">
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
</template>

<style lang="scss" scoped>
.bannercap {
  max-height: 35rem;
}

.funnybtn {
  background-color: $secondary;
  color: white;
  height: 8vh;
  border-radius: 20px 20px 0px 0px;
}

.w-100 {
  width: 100%;
}
.w-90 {
  width: 90%;
  max-width: 1024px;
}
</style>
<script setup></script>
