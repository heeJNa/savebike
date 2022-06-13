<template>
  <div class="container mobile" v-if="$q.platform.is.mobile">
    <div class="main">
      <section>
        <div class="desc">
          <h1 class="sec4 f700">실시간<em>비교견적</em></h1>
          <p>
            정보를 기입하여 상담신청 해 주시면 실시간 비교견적 <br />
            상담신청이 완료됩니다.
          </p>
        </div>
        <div class="form">
          <h2 class="sec2">이륜차정보입력</h2>
          <form action="post">
            <fieldset>
              <label for="" required
                >가입경력<i class="fa-solid fa-circle-exclamation"></i
              ></label>
              <select name="" id="">
                <option value="" selected="selected">1년 미만</option>
                <option value="">2년 미만</option>
                <option value="">3년 미만</option>
                <option value="">3년 이상</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="" required
                >법규위반<i class="fa-solid fa-circle-exclamation"></i
              ></label>
              <select name="" id="" class="">
                <option value="" selected="selected">할인적용</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="" required
                >운전연령<i class="fa-solid fa-circle-exclamation"></i
              ></label>
              <select name="" id="">
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
              <label for="" required
                >운전자한정<i class="fa-solid fa-circle-exclamation"></i
              ></label>
              <select name="" id="">
                <option value="" selected="selected">누구나</option>
                <option value="">가족한정</option>
                <option value="">기명피보험자1인한정</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="" required
                >물적사고할증<i class="fa-solid fa-circle-exclamation"></i
              ></label>
              <select name="" id="">
                <option value="" selected="selected">50만원</option>
                <option value="">200만원</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="agree" required>이용약관동의</label>
              <input type="checkbox" name="" value="" id="agree" checked />
            </fieldset>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="상담내용을 남겨주세요"
            ></textarea>
          </form>
        </div>
      </section>
      <div class="btn_wrapper d_flex jcc aic">
        <button @click="Postestimate">
          <span class="sec2">견적문의</span>\
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "estimatePage",

  components: {},

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
  methods: {},
});
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 27px;

  .desc {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 12px;
      line-height: 20px;
      color: $fontSub;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 27px;

    h2 {
      position: relative;
    }
    h2:after {
      content: "";
      position: absolute;
      width: 125px;
      left: 0;
      bottom: -5px;
      border-bottom: 1px solid $font;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 27px;

      fieldset {
        display: flex;
        position: relative;
        align-items: center;

        label {
          max-width: 135px;
          width: 100%;

          i {
            margin-left: 5px;
            color: $blue;
          }
        }
        select,
        input {
          width: 100%;
          flex: 1;
        }
        select {
          border: none;
        }
        input[type="checkbox"] {
          flex: none;
          width: 14px;
          height: 14px;
        }
        input:focus,
        select:focus,
        option:focus,
        textarea:focus,
        button:focus,
        textarea:focus {
          outline: none;
        }
      }
      fieldset:after {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -5px;
        border-bottom: 1px solid $hr;
      }
      textarea {
        resize: none;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 5px;
        border-color: $hr;
      }
      textarea::placeholder {
        color: $fontSub;
      }
    }
  }
}
.btn_wrapper {
  width: 100%;
  height: 54px;
  background-color: $base;

  button {
    width: 100%;
    height: 100%;
    span {
      color: white;
      text-align: center;
      line-height: 54px;
    }
  }
}
</style>
