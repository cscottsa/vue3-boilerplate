<template>
  <section>
    <div class="why-lovevents" :style="{ 'background-image': `url(${images.Image1})` }">
      <div class="container">
        <div class="why-lovevents-container">
          <p>Here at Love Events, we believe every couple should be composed and unconcerned on their wedding day.</p>

          <p>You can be fully present to enjoy this once-in-a-lifetime experience with the knowledge and trust that we will deliver your dream event. Our passion and success comes from years of experience, high attention to detail, and a step-by-step process from day one.</p> 

          <p>With our organization, communication, and wonderful relationships within our community, that high-ticket stress no longer exists. Contact us now to ask questions and learn how we can make your vision come to life!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Image1 from '@Asset/images/background-why-lovevents.webp'

export default {
  name: 'WhyLovevents',
  data() {
    return {
      images: {
        Image1,
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.why-lovevents {
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  font-weight: 900;
  font-size: 30px;
  justify-content: center;
  padding: 50px 0 50px 0;
  color: #ffffff;
  text-shadow: 0 0 5px #000;
  background-attachment: fixed;
}
@media only screen and (max-width: 768px){
  .why-lovevents {
    font-size: 18px;
  }
}

.why-lovevents-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.why-lovevents-container p {
  padding-bottom: 20px;
}

.why-lovevents-container p:last-child {
  padding-bottom: 0;
}

.background {
  background-size: cover;
  width: 100%;
}

</style>
