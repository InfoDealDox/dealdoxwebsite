<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <router-link class="navbar-brand" to="/#">
                        <img src="../assets/images/logo.svg" alt="logo">
                        <!-- <img src="../../assets/images/black-logo.png" alt="logo"> -->
                    </router-link>

                    <div class="navbar-toggler" @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="/" class="toggle nav-link">Home</a>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Features</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/services-cpq" class="nav-link">CPQ</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/cpq-integrations" class="nav-link">Integration</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/quoting-software" class="nav-link">Automated Quotations
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/approval-software" class="nav-link">Quick
                                            Approvals</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/localized-deal-documents" class="nav-link">
                                            Localized Deal Documents
                                        </router-link>
                                    </li>
                                </ul>
                            </li>


                            <li class="nav-item"><a href="/subscriptions" class="toggle nav-link">Subscriptions</a>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Company</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/our-team" class="nav-link">Our Team</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/contact-us" class="nav-link">Get In Touch</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Resources</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/blogs" class="nav-link">Blogs</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/success-stories" class="nav-link">Success Stories</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/glossary" class="nav-link">Glossary</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/ebook" class="nav-link">Ebook</router-link>
                                    </li>
                                </ul>
                            </li>

                            <!-- <li class="nav-item">
                                <router-link to="/demo" class="nav-link">Request a Demo</router-link>
                            </li> -->
                            <!-- <div class="others-option">
                                <router-link to="/sign-in" class="default-btn">Login</router-link>
                            </div> -->
                        </ul>
                    </div>

                    <div class="others-option">
                        <router-link to="/demo" class="default-btn">Request a Demo</router-link>
                    </div>
                    <!-- <div class="others-option">
                        <router-link to="/SignIn" class="default-btn">Login</router-link>
                    </div> -->
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