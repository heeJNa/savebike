<template>
  <header>
    <div class="container desktop" v-if="$q.platform.is.desktop">
      <router-link to="/">
        <img src="~assets/img/LOGO.png" alt="/" />
      </router-link>
      <div class="menu_wrapper">
        <ul class="menu">
          <li><router-link to="">나의계약</router-link></li>
          <li><router-link to="">사고/보상</router-link></li>
          <li><router-link to="">알림</router-link></li>
          <li><router-link to="">인증센터</router-link></li>
        </ul>
        <router-link to="">
          <button class="base sec2">로그인</button>
        </router-link>
      </div>
    </div>
    <div class="container mobile" v-if="$q.platform.is.mobile">
      <div class="mheader">
        <router-link to="/">
          <img src="~assets/img/LOGO.png" alt="/" />
        </router-link>
      </div>
      <q-tabs v-model="tab">
        <q-route-tab to="/">
          <img src="~assets/img/content_paste.svg" />
          <span>나의계약</span>
        </q-route-tab>
        <q-route-tab to="/">
          <img src="~assets/img/alarm-warning-line.svg" />
          <span>사고/보상</span>
        </q-route-tab>
        <q-route-tab to="/">
          <img src="~assets/img/feedback-line.svg" />
          <span>알림</span>
        </q-route-tab>
        <q-route-tab to="/">
          <img src="~assets/img/lock_outline.svg" />
          <span>인증센터</span>
        </q-route-tab>
      </q-tabs>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PageHeader",

  components: {},

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
