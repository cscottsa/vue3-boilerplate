<template>
   <section class="cover-photo" :style="{ 'background-image': `url(${images.CoverImage})` }">
    <div class="cover-photo-text">
      <div class="div-spacing">
        <h2>Love Events</h2>
        <h3>Making your dream a special day.</h3>
        <h1>Event planner Western Cape</h1>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1663414917">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
</template>

<script>
import CoverImage from '@Asset/images/lovevents-cover.jpeg'

export default {
  name: 'Hero',
  data() {
    return {
      images: {
        CoverImage
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.cover-photo {
  position: relative;
  margin: 100px 0 0 0;
  background-size: cover;
  padding: 300px 0;
  background-attachment: fixed;
}

@media only screen and (max-width: 768px){
  .cover-photo{
    display: flex;
    align-items: center;
    height: calc(100vh - 65px);
    padding: 0;
    margin-top: 65px;
    background-position: 672px 65px;
  }
  .div-spacing {
    background: rgba(255, 255, 255, 0.4);
    padding: 15px 0;
  }
}


.cover-photo h1 {
  display: none;
}

.cover-photo h2 {
  display: flex;
  color: #fff;
  font-size: 60px;
  justify-content: left;
  text-shadow: 2px 2px 4px #111;
  align-items: center;
  padding-left: 15%;
  padding-bottom: 15px;
}

@media only screen and (max-width: 768px){
  .cover-photo h2{
    font-size: 45px;
    padding: 0 20px;
  }
}

.cover-photo h3 {
  display: flex;
  color: #fff;
  font-size: 40px;
  justify-content: left;
  text-shadow: 2px 2px 4px #111;
  align-items: center;
  padding-left: 15%;
}

@media only screen and (max-width: 768px){
  .cover-photo h3{
   padding: 0 20px;
   font-size: 30px;
  }
}

@media only screen and (max-width: 768px){
  .cover-photo-text{
   padding-bottom: 40px;
  }
}

.custom-shape-divider-bottom-1663414917 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1663414917 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

.custom-shape-divider-bottom-1663414917 .shape-fill {
  fill: #350F22;
}

</style>
