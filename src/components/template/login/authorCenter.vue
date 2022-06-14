<template>
  <!-- <div class="container sub_tab row" > -->
  <div v-if="$q.platform.is.desktop">
    <div class="form d_flex column aic">
      <div class="desc d_flex column">
        <h1 class="maintt2">인증센터</h1>
        <span class="f700">세이프바이크 다이렉트 로그인 서비스</span>
      </div>
      <form action="POST" class="d_flex column">
        <fieldset>
          <label for="">아이디</label>
          <input type="text" placeholder="아이디를 입력하세요" required />
        </fieldset>
        <fieldset>
          <label for="">패스워드</label>
          <input type="text" placeholder="패스워드를 입력하세요" required />
        </fieldset>
        <q-toggle v-model="value" label="자동로그인" left-label class="jcfe" />
        <q-btn
          class="base"
          text-color="white"
          color="base"
          @click="quoteContact"
          >로그인
        </q-btn>
      </form>
      <div class="certification">
        <div class="q-pa-md q-gutter-sm certif_wrapper">
          <q-btn
            label="공동인증서"
            :name="authentication"
            @click="authentication = true"
          >
            <img src="~/assets/img/authentication.svg" alt="" />
          </q-btn>
          <q-btn
            label="휴대폰인증"
            :nema="MobileAuthor"
            @click="MobileAuthor = true"
          >
            <img src="~/assets/img/mobile.svg" alt="" />
          </q-btn>
          <q-btn label="카카오인증" :name="Kakao" @click="Kakao = true">
            <img src="~/assets/img/kakao.svg" alt="" />
          </q-btn>

          <q-dialog v-model="authentication">
            <q-card>
              <q-card-section>
                <div class="text-h6">공동인증서</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="MobileAuthor" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar
                  icon="signal_wifi_off"
                  color="primary"
                  text-color="white"
                />
                <span class="q-ml-sm">휴대폰인증</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn
                  flat
                  label="Turn on Wifi"
                  color="primary"
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="Kakao" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">카카오인증</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  dense
                  v-model="address"
                  autofocus
                  @keyup.enter="Kakao = false"
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add address" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { authentication } from "src/assets/img/authentication.svg";
import { MobileAuthor } from "src/assets/img/mobile.svg";
import { Kakao } from "src/assets/img/kakao.svg";

export default defineComponent({
  name: "AuthorCenter",
  created() {
    this.authentication = authentication;
    this.MobileAuthor = MobileAuthor;
    this.kakao = Kakao;
  },
  data() {
    return {};
  },
  setup() {
    return {
      value: ref(true),
      authentication: ref(false),
      MobileAuthor: ref(false),
      Kakao: ref(false),

      address: ref(""),
    };
  },
  methods: {},
  components: {},
});
</script>
<style lang="scss" scoped>
.form {
  gap: 72px;
  .desc {
    gap: 27px;

    span {
      font-size: 30px;
      line-height: 48px;
    }
  }
  form {
    gap: 27px;
    width: 100%;
    max-width: 335px;

    fieldset {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid $hr;
      display: flex;
      gap: 20px;
      input {
        width: 100%;
        flex: 1;
      }
    }
  }
}
.certification {
  width: 100%;
  .certif_wrapper {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
    width: 100%;
    height: 135px;
    .q-btn {
      margin: 0;
      padding: 0;
      width: 100%;
      flex: 1;
      // .q-btn__content {
      //   flex-direction: column-reverse !important;
      // }
    }

    .q-btn:nth-last-of-type(3) {
      background-color: $blue2;
    }
    .q-btn:nth-last-of-type(2) {
      background-color: $blue3;
    }
    .q-btn:nth-last-of-type(1) {
      background-color: $orange;
    }
    .q-btn:before {
      box-shadow: none;
    }
  }
}

@media screen and (max-width: 500px) and (min-width: 320px) {
}
</style>
