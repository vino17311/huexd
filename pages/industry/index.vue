<template>
  <Header />
  <Nuxt />
  <div class="container">hai iam a indutry page</div>
  <Footer />
  <Nuxt />
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>