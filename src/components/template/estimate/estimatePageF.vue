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
          <h2 class="sec2">개인 정보 입력</h2>
          <form action="post">
            <fieldset>
              <label for="">고객명</label>
              <input
                type="text"
                placeholder="이름"
                v-model="createForm.customerName"
                required
              />
            </fieldset>
            <fieldset>
              <label for="">휴대폰번호</label>
              <input
                type="text"
                placeholder="예) 010-1234-5678"
                v-model="createForm.customerPhoneNumber"
              />
            </fieldset>
            <fieldset>
              <label for="">생년월일</label>
              <input
                type="text"
                placeholder="예) 910307"
                v-model="createForm.customerBirthDay"
                required
              />
            </fieldset>
            <fieldset>
              <label for="">성별</label>
              <select name="" id="" v-model="createForm.customerGender">
                <option value="male">남</option>
                <option value="female">여</option>
              </select>
            </fieldset>
          </form>
          <h2 class="sec2 mt27">이륜차 정보 입력</h2>
          <form action="post">
            <fieldset>
              <label for="">배기량</label>
              <select
                name=""
                id=""
                class=""
                v-model="createForm.displacementVolume"
                required
              >
                <option value="sA/50cc" selected="selected">
                  소형A/50cc 미만
                </option>
                <option value="sB/50-100cc">소형B/50cc~100cc</option>
                <option value="m/101-260cc">중형/101cc~260cc</option>
                <option value="l/-260cc">대형/260cc초과</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="">대물배상</label>
              <select
                name=""
                id=""
                class=""
                v-model="createForm.propertyCompensation"
                required
              >
                <option value="2" selected="selected">
                  2천만원 (책임보험)
                </option>
                <option value="3">3천만원</option>
                <option value="6">6천만원</option>
                <option value="10">1억원 (최대금액)</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="">용도구분</label>
              <select
                name=""
                id=""
                class=""
                v-model="createForm.classification"
                required
              >
                <option value="FamilyUse" selected="selected">가정용</option>
                <option value="Delivery">배달용</option>
                <option value="Quick">퀵</option>
              </select>
            </fieldset>
            <fieldset>
              <label for="">할인할증</label>
              <select
                name=""
                id=""
                class=""
                v-model="createForm.discountPremium"
                required
              >
                <option value="" selected="selected">
                  11Z (신규 번호판등록시)
                </option>
                <option value="12Z">12Z (1년이상 무사고갱신)</option>
                <option value="13Z">13Z (2년이상 무사고갱신)</option>
                <option value="14Z">14Z (3년이상 무사고갱신)</option>
                <option value="15Z">15Z (4년이상 무사고갱신)</option>
                <option value="16Z">16Z (5년이상 무사고갱신)</option>
                <option value="17Z">17Z</option>
                <option value="18Z">18Z</option>
                <option value="19Z">19Z</option>
                <option value="20Z">20Z</option>
                <option value="21Z">21Z</option>
                <option value="22Z">22Z</option>
                <option value="23Z">23Z</option>
                <option value="24Z">24Z</option>
              </select>
            </fieldset>
          </form>
        </div>
      </section>
      <!-- <router-link to="/estimate">
        <div class="btn_wrapper d_flex jcc aic">
          <button @click="['Postestimate', 'new']">
            <span class="sec2">다음</span>\
          </button>
        </div> -->
      <div class="btn_wrapper d_flex jcc aic">
        <button @click="Postestimate1"><span class="sec2">다음</span>\</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// import { api } from "boot/axios";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "estimatePage",

  components: {},
  setup() {
    // const $q = useQuasar();
    // const data = ref(null);
    // const createForm = {
    //   customerName: "",
    //   customerPhoneNumber: "",
    //   customerBirthDay: "",
    //   customerGender: "",
    //   displacementVolume: "",
    //   propertyCompensation: "",
    //   classification: "",
    //   discountPremium: "",
    // };
    // const Postestimate1 = () => {
    //   api
    //     .post("/api/request-raw/add", createForm, { withCredentials: true })
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch(() => {
    //       console.error("에러");
    //     });
    // };
    // return {
    //   data,
    //   Postestimate1,
    //   createForm,
    // };
  },
  data() {
    return {
      // rem 으로 작성
      createForm: {
        customerName: "",
        customerPhoneNumber: "",
        customerBirthDay: "",
        customerGender: "",
        displacementVolume: "",
        propertyCompensation: "",
        classification: "",
        discountPremium: "",
      },
    };
  },
  methods: {
    Postestimate1() {
      const data = this.createForm;
      const HOST = `https://ata.mrkim.co.kr/service/open/api/request-raw/add`;
      this.$axios
        .post(HOST, data, {})
        .then((result) => {
          // 견적문의
          this.$router.push({
            path: "/estimate",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
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
.mt27 {
  margin-top: 20px;
}
</style>
