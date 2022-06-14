<template>
  <div class="container desktop" v-if="$q.platform.is.desktop">
    <div class="d_flex">
      <section class="tab">
        <q-tabs v-model="tab" vertical indicator-color="transparent">
          <h2 class="maintt1 f700">로그인센터</h2>
          <div class="tab_wrapper">
            <q-tab
              name="loginPage"
              label="로그인"
              class="tab"
              @click="tab = 'loginPage'"
              :class="tab === 'loginPage' && 'active'"
            />
            <q-tab
              name="AuthorCenter"
              class="tab"
              label="인증센터"
              @click="tab = 'AuthorCenter'"
              :class="tab === 'AuthorCenter' && 'active'"
            />
            <q-tab name="login" class="tab" label="이용약관" />
            <q-tab name="login" class="tab" label="개인정보호" />
          </div>
        </q-tabs>
      </section>
      <section class="content">
        <LoginPage v-if="tab === 'loginPage'" />
        <AuthorCenter v-if="tab === 'AuthorCenter'" />
      </section>
      <section class="article">
        <!-- <Learn v-if="Tab === 'Learn'" /> -->
      </section>
    </div>
    <PageFooter />
  </div>
  <div class="container mobile" v-if="$q.platform.is.mobile"></div>
</template>

<script>
import { defineComponent, ref } from "vue";
import LoginPage from "components/template/login/loginPage";
import AuthorCenter from "components/template/login/authorCenter";
import PageFooter from "src/layouts/PageFooter";
// import Learn from "components/template/Home/Learn";

export default defineComponent({
  name: "LoginCenter",
  data() {
    return {
      tab: "loginPage",
    };
  },
  components: {
    LoginPage,
    AuthorCenter,
    PageFooter,
    // Learn,
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
section {
  padding: 54px 27px;
}
section.tab {
  max-width: 321px;
  width: 100%;
  border-right: 1px solid $hr;
  .q-tabs {
    h2 {
      margin: 0;
      margin-bottom: 27px;
    }
    .tab_wrapper {
      display: flex;
      flex-direction: column;
      gap: 13px;

      .q-tab {
        width: 100%;
        border-bottom: 1px solid $hr;
        justify-content: flex-start;
        border-radius: 5px;

        .q-tab__content {
          width: 100%;
          align-items: flex-start;

          .q-tab__label {
            padding: 0 20px;
          }
        }
      }
      .q-tab.active {
        background-color: $blue;
        color: $white !important;
        // .q-tab__labe {
        //   color: $white !important;
        // }
      }
    }
  }
}
section.content {
  max-width: 582px !important;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid $hr;
}
@media screen and (max-width: 500px) and (min-width: 320px) {
}
</style>
