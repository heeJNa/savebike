<template>
<div class="container" >
  <div class="row justify-between items-center" v-if="$q.platform.is.desktop">
    <div class="banner column ">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        control-color="black"
        control-color-active="black"
        color="white"
        height="500px"
        class="slides"
      >
        <q-carousel-slide :name="1" class="maintt1 base column">
          <h2 class="">라이더라면<span class=" maintt2"> 꼭 </span> 챙겨야하는<br><span class="maintt2">디지털GA 이륜차보험</span></h2>
          <!-- <div class="img">0321260</div> -->
          <img src="~/assets/img/pc-bike1.png" alt="pc-bike1">
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="maintt2 column">
          <h2 class="f7 ">모든 이륜차는<br><span class="Yellow"> 의무적으로 보험가입이</span><br> 필요합니다.</h2>
          <img src="~/assets/img/pc-bike2.png" alt="pc-bike2">
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="form">
    <span class="maintt1">
      <em>실시간으로</em> 비교하고 <em>빠르게</em> 가입하세요.
    </span>
    <form action="POST" class="left">
      <div>
          <fieldset>
            <label for="">고객명</label>
            <input type="text" required>
          </fieldset>
          <fieldset>
            <label for="">휴대폰번호</label>
            <input type="text" />
          </fieldset>
      </div>
        <div>
          <fieldset>
            <label for="">생년월일</label>
            <input type="text" placeholder="예)910307" required/>
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
          <!-- <textarea name="" id="" placeholder="상담 내용을 적어주세요" style="resize: none"></textarea> -->
      </form>
    <q-btn class="base" text-color="white" color="base" @click="quoteContact()">견적문의</q-btn>
    </div>
  </div>
  <div v-if="$q.platform.is.mobile">
    <section class="banner_wraper row no-wrap">
      <div class="banner row">
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
          color="white"
          height="auto"
          class="slides row"
          :options="[
              { label: 1, value: '1' },
              { label: 2, value: '2' },
            ]"
        >
          <q-carousel-slide :name="1" class="maintt1 base column">
            <h2 class="">라이더라면<span class=" maintt2"> 꼭 </span> 챙겨야하는<br><span class="maintt2">디지털GA 이륜차보험</span></h2>
            <!-- <div class="img">0321260</div> -->
            <img src="~/assets/img/pc-bike1.png" alt="pc-bike1">
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="maintt2 column">
            <h2 class="f7 ">모든 이륜차는<br><span class="Yellow"> 의무적으로 보험가입이</span><br> 필요합니다.</h2>
            <img src="~/assets/img/pc-bike2.png" alt="pc-bike2">
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="column right" >
        <router-link to="/QuoteContact-M" class="column">
          <span class="sec3">실시간<br />비교견적</span>
          <span class="text2">바로가기<i class="fa-solid fa-caret-right"></i></span>
        </router-link>
        <router-link to="/estimate1" class="column">
          <span class="sec3">보험<br />알아보기</span>
          <span class="text2">바로가기<i class="fa-solid fa-caret-right"></i></span>
        </router-link>
      </div>
    </section>
    <section class="middle_list column">
      <div class="row justify-between content-center">
        <h1 class="sec3"><em>상담신청</em>리스트</h1>
        <span class="text2">2022-06-10 기준</span>
      </div>
      <swiper
        :modules="modules"
        :slidesPerView="4"
        :spaceBetween="1"
        :direction="'vertical'"
        :loop="true"
        :Navigation="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide
          v-for="(item, index) in consultList.content"
          :key="index"
        >
          <router-link to="" class="row justify-around text1">
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
      <router-link to="" class="row no-wrap	items-center justify-center">
        <img src="~/assets/img/card.png" alt="/" />
        <div class="column">
          <span class="sec3">신용카드 결제고객</span>
          <span class="text1">최저보험료와 함께 무이자 혜택도 누려보세요</span>
        </div>
      </router-link>
    </section>
    <section class="bottom coalition">
      <h1 class="text1"><em>제휴</em>보험사</h1>
      <div>
        <swiper
          :modules="modules"
          :slides-per-view="3.5"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide><img src="assets/img/company7.png" /></swiper-slide>
          <swiper-slide><img src="assets/img/company6.png" /></swiper-slide>
          <swiper-slide><img src="assets/img/company5.png" /></swiper-slide>
          <swiper-slide><img src="assets/img/company4.png"/></swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default defineComponent({
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {

      modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
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
    }
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      slide: ref(1),
      autoplay: ref(true),
      onSwiper,
      onSlideChange,
    };

  },
  methods:{
    quoteContact(){
       this.$router.push({
         path: "ComparativeEstimate",
      });
    }
  }
})
</script>
<style lang="scss" scoped>
.agree{
  width: 50%;
  align-items: center
}
textarea{
  padding: 20px;
  height: 100px;
  border: 1px solid $border;
  margin-top: 17px;
}
@media screen and (max-width: 500px) and (min-width: 320px) {
  .maintt1{
    font-size: 18px;
    line-height: 33px;
  }
  .maintt2{
    font-size: 18px;
    line-height: 27px;
  }
  .banner_wraper{
    gap: 10px;
    // height: 300px;
    .banner{
      width: 60%;
      flex: 1;
    }
    .right{
      width: 40%;
    }
    .q-carousel__slide{
      width: 100%;
      gap: 0;
      justify-content: space-between;
      h2{
        width: 100%;
      }
      img{
        // max-width: 80%;
        width: 100%;
      }
    }
  }
  //   justify-content: space-between;
  // }
  //  .banner {
  //     // width: inherit;
  //       img{
  //         width: inherit;
  //       }
  //       .q-carousel__navigation--bottom {
  //       bottom: 50px;
  //       }
  // }

  .right{
    justify-content: space-between;
    gap: 10px;
    .column{
      background: $base;
      color: $white;
      padding: 15px 45px 15px 15px;
      gap: 27px;
      border-radius: 5px;
      // width: 120px
      // max-width: 120px;
      justify-content: space-between;
      flex: 1;
      .sec3{
        line-height: 22px;
      }
      .text2{
        line-height: 16px;
      }
    }
  }
  .middle_list{
    gap: 10px;
    .swiper{
      height: 100px;
      overflow: hidden;
      .fa-solid{
        color: $base;
      }
    }
  }
}
.credit{
  background: #eceff6;
  padding: 0 20px;
  margin: 27px 0;
}
</style>
