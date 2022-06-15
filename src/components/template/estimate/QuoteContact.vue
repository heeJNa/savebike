<template >
  <!-- <div class="container sub_tab row" > -->
  <div class="form_wraper" v-if="$q.platform.is.desktop">
      <div class="pc_form">
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
            <textarea name="" id="" placeholder="상담 내용을 적어주세요" style="resize: none"></textarea>
        </form>
        <q-btn class="base" text-color="white" color="base" @click="create">견적문의</q-btn>
      </div>
    <!-- </div> -->
  </div>
  <Page-footer></Page-footer>
</template>

<script>
import PageFooter from 'src/layouts/PageFooter.vue';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'QuoteContact',
  data() {
    return {

    }
  },
  methods:{
    create() {
      const data = this.createForm
			const HOST = `https://ata.mrkim.co.kr/service/open/api/request-raw/add`
			this.$axios
      .post(HOST, data, {

        })
				.then((result) => {
          this.$router.push({
            path: "/completion",
          });
				})
				.catch((error) => {
					console.error(error)
				})
		},
  },
  components: {
    PageFooter

  }
})
</script>
<style lang="scss" scoped>
.pc_form{
  width: 100%;
}
.form_wraper{
    border-left: 1px solid rgba(0, 76, 146, 0.1);
    padding: 54px 27px 27px;
}

</style>
