<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695208/logo_m8wwsx.svg"
                            alt="Dealdox_Logo">
                    </NuxtLink>

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
                                                <NuxtLink to="/localized-deal-documents" class="nav-link">
                                                    Multilingual Documents
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
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/our-team" class="nav-link">Our Team</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/contact-us" class="nav-link">Get In Touch</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Resources</a>
                                <ul class="dropdown-menu">
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
                                <NuxtLink to="/contact-us" class="toggle nav-link">Contact Us</NuxtLink>
                            </li>

                        </ul>
                    </div>

                    <div class="others-option">
                       
                            <button class="default-btn" @click="sendForm">Get a Demo</button>
                     

                    </div>






                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingNavbar',
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
    props: {
    demoFormRef: {
      type: Object,
      required: true
    }
  },
  methods: {
    sendForm() {
      // Scroll to the demoForm component using the passed prop
      const demoForm = this.demoFormRef;

      
      if (demoForm) {
        demoForm.$el.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log("demoForm is undefined");
      }
    }
  }
}
</script>