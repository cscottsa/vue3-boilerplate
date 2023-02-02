<template>
  <section id="about-me">
    <div class="about-me">
      <div class="container">
        <div class="about-me-container">
          <h2>Meet Ciske</h2>
          <h3>Owner/Lead Planner</h3>
          <div class="about-me-content">
            <img :src="images.AboutMeImage">
            <div class="about-me-text">
              <div class="hi">Hey. I'm Ciske!</div>

              <p>I work hard for what I want. And what I want is for you to have an unforgettable wedding. My number one priority is my clients and I teach our team tirelessly to do just that!</p> 

              <p>A little about me: I'm a 25 year old, foodie and Formula 1 fan from Cape Town, GO MERCEDES! I love live music, books, camping, and traveling. I'm THAT planner that's laughing with you at your tastings, showing sick dance moves at random moments, and eating your cake on your wedding day because after this, I like to think I am helping my friends get married (plus, I can't resist cake, and icre-cream).</p> 

              <p>Now, sit back, relax, and let's do this thing!!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeImage from '@Asset/images/image5.webp'

export default {
  name: 'AboutMe',
  data() {
    return {
      images: {
        AboutMeImage,
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.about-me {
  background-color: #fff8e7;
}

.about-me-container {
  padding: 70px 60px;
}

@media only screen and (max-width: 768px){
  .about-me-container {
    padding: 0 0;
  }
}

.about-me-content {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 768px){
  .about-me-content{
    flex-direction: column;
    align-items: center;
  }
}

.about-me img {
  width: 40%;
  justify-content: center;
  margin-right: 55px;
  border-radius: 7px;
}

@media only screen and (max-width: 768px){
  .about-me img {
    width: 100%;
    margin-right: 0;
  }
}

.about-me-text {
  display: flex;
  flex-direction: column;
  width: 40%;
}

@media only screen and (max-width: 768px){
  .about-me-text {
    width: 100%;
    padding-bottom: 70px;
  }
}

.about-me h2 {
  font-weight: 900;
  font-size:  55px;
  align-items: left;
  padding-bottom: 20px;
  text-align: center;
}

@media only screen and (max-width: 768px){
  .about-me h2 {
    font-size: 45px;
    padding-top: 70px;
  }
}

.about-me h3 {
  font-weight: 900;
  font-size:  40px;
  font-style: italic;
  text-align: center;
  padding-bottom: 60px;
}

@media only screen and (max-width: 768px){
  .about-me h3 {
    font-size: 30px;
    padding-bottom: 20px;
  }
}

.hi {
  font-family: 'FancyFont';
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 20px;
}

@media only screen and (max-width: 768px){
  .hi {
    padding-top: 20px;
  }
}

.about-me-text p {
  font-size: 20px;
  padding-bottom: 20px;
}

.about-me-text p:last-child {
  padding-bottom: 0;
}

</style>
