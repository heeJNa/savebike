<template>
  <div class="container desktop" v-if="$q.platform.is.desktop">
    <div class="main">
      <section class="top">
        <div class="banner d_flex f1">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay0"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            control-color="black"
            control-color-active="black"
            height="600px"
            color="white"
            class="slides f1"
          >
            <q-carousel-slide :name="1" class="maintt1 base row">
              <h2 class="">라이더라면<span class=" maintt2"> 꼭 </span> 챙겨야하는<br><span class="maintt2">디지털GA 이륜차보험</span></h2>
              <img src="~/assets/img/autobike1.png" alt="autobike1">
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="maintt2 row">
              <h2 class="f7 ">모든 이륜차는<br><span class="Yellow"> 의무적으로 보험가입이</span><br> 필요합니다.</h2>
              <img src="~/assets/img/autobike2.png" alt="autobike2">
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="pc_form">
          <span class="maintt1">
            <em>실시간으로</em> 비교하고 <em>빠르게</em> 가입하세요.
          </span>
          <form action="POST" class="left">
              <div>
                  <fieldset>
                    <label for="">고객명</label>
                    <input type="text" placeholder="고객명" v-model="createForm.customerName" required>
                  </fieldset>
                  <fieldset>
                    <label for="">휴대폰번호</label>
                    <input type="text" placeholder="휴대폰번호" v-model="createForm.customerPhoneNumber" required/>
                  </fieldset>
              </div>
                <div>
                  <fieldset>
                    <label for="">생년월일</label>
                    <input type="text" placeholder="예)910307" v-model="createForm.customerBirthDay" required/>
                  </fieldset>
                  <fieldset>
                    <label for="">성별</label >
                    <select name="" id="" v-model="createForm.customerGender">
                      <option value="male">남</option>
                      <option value="female">여</option>
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset>
                    <label for="">배기량</label>
                    <select name="" id=""  class="" required>
                      <option value="" selected="selected">소형A/50cc 미만</option>
                      <option value="">소형B/50cc~100cc</option>
                      <option value="">중형/101cc~260cc</option>
                      <option value="">대형/260cc초과</option>
                    </select>
                  </fieldset>
                  <fieldset>
                      <label for="">대물배상</label>
                      <select name="" id=""  class="" required>
                        <option value="" selected="selected">2천만원 (책임보험)</option>
                        <option value="">3천만원</option>
                        <option value="">6천만원</option>
                        <option value="">1억원 (최대금액)</option>
                      </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset>
                    <label for="">용도구분</label>
                    <select name="" id=""  class="" required>
                      <option value="" selected="selected">가정용</option>
                      <option value="">배달용</option>
                      <option value="">퀵</option>
                    </select>
                  </fieldset>
                  <fieldset>
                  <label for="">할인할증</label>
                  <select name="" id=""  class="" required>
                    <option value="" selected="selected">11Z (신규 번호판등록시)</option>
                    <option value="">12Z (1년이상 무사고갱신)</option>
                    <option value="">13Z (2년이상 무사고갱신)</option>
                    <option value="">14Z (3년이상 무사고갱신)</option>
                    <option value="">15Z (4년이상 무사고갱신)</option>
                    <option value="">16Z (5년이상 무사고갱신)</option>
                    <option value="">17Z</option>
                    <option value="">18Z</option>
                    <option value="">19Z</option>
                    <option value="">20Z</option>
                    <option value="">21Z</option>
                    <option value="">22Z</option>
                    <option value="">23Z</option>
                    <option value="">24Z</option>
                  </select>
                </fieldset>
                </div>
                <div>
                  <fieldset>
                    <label for="" required>가입경력<span class="sprite question"></span></label>
                    <select name="" id=""  class="">
                      <option value="" selected="selected">1년 미만</option>
                      <option value="">2년 미만</option>
                      <option value="">3년 미만</option>
                      <option value="">3년 이상</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for="" required>법규위반<span class="sprite question"></span></label>
                    <select name="" id=""  class="">
                      <option value="" selected="selected">할인적용</option>
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset>
                    <label for="" required>운전연령<span class="sprite question"></span></label>
                    <select name="" id=""  class="">
                      <option value="" selected="selected">전연령</option>
                      <option value="">만19세이상</option>
                      <option value="">만21세이상</option>
                      <option value="">만24세이상</option>
                      <option value="">만26세이상</option>
                      <option value="">만30세이상</option>
                      <option value="">만35세이상</option>
                      <option value="">만43세이상</option>
                      <option value="">만48세이상</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for="" required>운전자한정<span class="sprite question"></span></label>
                    <select name="" id=""  class="">
                      <option value="" selected="selected">누구나</option>
                      <option value="">가족한정</option>
                      <option value="">기명피보험자1인한정</option>
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset>
                    <label for="" required>물적사고할증<span class="sprite question"></span></label>
                    <select name="" id=""  class="">
                      <option value="" selected="selected">50만원</option>
                      <option value="">200만원</option>
                    </select>
                  </fieldset>
                  <div class="agree">
                    <label for="agree" required>이용약관동의<span class="sprite question"></span></label>
                    <input type="checkbox" name="" value="" id="agree" checked>
                  </div>
                </div>
                  <textarea name="" id="" placeholder="상담 내용을 적어주세요" style="resize: none" v-model="createForm.requestMemo"></textarea>
          </form>
          <q-btn class="base">견적문의</q-btn>
        </div>
      </section>
      <section class="middle">
        <div class="list">
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
          <hr>
        </div>
        <div class="row card">
          <router-link to="/Description" class="column jcc f1">
            <span class="sec2">오토바이 보험 알아보기</span>
            <span class="sec3">바로가기<i class="fa-solid fa-caret-right ml5"></i></span>
          </router-link>
          <div class="column jcc f15">
            <span class="maintt1">도움이 필요하세요?</span>
            <a href="tel:0000 - 0000">고객센터 0000 - 0000</a>
          </div>
        </div>
        <div class="coalition">
          <h1 class="sec2"><em>제휴</em>보험사</h1>
          <div>
            <swiper
              :modules="modules"
              :slides-per-view="3"
              :loop="true"
              :autoplay="{
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
        </div>
        <router-link to="" class="d_flex jcsa aic credit">
          <img src="~assets/img/card.png" alt="/" />
          <div class="d_flex column">
            <span class="sec2">신용카드 결제고객</span>
            <span>최저보험료와 함께 무이자 혜택도 누려보세요</span>
          </div>
        </router-link>
      </section>
    </div>
    <PageFooter></PageFooter>
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
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            v-touch-swipe.mouse="userHasSwiped"
          >
            <q-carousel-slide :name="1" class="slide">
              <span class="desc maintt1">라이더라면 <span class="f700">꼭</span>  챙겨야하는 <br> <span class="f700">디지털GA 이륜차보험</span>
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
          <router-link to="/estimate">
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
            :autoplay="{
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
      createForm: {
        customerName: "",
        customerPhoneNumber: "",
        customerBirthDay: "",
        customerGender: "",
        displacementVolume: "",
        propertyCompensation: "",
        classification: "",
        discountPremium: "",
        requestMemo: "",
      },
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
    margin: 27px 0 0;
    display: flex;
    justify-content: space-between;
    gap: 27px;

    img{
      height:fit-content;
    }
  }
}
.middle{
  display: grid;
  grid-template-columns: 39% 57%;
  grid-template-rows: 170px;
  // margin-top: 34px;
  justify-content: space-between;
  row-gap: 15px;

}
.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .swiper {
      margin: 0;

      .date {
        display: flex;
        gap: 5px;
        align-items: center;
      }
    }
  }
  .card {
    justify-content: space-between;
    margin-top: 27px;
    gap: 15px;
    font-weight: 600;
    &> a{
      .sec2{
        line-height: 27px;
      }
      background: $base;
      border-radius: 5px;
      color: $white;
      gap: 27px;
      align-content: center;
    }
    &>div{
      background: $orange;
      border-radius: 5px;
      color: $white;
      flex: 1.5;
      align-content: center;

      span{
        line-height: 48px;
      }
      a{
        color: $white;
        font-size: 24px;
        line-height: 38px;
      }
    }
  }
  .credit {
    height: 83px;
    background-color: $blue2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .coalition {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
@media screen and (max-width: 500px) and (min-width: 320px) {
  .main {
    margin-bottom: 0;
    .top{
      margin-top: 17px;
    }
    .list {
      .swiper {
        height: 100px;
      }
    }
    .credit{
      margin: 27px 0;
    }
    section.banner {
      height: 67vw;

      gap: 10px;
      justify-content: center;
      box-sizing: border-box;
      // height: 321px;
      img{
        width:inherit;
      }
      .left {
        width: 60%;
        max-height: 300px;
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
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;

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

    .date {
      display: flex;
      gap: 5px;
      align-items: center;
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
