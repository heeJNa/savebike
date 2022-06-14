<template>
  <div class="container sub_tab row"  v-if="$q.platform.is.desktop">
    <q-tabs
      v-model="tab"
      vertical
      indicator-color="transparent"
    >
      <h2 class="maintt1 f700"> 견적문의 </h2>
      <q-tab name="QuoteContact"  label="견적문의"  class="tab" @click="Tab = 'QuoteContact'" :class="Tab === 'QuoteContact' && 'active'"/>
      <q-tab name="Learn" class="tab" label="오토바이 보험 알아보기" @click="Tab = 'Learn'" :class="Tab === 'Learn' && 'active'"/>
    </q-tabs>
    <QuoteContact v-if="Tab === 'QuoteContact'" />
    <Learn v-if="Tab === 'Learn'" />
  </div>
  <!-- <div v-if="$q.platform.is.mobile">
    <div class="container sub_tab row" >
      <h1 class="sec1 f700">실시간 <em class="em">비교 견적</em></h1>
      <p class="text1">
        정보를 기입하여 상담신청 해 주시면 실시간 비교견적
        상담신청이 완료됩니다.
      </p>
      <form action="POST" class="">
        <fieldset class="column">
          <h3 class="sec4">개인 정보 입력</h3>
          <div>
            <label for="">고객명</label>
            <input type="text" required>
          </div>
          <div>
            <label for="">휴대폰번호</label>
            <input type="text" />
          </div>
          <div>
            <label for="">생년월일</label>
            <input type="text" placeholder="예)910307" required/>
          </div>
          <div>
            <label for="">성별</label>
            <select name="" id="">
              <option value="">남</option>
              <option value="">여</option>
            </select>
          </div>
        </fieldset>
        <fieldset class="column">
          <h3 class="sec4">이륜차 정보 입력</h3>
            <div>
            <label for="">배기량</label>
            <select name="" id=""  class="" required>
              <option value="" selected="selected">소형A/50cc 미만</option>
              <option value="">소형B/50cc~100cc</option>
              <option value="">중형/101cc~260cc</option>
              <option value="">대형/260cc초과</option>
            </select>
          </div>
          <div>
              <label for="">대물배상</label>
              <select name="" id=""  class="" required>
                <option value="" selected="selected">2천만원 (책임보험)</option>
                <option value="">3천만원</option>
                <option value="">6천만원</option>
                <option value="">1억원 (최대금액)</option>
              </select>
          </div>
          <div>
            <label for="">용도구분</label>
            <select name="" id=""  class="" required>
              <option value="" selected="selected">가정용</option>
              <option value="">배달용</option>
              <option value="">퀵</option>
            </select>
          </div>
          <div>
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
          </div>
        </fieldset>
             <div>
              <label for="" required>가입경력<span class="sprite question"></span></label>
              <select name="" id=""  class="">
                <option value="" selected="selected">1년 미만</option>
                <option value="">2년 미만</option>
                <option value="">3년 미만</option>
                <option value="">3년 이상</option>
              </select>
            </div>
            <div>
              <label for="" required>법규위반<span class="sprite question"></span></label>
              <select name="" id=""  class="">
                <option value="" selected="selected">할인적용</option>
              </select>
            </div>

            <div>
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
            </div>
            <div>
              <label for="" required>운전자한정<span class="sprite question"></span></label>
              <select name="" id=""  class="">
                <option value="" selected="selected">누구나</option>
                <option value="">가족한정</option>
                <option value="">기명피보험자1인한정</option>
              </select>
            </div>

            <div>
              <label for="" required>물적사고할증<span class="sprite question"></span></label>
              <select name="" id=""  class="">
                <option value="" selected="selected">50만원</option>
                <option value="">200만원</option>
              </select>
            </div>
            <div class="agree">
              <label for="agree" required>이용약관동의<span class="sprite question"></span></label>
              <input type="checkbox" name="" value="" id="agree" checked>
            </div>
          <textarea name="" id="" placeholder="상담 내용을 적어주세요" style="resize: none"></textarea>
      </form>
    </div>
    <q-btn btn class="base full_btn" text-color="white" color="base" @click="quoteContact">견적문의</q-btn>
  </div> -->

  <!-- <div v-if="$q.platform.is.mobile">
    <q-tabs
      indicator-color="transparent"
    >
      <q-tab name="QuoteContact-M"  label="견적문의"  class="tab" @click="mTab = 'QuoteContact-M'" :class="mTab === 'QuoteContact-M' && 'active'"/>
      <q-tab name="Learn-M" class="tab" label="오토바이 보험 알아보기" @click="mTab = 'Learn-M'" :class="mTab === 'Learn-M' && 'active'"/>
    </q-tabs>

  </div> -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import QuoteContact from 'components/template/Home/QuoteContact'
import Learn from 'components/template/Home/Learn'

export default defineComponent({
  name: 'ComparativeEstimate',
  data() {
    return {
      tab: 'quoteContact',
    }
  },
  methods:{

  },
  components: {
    QuoteContact,
    Learn,
  }
})
</script>
<style lang="scss" scoped>
// .container{
//   margin: 0 auto;
// }
// h1{
//   line-height: 27px;
// }
// p{
//   color: $font;
//   opacity: 0.5;
//   margin: 15px 0 27px;
// }
// h3{
//   width: 153px;
//   padding-bottom: 5px;
//   border-bottom:1px solid ;
// }

// .form_wraper{
//   border-left: 1px solid $hr;
//   padding: 54px 27px 27px;
// }
// .q-tabs{
//   margin-top:54px;
// }
// .agree{
//   width: 50%;
//   align-items: center
// }
// textarea{
//   padding: 20px;
//   height: 100px;
//   border: 1px solid $hr;
//   margin-top: 17px;
// }
// @media screen and (max-width: 500px) and (min-width: 320px) {
//   .container{
//     margin: 27px 20px;
//   }
//   .q-tabs{
//     margin-top: 0;
//   }
//   .maintt1{
//     font-size: 18px;
//     line-height: 33px;
//   }
//   .maintt2{
//     font-size: 24px;
//     line-height: 33px;
//   }
//    .banner {
//       width: 215px;
//     img{
//       width: 215px;
//     }
//     .q-carousel__navigation--bottom {
//      bottom: 50px;
//     }
//   }
// }
</style>
