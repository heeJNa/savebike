<template>
  <q-layout view="hHh lpR fFf">
    <PageHeader></PageHeader>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <PageFooter></PageFooter> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import PageHeader from "./PageHeader";
// import PageFooter from "./PageFooter";
export default defineComponent({
  name: "MainLayout",

  components: {
    PageHeader,
    // PageFooter,
  },

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
