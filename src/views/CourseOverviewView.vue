<template>
  <div>
    <div class="header q-mt-md">
      <div class="headeroverlay h-100">
        <div class="flex justify-center items-center h-100">
          <div class="shadowbox">
            <div class="text-white text-h4 text-weight-bolder">Just an Act</div>
          </div>
        </div>
      </div>
      <img class="headerimg" src="images/just_an_act_placeholder.jpg" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  position: relative;
}
.headeroverlay {
  width: 100%;
  height: 100%;
  position: absolute;
}

.headerimg {
  height: 33vh;
  width: 100%;
}

.shadowbox {
  text-shadow: 5px 5px 5px black;
}
</style>
<script setup></script>
