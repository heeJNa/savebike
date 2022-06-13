<template>
  <div class="container desktop" v-if="$q.platform.is.desktop">
    <div class="main">
      <section class="top">
        <div class="banner">
          <ul class="slide_wrapper">
            <li class="slide">
              <div class="desc">
                <span class="maintt1">라이더라면 <b>꼭</b> 챙겨야하는</span>
                <span class="maintt2">디지털 GA 이륜차보험</span>
              </div>
              <img src="~assets/img/autobike1.png" alt="/" />
            </li>
          </ul>
        </div>
        <div class="form">
          <span class="maintt1">
            <em>실시간으로</em> 비교하고 <em>빠르게</em> 가입하세요.
          </span>
          <form action="post">
            <div>
              <fieldset>
                <label for="">고객명</label>
                <input type="text" placeholder="이름" />
              </fieldset>
              <fieldset>
                <label for="">휴대폰번호</label>
                <input type="text" placeholder="예) 01012345678" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label for="">생년월일</label>
                <input type="text" placeholder="예) 910807" />
              </fieldset>
              <fieldset>
                <label for="">성별</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label for="">배기량</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">대물배상</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
            </div>
            <div>
              <!-- <fieldset>
                <label for=""
                  >용도구분<q-btn label="Alert" color="primary" @click="alert"
                /></label>
                <input type="text" />
              </fieldset> -->
              <fieldset>
                <label for="">용도구분</label>
                <q-select
                  borderless
                  v-model="model"
                  :label="용도선택"
                  :options="options1"
                />
              </fieldset>
              <fieldset>
                <label for="">할인할증</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label for="">가입경력</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">법규위반</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label for="">운전경력</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">운전자한정</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label for="">물적사고할증</label>
                <select name="" id="">
                  <option value="">남</option>
                  <option value="">여</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">이용약관동의</label>
                <input type="checkbox" />
              </fieldset>
            </div>
          </form>
          <button class="base">견적문의</button>
        </div>
      </section>
      <section class="middle"></section>
      <section class="bottom"></section>
    </div>
  </div>
  <div class="container mobile" v-if="$q.platform.is.mobile">
    <div class="main">
      <section class="top banner">
        <div class="left">
          <q-carousel
            class="slide_wrapper"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            v-touch-swipe.mouse="userHasSwiped"
          >
            <q-carousel-slide :name="1" class="slide">
              <span class="desc maintt1">
                <b>실시간</b>으로 <b>비교</b>하고<br />
                <b>빠르게 가입하기</b>
              </span>
              <img src="~assets/img/autobike1.png" alt="/" />
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="slide">
              <span class="desc maintt1 f700">
                모든 이륜차는<br />
                <span class="orange">의무적으로 보험 가입이</span><br />
                필요합니다.
              </span>
              <img src="~assets/img/autobike2.png" alt="/" />
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="right">
          <router-link to="/estimate1">
            <span class="sec2">실시간<br />비교견적</span>
            <span class="sec3"
              >바로가기<i class="fa-solid fa-caret-right"></i
            ></span>
          </router-link>
          <router-link to="Description">
            <span class="sec2">보험<br />알아보기</span>
            <span class="sec3"
              >바로가기<i class="fa-solid fa-caret-right"></i
            ></span>
          </router-link>
        </div>
      </section>
      <section class="middle list">
        <div class="d_flex jcsb aic">
          <h1 class="sec2"><em>상담신청</em>리스트</h1>
          <span class="sec3">2022-06-10 기준</span>
        </div>
        <swiper
          :modules="modules"
          :slidesPerView="4"
          :spaceBetween="1"
          :direction="'vertical'"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="(item, index) in consultList.content"
            :key="index"
          >
            <router-link to="" class="d_flex jcsa aic">
              <div class="date">
                <i class="fa-solid fa-caret-right"></i>
                <span>{{ item.date }}</span>
              </div>
              <span>{{ item.name }}님</span>
              <span class="blue">오토바이보험 비교견적 요청</span>
            </router-link>
          </swiper-slide>
        </swiper>
      </section>
      <section class="credit">
        <router-link to="" class="d_flex jcsa aic">
          <img src="~assets/img/card.png" alt="/" />
          <div class="d_flex column">
            <span class="sec2">신용카드 결제고객</span>
            <span>최저보험료와 함께 무이자 혜택도 누려보세요</span>
          </div>
        </router-link>
      </section>
      <section class="bottom coalition">
        <h1 class="sec2"><em>제휴</em>보험사</h1>
        <div>
          <swiper
            :modules="modules"
            :slides-per-view="3"
            :loop="true"
            :autoplay0="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :navigation="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide><img src="~assets/img/ss_fire.png" /></swiper-slide>
            <swiper-slide><img src="~assets/img/hyundai.png" /></swiper-slide>
            <swiper-slide><img src="~assets/img/hanwha.png" /></swiper-slide>
            <swiper-slide
              ><img src="~assets/img/dongbufire.png"
            /></swiper-slide>
          </swiper>
        </div>
      </section>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PageFooter from "src/layouts/PageFooter.vue";
import { ref } from "vue";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide,
    PageFooter,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
      slide: ref(1),
      autoplay: ref(true),
      options1: ["가정용", "배달용", "퀵"],
      consultList: {
        content: [
          {
            date: "0000-00-00",
            name: "김**",
          },
          {
            date: "0000-00-00",
            name: "박**",
          },
          {
            date: "0000-00-00",
            name: "백**",
          },
          {
            date: "0000-00-00",
            name: "배**",
          },
        ],
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.main {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .banner {
      .slide_wrapper {
        .slide {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: center;

          .desc {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
    .form {
      border: 1px solid $hr;
      padding: 27px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 27px;

      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0 20px;
        box-sizing: border-box;
        div {
          display: flex;
          gap: 27px;

          fieldset {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px 0;
            border-bottom: 1px solid $hr;
            width: 100%;
            flex: 1;

            label {
              max-width: 112px;
              width: 100%;
              // font-size: 16px;
              // line-height: 27px;
              // font-weight: 500;
            }
            label.q-field {
              max-width: 100%;
              flex: 1;
              height: 27px !important;

              .q-field__inner {
                .q-select--without-input.q-field--auto-height.q-field__control {
                  min-height: 27px !important;
                  height: 100% !important;

                  .q-field--auto-height {
                    .q-field__control-container {
                      .q-field--auto-height.q-field__native {
                        min-height: 27px !important;
                        height: 100% !important;
                        line-height: 27px;

                        input {
                          height: 27px !important;
                          line-height: 27px !important;
                        }
                      }
                    }
                  }
                }
                .q-field__marginal {
                  height: 27px !important;
                }
              }
            }
            input,
            select {
              width: 100%;
              flex: 1;
            }
            input:focus,
            select:focus {
              outline: none;
            }
            input[type="checkbox"] {
              box-sizing: border-box;
              padding: 0;
              flex: none !important;
              width: 16px !important;
              height: 16px;
            }
          }
        }
      }
      button {
        width: 100%;
        height: 54px;
        line-height: 54px;
        transition: 0.3s;
      }
      button:hover {
        background-color: $blue;
        transition: 0.3s;
      }
    }
  }
}
@media screen and (max-width: 500px) and (min-width: 320px) {
  .main {
    margin-bottom: 0 ;
    section.banner {
      gap: 10px;
      justify-content: center;
      box-sizing: border-box;
      height: 321px;

      .left {
        width: 60%;
        height: 100%;
        .slide_wrapper {
          height: 100%;
          .slide {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 0;

            .desc {
              word-break: keep-all;
              text-align: center;
            }
          }
          .q-carousel__navigation-inner {
            justify-content: flex-end !important;
          }
        }

      }
      .right {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        a {
          height: 100%;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 5px;
          padding: 10px;
          box-sizing: border-box;
        }
        a:first-of-type {
          background-color: $base;
          color: $white;
        }
        a:last-of-type {
          background-color: $blue2;
        }
      }
    }
    section.list {
      margin-top: 34px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .swiper {
        height: 100px;
        margin: 0;

        .date {
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
    section.credit {
      margin-top: 34px;
      height: 83px;
      background-color: $blue2;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    section.bottom {
      margin-top: 34px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      // .swiper {
      //   display: flex;
      //   position: relative;
      //   width: 100%;
      //   .swiper-button-prev,
      //   .swiper-button-next {
      //     color: $fontSub !important;
      //   }
      // }
    }
  }
}
</style>
