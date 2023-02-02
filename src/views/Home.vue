<template>
  <main class="page-content">
    <hero></hero>
    <gallery></gallery>
    <about-me></about-me>
    <services></services>
    <why-lovevents></why-lovevents>
    <contact-us></contact-us>
    <main-footer></main-footer>
  </main>
</template>

<script>
import Hero from '@Component/Home/Hero.vue'
import Gallery from '@Component/Home/Gallery.vue'
import AboutMe from '@Component/Home/AboutMe.vue'
import Services from '@Component/Home/Services.vue'
import WhyLovevents from '@Component/Home/WhyLovevents.vue'
import ContactUs from '@Component/Home/ContactUs.vue'
import MainFooter from '@Component/Home/Footer.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Gallery,
    AboutMe,
    Services,
    WhyLovevents,
    ContactUs,
    MainFooter,
  },
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/partials/variables';


</style>
