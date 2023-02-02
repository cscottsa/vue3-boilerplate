<template>
  <footer>
    <div class="footer">
      <div class="footer-sm-icons">
        <a href="https://www.facebook.com/lovevent.co.za" target="_blank">
          <img :src="images.FacebookIcon" alt="facebook-icon">
        </a>
        <a href="https://www.instagram.com/loveevents_za/?hl=en" target="_blank">
          <img :src="images.InstagramIcon" alt="instagram-icon">
        </a>
      </div>
      <div class="rights-reserved">
        Copyright © 2022 Lovevents
      </div>
    </div>
  </footer>
</template>

<script>
import Image1 from '@Asset/images/background-why-lovevents.webp'
import InstagramIcon from '@Asset/images/icon-instagram.png'
import FacebookIcon from '@Asset/images/icon-facebook.png'

export default {
  name: 'Footer',
  data() {
    return {
      images: {
        Image1,
        InstagramIcon,
        FacebookIcon,
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.footer {
  display: flex;
  background-color: #fff8e7;
  padding: 15px 15px;
  justify-content: space-between;
}

.footer-sm-icons img {
  width: 33px;
}

footer h5 {
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: #000;
  padding-bottom: 20px;
}

.rights-reserved {
  color: #000;
  font-size: 18px;
  font-weight: 800;
  align-self: center;
}

</style>
