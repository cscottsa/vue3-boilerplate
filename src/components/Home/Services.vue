<template>
  <section id="services" class="services">
    <div class="services-title">
      <h3>Services We offer</h3>                   
    </div>

    <div class="services-box-parent">

      <div class="services-box">
        <div class="services-box-img">
            <img :src="images.service2image">
        </div>
        <h4>On-the-day<br>Coordination</h4>
        <div 
        v-on:click="toggleDescription(2)"
        :class="{ 'extra-padding': !showBox2Description }" 
        class="services-more-info">More info <span v-if="!showBox2Description">&#8594;</span><span v-if="showBox2Description">&#8595;</span></div>
        <div v-show="showBox2Description" class="services-box-description">
          <p>This package is designed for brides who have
              planned every detail of their wedding & who
              need an extra hand on the day to oversee
              everything runs smoothly.
              The on the day coordination package includes:</p>
          <ul>
            <li>Unlimited communication (emails/telephone)</li>
            <li>4 consultations</li>
            <li>Communication with all vendors on the day
                & 1 month prior</li>
            <li>Final Program</li>
            <li>15 hours on the day</li>
          </ul>
        </div>
      </div>
      
      <div class="services-box">
        <div class="services-box-img">  
          <img :src="images.service1image">
        </div>
        <h4>Full Wedding Planning<br>& Coordination</h4>
        <div 
          v-on:click="toggleDescription(1)"
          :class="{ 'extra-padding': !showBox1Description }" 
          class="services-more-info">More info <span v-if="!showBox1Description">&#8594;</span><span v-if="showBox1Description">&#8595;</span></div>
        <div v-show="showBox1Description" class="services-box-description">
          <p>A package like this is perfect for anyone with a
            tendency to feel overwhelmed who needs someone
            to calm them down & provide them with the
            wedding of their dreams.
            The full wedding planning & coordination package
            includes:
          </p>
          <ul>
            <li>Unlimited communication (emails/telephone)</li>
            <li>6 consultations</li>
            <li>All vendor management</li>
            <li>Décor & concept design</li>
            <li>On the day décor set up</li>
            <li>Final Program</li>
            <li>15 hours on the day</li>
          </ul>
        </div>
      </div>

      <div class="services-box">
        <div class="services-box-img">
          <img :src="images.service3image" alt="">
        </div>
        <h4>Décor Concept Design,<br>Styling & Set up</h4>
        <div 
        v-on:click="toggleDescription(3)"
        :class="{ 'extra-padding' : !showBox3Description }" 
        class="services-more-info">More info <span v-if="!showBox3Description">&#8594;</span><span v-if="showBox3Description">&#8595;</span></div>
        <div v-show="showBox3Description" class="services-box-description">
          <p>This package is ideal for brides who already have all
              their service providers, the venue, & vendors booked,
              but need help with all the creative & decorative
              elements of the wedding.
              The décor concept design, styling & set up package
              includes:
          </p>
          <ul>
            <li>Unlimited communication (emails/telephone)</li>
            <li>Décor & concept design</li>
            <li>On the day décor set-up</li>
            <li>4 consultations</li>
            <li>All décor vendor management</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Image4 from '@Asset/images/image4.webp'
import Image3 from '@Asset/images/image3.webp'
import Image2 from '@Asset/images/image2.webp'


export default {
  name: 'Services',
  data() {
    return {
      showBox1Description: true,
      showBox2Description: true,
      showBox3Description: true,
      
      images: {
        service1image: Image4,
        service2image: Image3,
        service3image: Image2,
      }
    }
  },
  methods: {
    toggleDescription(number) {
      if (number == 1) {
        this.showBox1Description = !this.showBox1Description
      }
      if (number == 2) {
        this.showBox2Description = !this.showBox2Description
      }
      if (number == 3) {
        this.showBox3Description = !this.showBox3Description
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.services {
  background-color: #350F22;
  padding: 70px 0 70px 0;
}

.services-title {
  display: flex;
  justify-content: center;
}

.services-box-parent {
  display: flex;
  justify-content: center;
}

.services-box-parent .services-box {
  justify-content: center;
  width: 320px;
  margin: 0 5px;
  border-radius: 5px;
  overflow: hidden;
}

.services h3 {
  color: #CCA951;
  font-size: 45px;
  padding-bottom: 40px;
}

.services-box h4 {
  display: flex;
  justify-content: center;
  background-color: #fff8e7;
  color: #000000;
  font-size: 25px;
  font-weight: 800;
  padding: 20px 0 20px 0;
}

.services-box-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff8e7;
  font-weight: 800;
  font-size: 18px;
  padding: 0 15px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.services-box-description ul {
  list-style: initial;
  padding-left: 30px;
}

.services-box-description li {
  padding-top: 3px;
}

.services-box img {
  display: flex;
  justify-content: center;
  width: 320px;
    
}

.services-box-description p {
  padding: 15px;
}

.services-more-info {
  display: flex;
  justify-content: space-between;
  background-color: #fff8e7;
  font-weight: 700;
  font-size: 18px;
  padding: 0 30px;
}

.services-more-info:hover {
  cursor: pointer;
}

.services-more-info.extra-padding {
  padding-bottom: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media only screen and (max-width: 859px){
  .services-box-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .services-box-parent .services-box {
    margin-bottom: 20px;
  }

  .services-box-parent .services-box:last-child {
    margin-bottom: 0;
  }
}

</style>
