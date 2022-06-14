<template>
  <div class="container mobile" v-if="$q.platform.is.mobile">
    <div class="main">
      <section class="d_flex aic jcc column">
        <span class="sec4 f700"> 접수가 <em>완료</em>되었습니다. </span>
        <p>순차적으로 상담을 진행하오니<br />잠시만 기다려주세요 :)</p>
        <img src="~assets/img/like_1.png" alt="" />
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "completionPage",

  components: {},
  setup() {},
  data() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100vh - 108px);
  position: relative;

  section {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 27px;

    p {
      text-align: center;
    }
  }
}
</style>
