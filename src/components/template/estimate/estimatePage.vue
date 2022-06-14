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
          <form action="post">
            <div v-show="hidden">
              <h2 class="sec2">개인 정보 입력</h2>
              <fieldset>
                <label for="">고객명</label>
                <input type="text" v-model="createForm.customerName" required />
              </fieldset>
              <fieldset>
                <label for="">휴대폰번호</label>
                <input type="text" v-model="createForm.customerPhoneNumber" />
              </fieldset>
              <fieldset>
                <label for="">생년월일</label>
                <input
                  type="text"
                  placeholder="예)910307"
                  v-model="createForm.customerBirthDay"
                  required
                />
              </fieldset>
              <fieldset>
                <label for="">성별</label>
                <select name="" id="gender" v-model="createForm.customerGender">
                  <option value="male">남</option>
                  <option value="female">여</option>
                </select>
              </fieldset>
              <h2 class="sec2 mt27">이륜차 정보 입력</h2>
              <fieldset>
                <label for="">배기량</label>
                <select
                  name=""
                  id=""
                  class=""
                  v-model="createForm.requestMemo.displacementVolume"
                  required
                >
                  <option value="sA/~50" selected="selected">
                    소형A/50cc 미만
                  </option>
                  <option value="소형B/50cc~100cc">소형B/50cc~100cc</option>
                  <option value="중형/101cc~260cc">중형/101cc~260cc</option>
                  <option value="대형/260cc초과">대형/260cc초과</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">대물배상</label>
                <select
                  name=""
                  id=""
                  class=""
                  v-model="createForm.requestMemo.propertyCompensation"
                  required
                >
                  <option value="" selected="selected">
                    2천만원 (책임보험)
                  </option>
                  <option value="3천만원">3천만원</option>
                  <option value="6천만원">6천만원</option>
                  <option value="1억원 (최대금액)">1억원 (최대금액)</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">용도구분</label>
                <select
                  name=""
                  id=""
                  class=""
                  v-model="createForm.requestMemo.classification"
                  required
                >
                  <option value="가정용" selected="selected">가정용</option>
                  <option value="배달용">배달용</option>
                  <option value="퀵">퀵</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="">할인할증</label>
                <select
                  name=""
                  id=""
                  class=""
                  v-model="createForm.requestMemo.discountPremium"
                  required
                >
                  <option value="" selected="selected">
                    11Z (신규 번호판등록시)
                  </option>
                  <option value="12Z (1년이상 무사고갱신)">
                    12Z (1년이상 무사고갱신)
                  </option>
                  <option value="13Z (2년이상 무사고갱신)">
                    13Z (2년이상 무사고갱신)
                  </option>
                  <option value="14Z (3년이상 무사고갱신)">
                    14Z (3년이상 무사고갱신)
                  </option>
                  <option value="15Z (4년이상 무사고갱신)">
                    15Z (4년이상 무사고갱신)
                  </option>
                  <option value="16Z (5년이상 무사고갱신)">
                    16Z (5년이상 무사고갱신)
                  </option>
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
            </div>
            <div v-show="show">
              <form action="post">
                <div>
                  <h2 class="sec2 mt27">이륜차정보입력</h2>
                  <fieldset>
                    <label for=""
                      >가입경력<i class="fa-solid fa-circle-exclamation"></i
                    ></label>
                    <select
                      name=""
                      id=""
                      v-model="createForm.requestMemo.enrollmentExperience"
                      required
                    >
                      <option value="1년 미만" selected="selected">
                        1년 미만
                      </option>
                      <option value="2년 미만">2년 미만</option>
                      <option value="3년 미만">3년 미만</option>
                      <option value="3년 이상">3년 이상</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for=""
                      >법규위반<i class="fa-solid fa-circle-exclamation"></i
                    ></label>
                    <select
                      name=""
                      id=""
                      class=""
                      v-model="createForm.requestMemo.violationLaw"
                      required
                    >
                      <option value="할인적용" selected="selected">
                        할인적용
                      </option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for=""
                      >운전연령<i class="fa-solid fa-circle-exclamation"></i
                    ></label>
                    <select
                      name=""
                      id=""
                      v-model="createForm.requestMemo.drivingAge"
                      required
                    >
                      <option value="전연령">전연령</option>
                      <option value="만19세이상">만19세이상</option>
                      <option value="만21세이상">만21세이상</option>
                      <option value="만24세이상">만24세이상</option>
                      <option value="만26세이상">만26세이상</option>
                      <option value="만30세이상">만30세이상</option>
                      <option value="3만35세이상5">만35세이상</option>
                      <option value="만43세이상">만43세이상</option>
                      <option value="만48세이상">만48세이상</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for=""
                      >운전자한정<i class="fa-solid fa-circle-exclamation"></i
                    ></label>
                    <select
                      name=""
                      id=""
                      v-model="createForm.requestMemo.driverOnly"
                      required
                    >
                      <option value="누구나">누구나</option>
                      <option value="가족한정">가족한정</option>
                      <option value="기명피보험자1인한정">
                        기명피보험자1인한정
                      </option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for=""
                      >물적사고할증<i class="fa-solid fa-circle-exclamation"></i
                    ></label>
                    <select
                      name=""
                      id=""
                      v-model="createForm.requestMemo.physicalAccident"
                      required
                    >
                      <option value="50만원">50만원</option>
                      <option value="200만원">200만원</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label for="동의">이용약관동의</label>
                    <input
                      type="checkbox"
                      name=""
                      value=""
                      id="agree"
                      checked
                      v-model="createForm.requestMemo.agree"
                      required
                    />
                  </fieldset>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="상담내용을 남겨주세요"
                  ></textarea>
                </div>
              </form>
            </div>
          </form>
        </div>
      </section>
      <div class="btn_wrapper d_flex jcc aic" v-show="hidden">
        <button @click="quoteContact">
          <span class="sec2">다음</span>
        </button>
      </div>
      <div class="btn_wrapper d_flex jcc aic" v-show="show">
        <button @click="create">
          <span class="sec2">견적문의</span>
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

  // setup() {
  //   const Postestimate = () => {
  //    this.hidden = !this.hidden
  //     this.show = !this.show
  //   };
  //   return {
  //     Postestimate,
  //   };
  // },
  data() {
    return {
      hidden: true,
      show: false,

      createForm: {
        customerName: "",
        customerPhoneNumber: "",
        customerBirthDay: "",
        customerGender: "",
        requestMemo: {
          propertyCompensation: "",
          classification: "",
          discountPremium: "",
          enrollmentExperience: "",
          violationLaw: "",
          drivingAge: "",
          driverOnly: "",
          physicalAccident: "",
          agree: "",
        },
      },
    };
  },
  methods: {
    create() {
      const data = this.createForm;
      const data2 = {
        requestMemo: JSON.stringify(data.requestMemo).replace(/[\{\}\"]/g, ""),
      };
      console.log("data2", data2);
      Object.assign(data, data2);
      const HOST = `https://ata.mrkim.co.kr/service/open/api/request-raw/add`;
      this.$axios
        .post(HOST, data, {})
        .then((result) => {
          this.$router.push({
            path: "/completion",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    quoteContact() {
      this.hidden = !this.hidden;
      this.show = !this.show;
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
      div {
        display: flex;
        flex-direction: column;
        gap: 27px;
      }

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
