<template>
  <header>
    <nav class="desktop">
      <div class="wrapper1">
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Portfolio</a></li>
          <div class="logo">
            <a href="#">
              <img :src="images.LogoImage" alt="full-logo">
            </a>  
          </div>
          <li><a href="#about-me">My Profile</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>      
    </nav>

    <nav class="mobile">
      <div class="wrapper2">
        <div class="logo">
          <img :src="images.LogoImage" alt="full-logo">
        </div>

        <a href="#contact-us">Contact Us</a>
      </div>      
    </nav>

  </header>
</template>

<script>
import LogoImage from '@Asset/images/logo.png'

export default {
  name: 'MainHeader',
  components: {
  },
  data() {
    return {
      images: {
        LogoImage
      },
      isMobile: true,
      isDesktop: false,
      isHeaderHeightDoubleLineForTopBanner: false
    }
  },
  methods: {
    setDeviceVariables() {
      if (document.documentElement.clientWidth < 1024) {
        this.isMobile = true
        this.isDesktop = false
      } else {
        this.isMobile = false
        this.isDesktop = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';
$background-color: $dark-color;

.wrapper1 {
  width: 1000px;
}

nav.mobile {
  display: none;
}

@media only screen and (max-width: 768px){
  nav.desktop {
    display: none;
  }

  nav.mobile {
    display: block;
  }
}

.logo img {
  display: flex;
  justify-content: center;
  line-height: 100px;
  height: 100px;
}

@media only screen and (max-width: 768px){
  

  .logo img {
    height: 65px;
  }
}

.wrapper2 {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
} 

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 999;
}

@media only screen and (max-width: 768px){
  header {
    height: 65px;
  }
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #350F22;
}

@media only screen and (max-width: 768px){
  nav {
    height: 65px;
  }
}

body header nav ul {
  display: flex;
  margin-left: 0;
  justify-content: center;
}

body header nav ul li {
  list-style: none;
  display: inline-block;
  line-height: 100px;
}

body header nav ul li a {
  display: block;
  text-decoration: none;
  font-size: 25px;
  color: #CCA951;
  padding: 0 20px;
}

.wrapper2 a {
  display: block;
  text-decoration: none;
  font-size: 25px;
  color: #CCA951;
  align-self: center;
}
</style>
