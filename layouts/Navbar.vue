<template>


    <div :class="['navbar-area', { 'is-sticky': isSticky }]" id="navbar-two-containers-div">
        <!-- <div class="navbar-new-banner">
            <span class="new-banner-entire-body">✨<span class="navbar-new-banner-content">Proposal automation, approval workflows, and CRM integrations—all at an affordable price.<NuxtLink to="/pricing" class="new-navbar-banner-readbanner">
                Explore now!</NuxtLink></span>🎉💼</span>
        </div> -->
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="https://www.dealdox.io/">
                        <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695208/logo_m8wwsx.svg"
                            alt="Dealdox_Logo">
                    </a>

                    <div class="navbar-toggler" @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink to="/" class="toggle nav-link">Home</NuxtLink>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Platform</a>
                                <ul class="dropdown-menu1">
                                    <div class="main">
                                        <div class="div1">
                                            <h4 class="navheaders">Top Features</h4>
                                            <li class="nav-item">
                                                <NuxtLink to="/services-cpq" class="nav-link">CPQ</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/cpq-integrations" class="nav-link">Integration</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/quoting-software" class="nav-link">Automated Quotations
                                                </NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/approval-software" class="nav-link">Quick
                                                    Approvals</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/mobileapp" class="nav-link">
                                                    Mobile App
                                                </NuxtLink>
                                            </li>
                                        </div>
                                        <div class="div2">
                                            <h4 class="navheaders">Top Integrations</h4>
                                            <li class="nav-item">
                                                <NuxtLink to="/salesforce-cpq-integration" class="nav-link">Salesforce
                                                    CRM</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/microsoft-dynamics-365-cpq-integration" class="nav-link">
                                                    Microsoft Dynamics CRM</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/freshworks-cpq-integration" class="nav-link">Freshworks
                                                    CRM
                                                </NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/hubspot-cpq-integration" class="nav-link">HubSpot CRM
                                                </NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/sugarcrm-cpq-integration" class="nav-link">
                                                    SugarCRM
                                                </NuxtLink>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>


                            <li class="nav-item">
                                <NuxtLink to="/pricing" class="toggle nav-link">Pricing</NuxtLink>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Company</a>
                                <ul class="dropdown-menu" style="z-index: 10;">
                                    <li class="nav-item">
                                        <NuxtLink to="/our-team" class="nav-link">Our Team</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/contact" class="nav-link">Get In Touch</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Resources</a>
                                <ul class="dropdown-menu" style="z-index: 10;">
                                    <li class="nav-item">
                                        <NuxtLink to="/blogs" class="nav-link">Blogs</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/success-stories" class="nav-link">Success Stories</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/glossary" class="nav-link">Glossary</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/news" class="nav-link">News</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/contact" class="toggle nav-link">Contact Us</NuxtLink>
                            </li>

                        </ul>
                    </div>

                    <div class="others-option">
                        <a href="https://www.dealdox.io/demo" target="_blank" class="button-container">
                            <button class="default-btn">Get a Demo</button></a>
                        <a href="https://web.dealdox.io/" target="_blank" class="button-container">
                            <button class="default-btn">Login</button></a>

                    </div>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isSticky: false,
            isMenu: false,
            active: false,
            button_active_state: false,
        }
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>

<style>
.navbar-new-banner {
    background: black;
    padding: 10px 20px;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.6);
    position:relative;
    overflow: hidden;


}

.navbar-new-banner-content {
    color: white;
    background-clip: text;
    font-weight: 500;
    font-family: system-ui;
    font-size: 15px;
    letter-spacing: 0.6px;
    text-align: center;
    position: relative;
    overflow: hidden;
}



.dealdox-banner-logo {
    letter-spacing: 1px;
}

.new-banner-entire-body{
    position: relative;
    overflow: hidden;
}

.new-banner-entire-body::before {
  width: 200px;
  height: 80px;
  content: "";
  display: block;
  background: black;
  position: absolute;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-name: purpleButtonSlide;
  animation-name: run;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  z-index: 1;
  -webkit-filter: blur(10px);
  filter: blur(10px);
  opacity: 0.3;
  transform: translateZ(0) scale(1);
  z-index: 10;
}

@keyframes run {
  0% {
    left: -10%;
  }

  100% {
    left: 95%;
  }
}



@media (max-width:1024px){
    .navbar-new-banner-content {
        font-size: 14px !important;
        
    }

    .new-banner-entire-body{
    font-size: 14px;
    text-align: center;
}
}

@media (max-width:520px) {
    .navbar-new-banner-content {
        font-size: 9px !important;
    }
    .new-banner-entire-body{
    font-size: 10px;
    text-align: center;
}
}
</style>
