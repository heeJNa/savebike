<template>
<div class="container mobile main" v-if="$q.platform.is.desktop">
  <section class="row aic" >
      <h1 class="hidden">세이브바이크 설명</h1>
      <div class="title_wraper column">
        <div class="title">
          <em class="maintt1 f700 em">세이브바이크</em>
          <div class="maintt2 f400">라이더라면 <span class="f700">꼭</span> 챙겨야하는</div>
          <div class="maintt2 f700">디지털GA 이륜차 보험</div>
        </div>
        <div class="sub_title sec4 column">
          <div>
            <div class="f700"><em>배달용 이륜차</em> 가입 OK!</div>
            <div>가정용, 배달용, 대여용 이륜차 가입 가능</div>
          </div>
          <div>
            <div class="f700"><em>법인 이륜차</em> 가입가능!</div>
            <div>세이프바이크 다이렉트는 개인 소유 이륜차 뿐 아니라<br>법인 소유 이륜차도 가입할 수 있어요.</div>
          </div>
        </div>
      </div>
      <img class="bg_bike" src="~/assets/img/bg_pc_bike.png" alt="">
  </section>
  <section class="low_wraper row no-wrap" @click="open">
      <div class="low_5 column text-center ">
        <p class="f700 sec4">자동차손해배상 보장법 제5조</p>
        <span class="sec3">
          자동차(이륜차) 운행시 사고로 인해 다른 사람이 사망하거나 다친 경우, 혹은 다른 사람의 제물을 훼손한 경우 피해자에게 금액을 지급할 책임을 지는 <em class="f400">책임보험</em>이나 <em class="f400">책임공제에 가입</em>하여야 한다.
        </span>
      </div>
      <div class="low maintt2">
        <div class="f700">모든 이용자는</div>
        <em class="f700">의무적으로 보험가입이 필요해요.</em>
        <div class="sec4 f400" >&#8251;의무보험 미가입시 과태료가 부과됩니다.
        </div>
      </div>
  </section>
  <section class="choice column">
    <h1 class="hidden">이륜차보험 체크</h1>
    <div>
      <em class="maintt1 f700">이륜차 보험 CHECK POINT!</em>
      <div class="maintt2 f700">
        이륜차 보험 가입시,<br>
        정확한 용도 선택이 필요해요.
      </div>
    </div>
    <p class="sec3">
      이륜차는 용도 선택에 따른 보험료 차이가 큽니다.<br>
      특히 <span class="body f700">사고 시 보상여부에 영향</span>을 미치므로 <span class="body f700">정확히 선택</span>하셔야 합니다.
    </p>
    <div class="choice_list row no-wrap jcsb">
      <article class="row jcc">
        <img src="~/assets/img/pc_choice1.png" alt="">
        <ul>
          <li class="f700">가정용/기타</li>
          <li class="">개인이 일반적인 가정용 및 비영리 목적의 취미생활 등 기타용도로 운영하는 경우</li>
        </ul>
      </article>
      <article class="row jcc">
        <img src="~/assets/img/pc_choice2.png" alt="">
        <ul>
          <li class="f700">비유상운송배달용</li>
          <li class="gaai_text1">
            비유상운송 및 배달용으로 운행하는 경우
            주로 업소에 소속된 배달용 오토바이,
            우편배달용 오토바이 등
          </li>
        </ul>
      </article>
      <article class="row jcc">
        <img src="~/assets/img/pc_choice3.png" alt="">
        <ul>
          <li class="f700">유상운송배달/대여용</li>
          <li class="gaai_text1">
            유상운송 및 대여용으로 직접적인 영업이익을 위해 운행하는 경우 주로 퀵 서비스용, 배달대행업 대여용 오토바이 등
          </li>
        </ul>
      </article>
      <article class="row jcc">
        <img src="~/assets/img/pc_choice4.png" alt="">
        <ul>
          <li class="f700">특수용도</li>
          <li>
            경주, 오락, 운전을 즐기기 위한 레저를 주목적으로 운행하는 경우<br>
            ATV등 이륜 또는 3륜 이상의 최대적재량 100Kg 이하인 이륜차
          </li>
        </ul>
      </article>
    </div>
  </section>
  <section class="digital_ga text-center row no-wrap aic">
    <img src="~/assets/img/pc_mockup.png" alt="">
    <div>
      <h1 class="maintt2 f700"> <em>디지털GA로 간편하게</em> </h1>
      <p class="sec4">
        세이프바이크는 PC에서도 모바일에서도<br>
        간편하게 보험가입을 할 수 있어요.
      </p>
      <q-btn class="base sec2" @click="Comparative">견적문의</q-btn>
    </div>
  </section>
  <PageFooter></PageFooter>
</div>
<div class="container mobile main" v-if="$q.platform.is.mobile">
  <section class="" >
      <h1 class="hidden">세이브바이크 설명</h1>
      <div class="title_wraper row d-flex">
        <div class="title">
          <em class="sec3 f700 em">세이브바이크</em>
          <div class="">라이더라면 <span class="f700">꼭</span> 챙겨야하는</div>
          <div class="f700">디지털GA 이륜차 보험</div>
        </div>
        <div class="sub_title d-flex row">
          <div>
            <div class="f700"><em>배달용 이륜차</em> 가입 OK!</div>
            <div>가정용, 배달용, 대여용 이륜차 가입 가능</div>
          </div>
          <div>
            <div class="f700"><em>법인 이륜차</em> 가입가능!</div>
            <div>세이프바이크 다이렉트는 개인 소유 이륜차 뿐 아니라<br>법인 소유 이륜차도 가입할 수 있어요.</div>
          </div>
        </div>
      </div>
  </section>
  <section class="low_wraper " @click="open">
    <div class="low"  >
      <img class="bg_bike" src="~/assets/img/bg_bike.png" alt="">
      <div>
        <div class="f700">모든 이용자는</div>
        <em class="f700">의무적으로 보험가입이 필요해요.</em>
      </div>
      <span class="sec3 d_flex aic jcc" >&#8251;의무보험 미가입시 과태료가 부과됩니다.
        <span class="sprite zoomplus" >icon</span>
      </span>
      <div class="low_5 text-center" v-show="show">
        <p class="f700 sec2">자동차손해배상 보장법 제5조</p>
        <span class="sec3">
          자동차(이륜차) 운행시 사고로 인해 다른 사람이 사망하거나 다친 경우, 혹은 다른 사람의 제물을 훼손한 경우 피해자에게 금액을 지급할 책임을 지는 <em>책임보험</em>이나 <em>책임공제에 가입</em>하여야 한다.
        </span>
      </div>
    </div>
  </section>
  <section class="choice container">
    <h1 class="hidden">이륜차보험 체크</h1>
    <div>
      <em class="f700">이륜차 보험 CHECK POINT!</em>
      <div class="sec4 f700">
        이륜차 보험 가입시,<br>
        정확한 용도 선택이 필요해요.
      </div>
    </div>
    <p >
      이륜차는 용도 선택에 따른 보험료 차이가 큽니다.<br>
      특히 <span class="f700">사고 시 보상여부에 영향</span>을 미치므로<br>
      <span class="f700">정확히 선택</span>하셔야 합니다.
    </p>
    <div class="choice_list row">
      <article class="row no-wrap aitc">
        <img src="~/assets/img/choice1.png" alt="">
        <ul>
          <li class="f700">가정용/기타</li>
          <li class="">개인이 일반적인 가정용 및 비영리 목적의 취미생활 등 기타용도로 운영하는 경우</li>
        </ul>
      </article>
      <article class="row no-wrap aitc">
        <img src="~/assets/img/choice2.png" alt="">
        <ul>
          <li class="f700">비유상운송배달용</li>
          <li class="gaai_text1">
            비유상운송 및 배달용으로 운행하는 경우
            주로 업소에 소속된 배달용 오토바이,
            우편배달용 오토바이 등
          </li>
        </ul>
      </article>
      <article class="row no-wrap aitc">
        <img src="~/assets/img/choice3.png" alt="">
        <ul>
          <li class="f700">유상운송배달/대여용</li>
          <li class="gaai_text1">
            유상운송 및 대여용으로 직접적인 영업이익을 위해 운행하는 경우 주로 퀵 서비스용, 배달대행업 대여용 오토바이 등
          </li>
        </ul>
      </article>
      <article class="row no-wrap aitc">
        <img src="~/assets/img/choice4.png" alt="">
        <ul>
          <li class="f700">특수용도</li>
          <li>
            경주, 오락, 운전을 즐기기 위한 레저를 주목적으로 운행하는 경우<br>
            ATV등 이륜 또는 3륜 이상의 최대적재량 100Kg 이하인 이륜차
          </li>
        </ul>
      </article>
    </div>
  </section>
  <section class="digital_ga text-center">
    <h1 class="sec4 f700"> <em>디지털GA로 간편하게</em> </h1>
    <img src="~/assets/img/mockup.png" alt="">
    <p>
      세이프바이크는 PC에서도 모바일에서도<br>
      간편하게 보험가입을 할 수 있어요.
    </p>
  </section>
  <PageFooter></PageFooter>
</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PageFooter from "src/layouts/PageFooter.vue";
export default defineComponent({
  name: "InsuranceDescription",

  components: {
    PageFooter
  },
   data () {
    return {
      show: false,
    }
  },
  setup() {
    const Postestimate = () => {
      console.log("문의");
      // 견적문의
      // this.$router.push({
      //   path: "/",
      // });
    };
    return {
      Postestimate,
    };
  },
  methods: {
    open(){
      console.log('짠')
      this.show = !this.show
    },
    Comparative(){
      this.$router.push({
         path: "ComparativeEstimate",
      });
    }
  },
});
</script>

<style lang="scss" scoped>
img{
  height: fit-content;
}
section{
  margin: 108px 0;
}
.title_wraper{
  gap: 54px;
  .sub_title{
    gap: 15px;
  }
  .bg_bike{
    height: fit-content;
  }
}
.low_wraper{
  gap: 34px;
  align-items: center;

  .low_5{
    background: $orange;
    border-radius: 30px;
    gap: 10px;
    flex: 1;
    height: 237px;
    align-content: center;
    justify-content: center;
    span{
      width: 497px;
      display: block;
    }
  }
}
.choice{
  gap: 27px;
}
.choice_list{
  ul{
    width: 260px;
    text-align: center;
  }
}
.digital_ga{
  position: relative;
  div{
    position:absolute;
    right: 0;
  }
  .q-btn{
    margin-top: 30px;
    padding: 0 136px;
    line-height: 54px;
  }
}
@media screen and (max-width: 500px) and (min-width: 320px) {
  section {
    display: flex;
    flex-direction: column;
    gap: 27px;
  }
  .title_wraper{
    gap:27px;
  }
  .title{
    font-size: 24px;
    line-height: 35px;
  }
  .sub_title{
    gap: 17px;
    line-height: 20px;
  }
  .low_wraper{
    position: relative;
  }
  .low{
    background-color: hsla(223,5%,73%,.2);
    border-radius: 5px;
    box-sizing: border-box;
    height: auto;
    margin: 135px 0 0;
    padding: 20px;
    text-align: center;
    transition: .3s;
    // width: 335px;
    z-index: -1;
  }
  .low_5{
    margin: 27px auto 0;
    width: 90%;
  }
  .bg_bike{
      height: 198px;
      position: absolute;
      right: 0;
      top: 0;
      width: 179px;
  }
  .choice {
  img{
    height: 85px;
    width: 85px;
  }
    .choice_list{
      gap: 54px;
    }
    .sec4{
      line-height: 38px !important;
    }
  }
  .digital_ga{
    p{
      line-height: 20px;
    }
  }
}
</style>
