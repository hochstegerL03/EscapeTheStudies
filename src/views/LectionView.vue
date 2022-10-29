<template>
  <!--Menu-->
  <div class="fixed-bottom-right absolutetop">
    <div v-if="showmenu" class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center">
      <div class="flex items-center justify-center h-100 w-100">t</div>
    </div>
    <div v-if="showmenu" class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center">
      <div class="flex items-center justify-center h-100 w-100">l</div>
    </div>
    <div v-if="showmenu" class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center">
      <div class="flex items-start justify-center h-100 w-100">q</div>
    </div>
    <div
      @click="showmenu = !showmenu"
      class="menustatic titelold text-h3 q-my-md q-mx-lg text-white text-center"
    >
      <div class="flex items-center justify-center h-100 w-100">i</div>
    </div>
  </div>
  <!--Menu End-->
  <!--Part 1: Story-->
  <div class="flex justify-center">
    <!--Body/Text-->
    <div class="w-90">
      <!--Header-->
      <div class="text text-h4 text-weight-regular q-my-lg">Chapter 1: Julia III</div>
      <!--Header End-->
      <!--Section 1-->
      <div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </div>
        <hr class="q-my-lg" />
      </div>
      <!--Section 1 End-->
      <!--Section 2-->
      <div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
          nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
          mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore
          dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita
          ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus. s nisl ut aliquip ex ea commodo
        </div>
        <hr class="q-my-lg" />
      </div>
      <!--Section 2 End-->
    </div>
    <!--Body/Text End-->
  </div>
  <!--Part 1: Story End-->
  <!--Part 2: Notes-->
  <div class="flex justify-center">
    <!--Body/Text-->
    <div class="w-90">
      <!--Header-->
      <div class="text text-h4 text-weight-regular q-my-lg">Notes</div>
      <!--Header End-->
      <!--Section 1-->
      <div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Labore et dolore magna aliquyam erat, sed diam sanctus est Lorem ipsum dolor sit amet.
        </div>
        <figure class="w-100 q-ma-none q-mt-lg row text">
          <q-img src="images/chapter_blockchain.png" />
          <figcaption class="text-weight-light text-italic w-90 q-mt-xs">
            Graphic 1: Blockchains
          </figcaption>
        </figure>
        <div class="text text-h6 text-weight-regular q-my-md">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat,
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est.
        </div>
        <figure class="w-100 q-ma-none q-mt-lg row text">
          <q-img src="images/chapter_languages.png" />
          <figcaption class="text-weight-light text-italic w-90 q-mt-xs">
            Graphic 2: Programming Languages
          </figcaption>
        </figure>
        <div class="text text-h5 text-weight-regular q-my-md">Subtopic 1:</div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </div>
        <div class="text text-h6 text-weight-regular q-my-md">
          Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est
        </div>
        <hr class="q-my-lg" />
      </div>
      <!--Section 1 End-->
    </div>
    <!--Body/Text End-->
  </div>
  <!--Part 2: Notes End-->
  <!--Part 3: Questions-->
  <div class="flex justify-center">
    <!--Body/Text-->
    <div class="w-90">
      <!--Header-->
      <div class="flex justify-center">
        <div class="w-90 text text-h4 text-weight-regular q-my-lg">Variables</div>
      </div>
      <!--Header End-->
      <!--Questions-->
      <div>
        <q-form>
          <!--Question 1-->
          <div>
            <div class="flex justify-center">
              <div class="w-90 text text-h6 text-weight-regular q-mb-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat,
              </div>
            </div>
            <et-s-chat-nav class="q-px-md q-py-sm q-mb-lg"
              ><span class="text text-weight-medium text-h6 text-left"
                >Question 1: Lorem ipsum dolor sit amet, consetetur?</span
              ></et-s-chat-nav
            >
            <et-s-chat-nav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg"
              ><span class="text text-h3">...</span></et-s-chat-nav
            >
            <div class="q-mr-md q-mb-md">
              <!--Radio Group (Invisible). Labels act as button/radio-->
              <div class="checkbutton">
                <label>
                  <input type="radio" name="radioa2" value="a1" />
                  <div class="text text-h5 q-my-sm">Answer 1</div>
                </label>
                <label>
                  <input type="radio" name="radioa2" value="a2" />
                  <div class="text text-h5 q-my-sm">Answer 2</div>
                </label>
                <label>
                  <input type="radio" name="radioa2" value="a3" />
                  <div class="text text-h5 q-my-sm">Answer 3</div>
                </label>
              </div>
              <!--Radio Group End-->
            </div>
          </div>
          <!--Question 1 End-->
          <!--Question 2-->
          <div>
            <et-s-chat-nav class="q-px-md q-py-sm q-mb-lg"
              ><span class="text text-weight-medium text-h6 text-left"
                >Question 2: Lorem ipsum dolor sit amet, consetetur?</span
              ></et-s-chat-nav
            >
            <et-s-chat-nav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg"
              ><span class="text text-h3">...</span></et-s-chat-nav
            >
            <div class="q-mr-sm q-mb-md">
              <!--Radio Group (Invisible). Labels act as button/radio-->
              <div class="checkbutton q-mb-lg">
                <label>
                  <input type="radio" name="radioa3" value="a1" />
                  <div class="text text-h5 q-my-sm">Answer 1</div>
                </label>
                <label>
                  <input type="radio" name="radioa3" value="a2" />
                  <div class="text text-h5 q-my-sm">Answer 2</div>
                </label>
                <label>
                  <input type="radio" name="radioa3" value="a3" />
                  <div class="text text-h5 q-my-sm">Answer 3</div>
                </label>
              </div>
              <!--Radio Group End-->
              <a class="q-ml-sm subheader text-h5 text-weight-bold text-italic">Hint?</a>
            </div>
          </div>
          <!--Question 2 End-->
          <!--Question 3-->
          <div>
            <et-s-chat-nav class="q-px-md q-py-sm q-mb-lg"
              ><span class="text text-weight-medium text-h6 text-left"
                >Question 3: Lorem ipsum dolor sit amet, consetetur?</span
              ></et-s-chat-nav
            >
            <et-s-chat-nav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg">
              <div class="flex items-center justify-center h-100 w-100">
                <textarea
                  placeholder="Type here ..."
                  class="text-white text-mono inputbubble"
                ></textarea>
              </div>
            </et-s-chat-nav>
          </div>
          <!--Question 3 End-->
          <!--Question 4-->
          <div>
            <div class="flex justify-center">
              <div class="w-90 text text-h6 text-weight-regular q-mb-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat,
              </div>
            </div>
            <et-s-chat-nav class="q-px-md q-py-sm q-mb-lg"
              ><span class="text text-weight-medium text-h6 text-left"
                >Question 4: Lorem ipsum dolor sit amet, consetetur?</span
              ></et-s-chat-nav
            >
            <et-s-chat-nav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg"
              ><span v-if="question4.length > 0" class="text text-h5">{{ question4 }}</span
              ><span v-else class="text text-h3">...</span></et-s-chat-nav
            >
            <div class="q-mr-md q-mb-md">
              <!--Radio Group (Invisible). Labels act as button/radio-->
              <div class="flex items-center justify-center q-gutter-md checkbuttonmulti">
                <label>
                  <input type="checkbox" value="a1" v-model="question4" />
                  <div class="text text-h6">This is incorrect.</div>
                </label>
                <label>
                  <input type="checkbox" value="a2" v-model="question4" />
                  <div class="text text-h6">This is correct.</div>
                </label>
                <label>
                  <input type="checkbox" value="a3" v-model="question4" />
                  <div class="text text-h6">Answer 2233</div>
                </label>
                <label>
                  <input type="checkbox" value="a4" v-model="question4" />
                  <div class="text text-h6">Very Long Answer.</div>
                </label>
                <label>
                  <input type="checkbox" value="a5" v-model="question4" />
                  <div class="text text-h6">Very Long Answer.</div>
                </label>
                <label>
                  <input type="checkbox" value="a6" v-model="question4" />
                  <div class="text text-h6">A + 4</div>
                </label>
                <label>
                  <input type="checkbox" value="a7" v-model="question4" />
                  <div class="text text-h6">Yes</div>
                </label>
              </div>
              <!--Radio Group End-->
            </div>
          </div>
          <!--Question 4 End-->
        </q-form>
      </div>
      <!--Questions End-->
      <!--Checkbar-->
      <div class="w-100 row justify-center items-center q-my-xl">
        <div class="col-6">
          <div class="text-center text-secondary subheader text-h5 text-weight-bold">Check</div>
          <div class="text-center subheader text-grey text-caption text-italic text-weight-light">
            2 Errors found. <span class="jumperlink">click here!</span>
          </div>
        </div>
        <div class="col-6 text-center subheader text-h6 text-weight-bold">
          <div class="text-center text-secondary subheader text-h5 text-weight-bold">Go Next!</div>
          <div class="text-center subheader text-grey text-caption text-italic text-weight-light">
            Check your Answers to get a Star
          </div>
        </div>
      </div>
      <!--Checkbar End-->
    </div>
    <!--Body/Text End-->
  </div>
  <!--Part 1: Story End-->
</template>
<style lang="scss" scoped>
.absolutetop {
  z-index: 999;
}
.menustatic {
  background-color: $secondary;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.jumperlink {
  text-decoration: underline;
}

.checkbutton {
  text-align: right;
  font-weight: normal;
  color: grey;
}
.checkbutton label input {
  position: absolute;
  display: none;
  color: #fff !important;
}

.checkbutton input:checked + div {
  color: black !important;
}

.checkbuttonmulti {
  text-align: right;
  font-weight: normal;
  color: grey;
}
.checkbuttonmulti label input {
  position: absolute;
  display: none;
  color: #fff !important;
}

.checkbuttonmulti input:checked + div {
  text-decoration: line-through;
}

.inputbubble {
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  min-height: 7rem;
}
.inputbubble:focus {
  border: none;
  outline: none;
}

textarea {
  resize: vertical;
  overflow: hidden;
}

textarea::-webkit-input-placeholder {
  color: white;
}

textarea:-moz-placeholder {
  /* Firefox 18- */
  color: white;
}

textarea::-moz-placeholder {
  /* Firefox 19+ */
  color: white;
}

textarea:-ms-input-placeholder {
  color: white;
}

textarea::placeholder {
  color: white;
}
</style>
<script setup>
import EtSChatNav from '../components/EtSChatNav.vue';
import { ref } from 'vue';
const question4 = ref([]);
const showmenu = ref(false);
</script>
