<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <NuxtLink class="navbar-brand" to="/#">
                        <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695208/logo_m8wwsx.svg" alt="logo">
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
                            <li class="nav-item"><a href="/#" class="toggle nav-link">Home</a>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Features</a>
                                <ul class="dropdown-menu">
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
                                            Localized Deal Documents
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>


                            <li class="nav-item"><a href="/subscriptions" class="toggle nav-link">Subscriptions</a>
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
                                        <NuxtLink to="/ebooks" class="nav-link">Ebook</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="others-option">
                        <NuxtLink to="/demo" class="default-btn">Request a Demo</NuxtLink>
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