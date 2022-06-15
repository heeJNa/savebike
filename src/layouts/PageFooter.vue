<template>
  <footer>
    <div class="container desktop" v-if="$q.platform.is.desktop">
      <router-link to="/">
        <img src="~assets/img/LOGO2.png" alt="/" />
      </router-link>
      <div class="info_wrapper">
        <ul class="info sec3">
          <li>상호명 : 안전한바이크</li>
          <li>대표전화 : 1544-0000</li>
          <li>FAX : 070-1234-5678</li>
          <li>주소 : 서울특별시 서울 강남구 테헤란로2길27 11층</li>
        </ul>
      </div>
    </div>
    <div v-if="$q.platform.is.mobile">
      <div class="container mobile info_wrapper">
        <hr />
        <div class="mfooter">
          <router-link to="/">
            <img src="~assets/img/LOGO2.png" alt="/" />
          </router-link>
          <ul class="info sec3">
            <li>
              <ul class="d_flex">
                <li>상호명 : 안전한바이크</li>
                <li>대표전화 : 1544-0000</li>
              </ul>
            </li>
            <li>주소 : 서울특별시 서울 강남구 테헤란로2길27 11층</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PageFooter",

  components: {},

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.container{
  border-top:1px solid $hr ;
  padding-top: 27px;
}
</style>
