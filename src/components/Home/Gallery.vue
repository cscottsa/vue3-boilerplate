<template>
  <section id="gallery">
    <div class="gallery">
      <div class="container">
        <div class="block-lvl-1">

          <div class="block-lvl-2_1">

            <div class="block-lvl-3_1">
              <img :src="images.block2image" alt="">
            </div>
            
            <div class="block-lvl-3_2">

              <div class="block-lvl-4_1">
                <img :src="images.block3image" alt="">
              </div>

              <div class="block-lvl-4_2">
                <img :src="images.block4image" alt="">
              </div>

            </div>

          </div>
          <div class="block-lvl-2_2">
            <img :src="images.block1image" alt="">
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import couplePose from '@Asset/images/couple-pose.webp'
import weddingInvite from '@Asset/images/wedding-invite.webp'
import weddingDecor from '@Asset/images/wedding-decor.webp'
import weddingCake from '@Asset/images/wedding-cake.webp'

export default {
  name: 'Gallery',
  data() {
    return {
      images: {
        block1image: couplePose,
        block2image: weddingInvite,
        block3image: weddingDecor,
        block4image: weddingCake
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.gallery {
  background-color: #350F22;
  padding: 70px 0;
}

.block-lvl-1 {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
}

.block-lvl-2_1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 40px;
}

@media only screen and (max-width: 768px){
  .block-lvl-2_1 {
    margin-right: 0;
  }
}

.block-lvl-2_2 {
  flex: 1;
}

@media only screen and (max-width: 768px){
  .block-lvl-2_2 {
    display: none;
  }
}

.block-lvl-3_1 {
  margin-bottom: 20px;
}

.block-lvl-3_2 {
  display: flex;
  
}

.block-lvl-4_1 {
  flex: 1;
  margin-right: 20px;
}

.block-lvl-4_2 {
  flex: 1;
  height: 100%;
}

img {
  width: 100%;
  border-radius: 5px;
}
</style>
