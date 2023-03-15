<template>
  <div>
    <!--Header-->
    <div>
      <!--Default Banner. Can be modified -->
      <q-img class="q-mb-md ets-banner-small" src="images/home_gears_banner.jpg"></q-img>
      <!--Banner End-->
      <!--Infos-->
      <et-s-header
        titel="Escape the Studies"
        content="Brace yourself and enter a brand new Universe of Tech and Games"
        link="Learn more..."
      ></et-s-header>
      <!--Infos Ende-->
      <!--OnePage Menu-->
      <OnPageMenu></OnPageMenu>
      <!--OnePage Menu End-->
    </div>
    <!--Header End-->
    <!--Content-->
    <div class="flex justify-center ets-w-100 q-mt-lg">
      <div class="w-90">
        <!--Progress-->
        <div class="text-center text-body1 q-mb-sm text-grey">Current Status: Closed Alpha</div>
        <div class="text-center text-body2 text-italic q-mb-md text-grey">
          Eine kleine Demo finden Sie
          <router-link class="q-mt-md text-body2 text-weight-medium" to="/chapter">
            <a>hier!</a>
          </router-link>
        </div>
        <!--Progress End-->
        <!--News-->
        <div class="flex justify-center items-center q-mb-xl">
          <!--Placeholder Lection Banner-->
          <div id="news" class="ets-news q-py-md">
            <div class="ets-news-overlay ets-news-rounded placeholder">
              <div class="flex items-start justify-center">
                <header class="ets-py-2">
                  <p class="q-pa-md text text-h5">
                    Just an Act: Learn the Magic of Web-Development!
                  </p>
                </header>
              </div>
              <main></main>
              <footer class="absolute-bottom">
                <div class="row">
                  <div class="col-9">
                    <div class="ets-bar-wrapper">
                      <div class="ets-lightbar">
                        <div class="flex items-center justify-center ets-h-100">
                          <div
                            class="text-white text-center q-pb-xs ets-header text-weight-bold text-h6"
                          >
                            HTML, JavaScript
                          </div>
                        </div>
                      </div>
                      <div class="ets-darkbar">
                        <div class="flex items-center justify-end ets-h-100">
                          <div class="ets-darkbar-content">
                            <span
                              class="text-white text-left ets-header text-weight-bold text-italic text-h5"
                              >...</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <span
                      class="text-primary float-right ets-py-2 text-center ets-header text-weight-bolder text-h5"
                      >New!</span
                    >
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <!--Placeholder Lection Banner End-->

          <!--Placeholder Lection Info Banner-->
          <div id="newsdetails" class="ets-news-flex q-py-md">
            <div class="ets-news-overlay ets-news-info placeholder">
              <header>
                <div class="">
                  <div class="row items-start justify-center ets-h-100">
                    <div class="ets-news-tag col-3">
                      <div class="row items-center justify-center ets-h-100">
                        <div class="text-white q-pb-xs ets-header text-weight-bold text-h6">
                          Info
                        </div>
                      </div>
                    </div>

                    <div class="col-6 self-end">
                      <div class="text text-center self-end text-h5">Just an Act:</div>
                    </div>
                    <div class="col-3"></div>
                  </div>
                </div>
              </header>
              <main class="q-pb-lg">
                <div class="text-h6 text-weight-light q-pa-md text-italic">
                  Learn more about the Beauty behind programming. Discover a breathtaking world
                  ruled by a fool scheme ...
                </div>
              </main>
            </div>
          </div>
          <!--Placeholder Lection Info Banner End-->
        </div>
        <!--News End-->
        <!--Home Navbar-->
        <div class="flex justify-center items-center q-mb-xl">
          <div id="homenav" class="ets-chat-bubble">
            <EtSChatNav
              @click="scrolltovertically('whatisets')"
              colortype="dark"
              direction="right"
              class="q-pa-md q-mb-lg"
              ><span class="ets-header">What is EtS?</span></EtSChatNav
            >
            <EtSChatNav @click="scrolltovertically('yourlittlejourney')" class="q-pa-md q-my-lg"
              ><span class="ets-header">Your little journey begins here.</span></EtSChatNav
            >
            <EtSChatNav @click="scrolltovertically('continue')" class="q-pa-md q-mt-lg"
              ><span class="ets-header">How will we continue?</span></EtSChatNav
            >
          </div>
        </div>
        <!--Home Navbar Ende-->
        <hr />
        <!--What is EtS-->
        <div class="q-my-lg">
          <!--Bubble Caption-->
          <div class="row justify-center items-center q-mt-lg">
            <div id="whatisets" class="ets-chat-bubble">
              <EtSChatNav colortype="dark" direction="right" class="q-pa-md q-mb-lg"
                ><span class="ets-header">What is EtS?</span></EtSChatNav
              >
            </div>
          </div>
          <!--Bubble Caption End-->
          <!--Caption-->
          <figure class="ets-w-100 q-ma-none row text">
            <div class="text-weight-bold text-h5">
              Escape the Studies is an <a href="https://opensource.org/osd">Open-Source</a> Platform
              for learning in style.
            </div>
            <figcaption class="text-weight-light text-italic w-90 q-mt-xs">
              - sponsored by HTL Wien West
            </figcaption>
          </figure>
          <!--Caption End-->
          <!--What is EtS Body-->
          <div class="row q-mt-lg">
            <!--Chapter 1-->
            <div>
              <div class="text-h6 text-weight-regular q-my-md">
                Our Goal - to show you the Beauty behind studying. Despite School often being
                associated as an annoying social To-Do, School can be so much more.
              </div>
              <div class="text-h6 text-weight-regular q-my-md">I mean… learning can suck.</div>
              <div class="text-h6 text-weight-regular q-my-md">
                I get it. It's barely applicable in our day to day life and sometimes even just
                plain boring. Try remembering the last time you used math. Right? It probably was
                just today, maybe even only a few minutes ago, but still, topics like Binomial
                Distribution barely cross your mind ever again.
              </div>
            </div>
            <!--Chapter 1 End-->
            <!--Image-->
            <figure class="ets-w-100 q-ma-none q-mt-lg row">
              <q-img src="images/mathe_meme.png" />
              <figcaption class="text-weight-light text-italic w-90 q-mt-xs">
                - HTL Wien West Deluxe Memes
              </figcaption>
            </figure>
            <!--Image Ende-->
            <!--Chapter 2-->
            <div>
              <div class="text-h6 text-weight-regular q-my-md">
                However, Escape the Studies tries to provide more. Combining Hobbies with work,
                adding some game-like Gadgets and the best part
              </div>
              <div class="text-h6 text-weight-bolder text-uppercase q-my-md">
                - NOT BEING GRADED.
              </div>
              <div class="text-h6 text-weight-regular q-my-md">
                This place should be a little safe hafen for students and a place where you can
                broaden your horizon. We know that learning can be hard, yet we still want you to
                enjoy it.
              </div>
              <div class="text-h6 text-weight-regular text-italic q-my-md">
                <a class="ets-disabled">So join us on our little journey! </a>
              </div>
            </div>
            <!--Chapter 2 End-->
          </div>
          <!--What is EtS Body End-->
        </div>
        <!--What is EtS End-->
        <hr />
        <!--Your little journey begins here.-->
        <div class="q-my-lg">
          <!--Bubble Caption-->
          <div class="row justify-center items-center q-mt-lg">
            <div id="yourlittlejourney" class="ets-chat-bubble">
              <EtSChatNav colortype="dark" direction="right" class="q-pa-md q-mb-lg"
                ><span class="ets-header">Your little journey begins here.</span></EtSChatNav
              >
            </div>
          </div>
          <!--Bubble Caption End-->
          <!--Caption-->
          <div class="row">
            <div class="text-weight-bold text-h5">
              Escape the Studies is a
              <a href="https://www.linguee.de/englisch-deutsch/uebersetzung/free+to+use.html"
                >Free-to-Use</a
              >
              Webpage, only waiting for you.
            </div>
          </div>
          <!--Caption End-->
          <!--Your little journey begins here Body-->
          <div class="row q-mt-lg">
            <!--Chapter 3-->
            <div>
              <!--Q1-->
              <div>
                <div class="text-h6 text-italic q-my-md">Already have an Account?</div>
                <div class="text-h6 text-weight-regular q-my-md">
                  Go straight to our hand-picked Selection of Courses and enjoy the fantastic world
                  of read-learn and <a class="ets-disabled">Play!</a>
                </div>
              </div>
              <!--Q1 End-->
              <!--Q2-->
              <div>
                <div class="text-h6 text-italic q-my-md">New as a Study-Adventurer?</div>
                <div class="text-h6 text-weight-regular q-my-md">
                  Don't worry. Everyone begins without an Account one day. So choose your Class
                  (Google Account) wisely and <a class="ets-disabled">get started!</a>
                </div>
              </div>
              <!--Q2 End-->
              <!--Q3-->
              <div>
                <div class="text-h6 text-italic q-my-md">Still not enough?</div>
                <div class="text-h6 text-weight-regular q-my-md">
                  Well, I guess I have enough time and budget left to tell you a little Story then.
                  How will we begin...
                </div>
                <div class="text-body1 text-italic text-weight-regular q-my-md">
                  Five years have already passed. The days still blinding and the nights so silent.
                  Year after Year, Day after Day, Minute after Minute, however, there was still no
                  end in sight. I traveled through class and class. Monday to Sunday. Whatever I did
                  feel lighthearted, without a meaning. But here I am. Write a little Story for you
                  guys. My english still bad, may writng still awful and your Attention span still
                  under 5 seconds.
                </div>
                <div div class="text-h6 text-weight-regular q-my-md">
                  Hello!?!? You still here!? Oh you are? Fantastic! I see great potential in you. So
                  better <a class="ets-disabled">sign up</a> now and give me my well owned Bonus!
                </div>
                <div div class="text-h6 text-weight-regular q-my-md">
                  Happy now? See that happens if you leave me without a script and five minutes to
                  spare. I maybe have highlighted it three times already, but if you still haven't
                  done it: <a class="ets-disabled">Sign up here!</a>
                </div>
                <!--Figcaption Author-sama-->
                <figure class="ets-w-100 q-ma-none row text">
                  <figcaption class="text-weight-light text-italic w-90">
                    - Thanks ~your Author-sama
                  </figcaption>
                </figure>
                <!--Figcaption Author-sama End-->
              </div>
              <!--Q3 End-->
            </div>
            <!--Chapter 3 End-->
          </div>
          <!--Your little journey begins here Body End-->
        </div>
        <!--Your little journey begins here End-->
        <hr />
        <!--How will we continue-->
        <div class="q-my-lg">
          <!--Bubble Caption-->
          <div class="row justify-center items-center q-mt-lg">
            <div id="continue" class="ets-chat-bubble">
              <EtSChatNav colortype="dark" direction="right" class="q-pa-md q-mb-lg"
                ><span class="ets-header">How will we continue?</span></EtSChatNav
              >
            </div>
          </div>
          <!--Bubble Caption End-->
          <!--Caption-->
          <figure class="ets-w-100 q-ma-none row text">
            <div class="text-weight-bold text-h5">Escape the Studies has a future… I guess.</div>
            <figcaption class="text-weight-light text-italic w-90 q-mt-xs">- idk</figcaption>
          </figure>
          <!--Caption End-->
          <!--How will we continue Body-->
          <div class="row q-mt-lg">
            <!--Chapter 4-->
            <div>
              <div class="text-h6 text-weight-regular q-my-md">
                We are still just a diploma Project after all. So maybe we will continue on and
                maybe we won't. But don't worry. Our great
                <a class="ets-disabled">Documentations</a>,
                <a href="https://github.com/hochstegerL03/EscapeTheStudies">Source-Code</a> and
                <a class="ets-disabled">Course</a> will continue on!
              </div>
              <div class="text-h6 text-weight-regular q-my-md">
                We even got a small <a class="ets-disabled">Checklist</a> with things to do for our
                future selfs or replacements:
              </div>
              <div class="text-center text-h6 text-mono text-weight-light q-my-lg">
                Imagine an inserted Checklist
              </div>
              <figure class="ets-w-100 q-ma-none">
                <div class="text-h6 text-weight-regular q-mt-md">
                  Puhh, we are finally done here. Let's grab a Cookie or two and make a
                  well-deserved break.
                </div>
                <figcaption class="text-weight-light text-italic w-90 q-mt-sm">
                  - Love, your EtS-Team
                </figcaption>
              </figure>
            </div>
            <!--Chapter 4 End-->
          </div>
        </div>
        <!--How will we continue End-->
        <!--Cookie-->
        <div class="row justify-center q-mb-lg">
          <q-img src="images/cookie_coffee.png" />
        </div>
        <!--Cookie End-->
      </div>
    </div>
  </div>
  <!--Content End-->
</template>

<style lang="scss" scoped>
.ets-news {
  width: 100%;
  height: 35vh;
}

.ets-news-flex {
  width: 100%;
}

.ets-chat-bubble {
  width: 100%;
}

.ets-news-rounded {
  border-radius: 15px;
}
.ets-news-info {
  border-radius: 0px 0px 15px 15px;
}
.ets-news-overlay {
  width: 100%;
  height: 100%;
  position: relative;
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

.ets-news-tag {
  background-color: $secondary;
  width: 100%;
  height: 75% !important;
  border-radius: 0vw 15px 15px 0vw;
}

.ets-darkbar {
  background-color: $primary;
  width: 100%;
  height: 100%;
  max-height: 6vh;
  border-radius: 0vw 15px 15px 15px;
  z-index: 0;
  bottom: 0;
  position: absolute;
}
.ets-darkbar-content {
  width: 15%;
  float: right;
}

.ets-py-2 {
  width: 96%;
}

.ets-h-100 {
  height: 100%;
}

.ets-bar-wrapper {
  position: relative;
  height: 100%;
}
</style>
<script setup>
import EtSChatNav from '../components/EtSChatNav.vue';
import EtSHeader from '../components/EtSHeader.vue';
import OnPageMenu from '../components/OnPageMenu.vue';
import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrolltovertically(obj) {
  const el = document.getElementById(obj);
  const target = getScrollTarget();
  const offset = el.offsetTop - 50;
  const duration = 1000;
  setVerticalScrollPosition(target, offset, duration);
}
</script>
