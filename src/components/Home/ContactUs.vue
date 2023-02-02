<template>
  <section id="contact-us">
    <div class="contact-us">
      <div class="container">
        <div class="contact-us-container">
          <div class="contact-us-block">
            <h3>Contact us</h3>
            <div class="item">Cell: 084 413 5051</div>
            <div class="item">Whatsapp: 084 413 5051</div>
            <div class="item">ciske@lovevents.co.za</div>
          </div>
          <div class="contact-us-block">
            <h3>Business hours</h3>
            <div class="item">Monday - Friday 9am - 5pm</div>
            <div class="item">Saturday - Closed for events</div>
            <div class="item">Sunday - Closed for events</div>
          </div>
          <div class="contact-us-block">
            <h3>Address</h3>
            <div class="item">Plattekloof 1, Northern Suburbs, Cape Town</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Image1 from '@Asset/images/background-why-lovevents.webp'

export default {
  name: 'ContactUs',
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

.contact-us {
  color: #350F22;
  background-color: #fff8e7;
  padding: 70px 0;
}

@media only screen and (max-width: 768px){
  .contact-us {
    padding: 70px 0 25px;
  }
}

.contact-us-container {
  display: flex;
}

.contact-us-block {
  flex: 1;
  margin-right: 7px;
}

@media only screen and (max-width: 768px){
  .contact-us-block {
    margin-right: 0;
    padding-bottom: 15px;
  }
}

@media only screen and (max-width: 768px){
  .contact-us-container {
    flex-direction: column;
  }
}

.contact-us-block h3 {
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 20px;
}

@media only screen and (max-width: 768px){
  .contact-us-block h3 {
    margin-bottom: 10px;
  }
}

.contact-us-block .item {
  font-size: 20px;
  margin-bottom: 10px;
}

.contact-us-block .item:last-child {
  margin-bottom: 0;
}

.contact-us-block:last-child {
  margin-right: 0;
}

</style>
