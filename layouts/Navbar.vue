

<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]" id="navbar-two-containers-div">
    <!-- <div class="navbar-new-banner">
      <span class="new-banner-entire-body">
        <span class="navbar-new-banner-content">
          <span class="no-animate">🌟</span>
          Meet DealDox at Bangalore Tech Summit 2025 — <b>Booth C73.</b> Discover our latest AI-driven Deal Automation
          platform, live on 18–20 November 2025.

    
        </span>
      </span>

    </div> -->

    <div class="jexa-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.dealdox.io/">
            <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695208/logo_m8wwsx.svg" alt="Dealdox_Logo">
          </a>

          <!-- Mobile Menu Button -->
          <button class="navbar-toggler" @click="toggleMenu" :class="{ active: menuOpen }">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>

          <!-- Navbar Items -->
          <div class="collapse navbar-collapse" :class="{ show: menuOpen }">
            <ul class="navbar-nav">

              <!-- Platform Dropdown -->
              <li class="nav-item" @mouseenter="isDesktop ? openDropdown('platform') : null"
                @mouseleave="isDesktop ? closeDropdown() : null">
                <a href="#" class="dropdown-toggle nav-link" id="dropdown-toggle-nav-link"
                  @click.prevent="isMobile ? toggleDropdown('platform') : null">
                  Platform

                </a>

              

                <ul v-show="dropdowns.platform" class="dropdown-menu" id="dropdown-menu-width-newnavbar"
                  style="z-index: 10;">
                  <div id="platform-mobile-responsive">
                    <div>
                      <span class="navheaders">Top Features</span>
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
                        <NuxtLink to="/mobile-app" class="nav-link">
                          Mobile App
                        </NuxtLink>
                      </li>
                    </div>
                    <div>
                      <span class="navheaders">Top Integrations</span>
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



                <!-- </ul> -->
              </li>

              <li class="nav-item">
                <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
              </li>

              <!-- Company Dropdown -->
              <li class="nav-item" @mouseenter="isDesktop ? openDropdown('company') : null"
                @mouseleave="isDesktop ? closeDropdown() : null">
                <a href="#" class="dropdown-toggle nav-link"
                  @click.prevent="isMobile ? toggleDropdown('company') : null">Company</a>
                <ul v-show="dropdowns.company" class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/our-team" class="nav-link">Our Team</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/contact" class="nav-link">Get In Touch</NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item" @mouseenter="isDesktop ? openDropdown('resources') : null"
                @mouseleave="isDesktop ? closeDropdown() : null">
                <a href="#" class="dropdown-toggle nav-link"
                  @click.prevent="isMobile ? toggleDropdown('resources') : null">Resources</a>
                <ul v-show="dropdowns.resources" class="dropdown-menu" style="z-index: 10;">
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

              <!-- <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
              </li> -->
            </ul>
          </div>

          <div class="others-option">
            <a :href="tryLink" target="_blank" class="button-container">
              <button class="default-btn">Try it Free</button>
            </a>
            <a href="https://web.dealdox.io/" target="_blank" rel="nofollow" class="button-container">
              <button class="default-btn">Login</button>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
   props: {
    commong: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isSticky: false,
      menuOpen: false,
      dropdowns: {
        platform: false,
        company: false,
        resources: false,
      },
      isMobile: false, 
      isDesktop: false 
    };
  },
   computed: {
    tryLink() {
      return this.commong && this.commong.trim() !== '' ? this.commong : '/pricing';
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (!this.menuOpen) {
        this.closeAllDropdowns();
      }
    },
    toggleDropdown(menu) {
      for (let key in this.dropdowns) {
        if (key !== menu) {
          this.dropdowns[key] = false;
        }
      }
      this.dropdowns[menu] = !this.dropdowns[menu];
    },
    openDropdown(menu) {
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
      this.dropdowns[menu] = true;
    },
    closeDropdown() {
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    },
    closeAllDropdowns() {
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    },
    checkDeviceType() {
      if (process.client) {
        this.isMobile = window.innerWidth <= 1024;
        this.isDesktop = window.innerWidth > 1024;
      }
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', () => {
        this.isSticky = window.scrollY >= 100;
      });
      this.checkDeviceType();
      window.addEventListener('resize', this.checkDeviceType);
    }
  }
};
</script>

<style>
@media (max-width: 1024px) {
  .navbar-collapse {
    display: none;
  }

  .navbar-collapse.show {
    display: block;
  }

  .dropdown-menu,
  .dropdown-menu1 {
    display: none;
    position: static;
    width: 100%;
  }

  .dropdown-menu.show,
  .dropdown-menu1.show {
    display: block;
  }
}


.navbar-new-banner {
  width: 100%;
  background: black;
  text-align: center;
  padding: 12px 0;
  font-weight: 600;
  font-size: 15px;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1000;
}

.new-banner-entire-body {
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg,
      #ffffff 0%,
      #c4a8f1 25%,
      #ffffff 50%,
      #a57ce8 75%,
      #ffffff 100%);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerHighlight 4s linear infinite;
}

/* Disable shimmer for 🌟 and Blog link */
.no-animate,
.new-navbar-banner-readbanner {
  -webkit-text-fill-color: #fff !important;
  /* Make visible */
  -webkit-background-clip: initial !important;
  background: none !important;
  animation: none !important;
  color: #fff !important;
}

/* Underline + hover styling for Blog link */
.new-navbar-banner-readbanner {
  text-decoration: underline;
  font-weight: 600;
  transition: color 0.3s ease;
}

.new-navbar-banner-readbanner:hover {
  color: #d3b3ff;
  /* light purple hover */
}

/* Optional shimmer keyframes */
@keyframes shimmerHighlight {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}


/* Animation keyframes */
@keyframes shimmerHighlight {
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 200% 0;
  }
}


@media (max-width: 550px) {
  .navbar-new-banner {
    width: 100%;
    background: black;
    text-align: center;
    padding: 5px 12px;
    font-weight: 600;
    font-size: 15px;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 1000;
    line-height: 12px;
  }

  .container {
    padding: 7px;
  }

}
</style>