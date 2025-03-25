<template>
    <div>
        <Navbar class="navbar-style-two" />

        <div class="mobileapp-dealdox-container">

            <div class="mobileapp-main-top-container">
                <div class="mobileapp-main-top-left">
                    <h1 class="DealDox-CPQ-Mobile">DealDox CPQ Mobile App</h1>

                    <small class="On-the-Go-Efficiency">Effortlessly
                        Generate Quotations Anytime, Anywhere. </small>

                    <div class="mobileapp-main-top-images-container">
                        <div @click="navigateToAppStore" style="cursor: pointer;">
                            <img src="../assets/images/AppStore.png" alt="DealDox App Store" class="mobile-app-images-todownload">
                        </div>
                        <div @click="navigateToPlayStore" style="cursor: pointer;">
                        <img src="../assets/images/Playstore_QR.png" alt="DealDox Play Store" class="mobile-app-images-todownload">
                        </div>
                    </div>
                </div>

                <div class="MobileAppHeaderImage-image">
                    <img src="../assets/images/MobileAppHeaderImage.webp" alt="MobileAppHeaderImage"
                        class="MobileAppHeaderImage-imaging">

                </div>
            </div>
            <div class="mobileapp-left-container">
                <div class="mobileapp-left-content">
                    <h2 class="mobileapp-heading">Quote Generation</h2>
                    <small>Users can quickly create, edit, and send quotes directly from their mobile
                        devices, streamlining the sales process.</small>
                </div>
                <div class="mobileapp-right-image">
                    <img src="../assets/images/InstantQuoteCreation.jpg" alt="Instant Quote Creation"
                        class="mobile-app-image">
                </div>
            </div>

            <div class="mobileapp-left-container">
                <div class="mobileapp-right-image" style="justify-content: center;">
                    <img src="../assets/images/PreciseQuoeGeneration.png" alt="Precise Quote Generation"
                        class="mobile-app-image">
                </div>
                <div class="mobileapp-left-content">
                    <h2 class="mobileapp-heading">Real-Time Data Access</h2>
                    <small>Access to real-time pricing, product information, and customer data ensures that users have
                        the latest information when creating quotes. </small>
                </div>

            </div>
            <div class="mobileapp-left-container">

                <div class="mobileapp-left-content">
                    <h2 class="mobileapp-heading">Document Management</h2>
                    <small>Users can easily upload, store, and manage important documents, making it simple to access
                        contracts and agreements.</small>
                </div>
                <div class="mobileapp-right-image">
                    <img src="../assets/images/EffortlessDocumentManagement.png" alt="Effortless Document Management"
                        class="mobile-app-image">
                </div>

            </div>
        </div>

        <DealDoxFooter />
    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: "MobileApp",

    components: {
        Navbar,
        DealDoxFooter
    },

    methods: {
        navigateToAppStore() {
            window.open('https://apps.apple.com/in/app/dealdox/id6737757798', '_blank');
        },
        navigateToPlayStore() {
            window.open('https://play.google.com/store/apps/details?id=com.dealdox.io.dealdox', '_blank');
        },
    },
    head: {
        title: 'DealDox CPQ Mobile App | Effortless Quote Generation Anytime, Anywhere',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Generate, edit, and send quotes instantly with the DealDox CPQ mobile app. Access real-time pricing, product details, and customer data—anytime, anywhere.' },
            { hid: 'keywords', name: 'keywords', content: 'DealDox CPQ, mobile quote generation, instant quoting app, sales automation, real-time pricing, CPQ mobile app, sales quoting software, accurate quotes, business quoting tool, DealDox app, generate quotes on mobile' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/mobile-app' }
        ],
    },
}


</script>

<style>
.mobileapp-dealdox-container {
    margin: auto;
    max-width: 1320px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 30px;

}

.mobileapp-left-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    gap: 40px;
}

.mobileapp-left-content {
    text-align: left;
    width: 50%;
}

.mobileapp-right-image {
    width: 50%;
    display: flex;
    justify-content: right;
    align-items: center;
}

.mobileapp-left-content {
    display: flex;
    flex-direction: column;
}

.mobileapp-heading {
    font-weight: 500;
    padding: 6px 0px;
    font-family: 'Montserrat';
}

.mobile-app-image {
    width: 70%;
    height: 80%;
    border-radius: 10px;
}

.mobile-app-image-header {
    width: 50%;
}

.MobileAppHeaderImage-image {
    width: 50%;
}


@keyframes appear {
    from {
        opacity: 0.5;
        scale: 0.5;
    }

    to {
        opacity: 1;
        scale: 1;
    }

}



.mobileapp-left-content,
.mobileapp-right-image {
    animation: appear ease-in-out;
    animation-timeline: view();
    animation-range: entry cover 40%;
}


.mobileapp-main-top-container {
    display: flex;
    gap: 30px;
    padding: 0px 20px;
    background-color: aliceblue;
    width: 100%;
    height: 440px;

}

.mobileapp-main-top-left {
    width: 50%;
}

.mobileapp-main-top-images-container {
    display: flex;
    gap: 20px;
}

.mobile-app-images-todownload {
    width: 200px;
    height: 92px;
    border-radius: 10px;
    margin: 25px 0px;

}

.mobileapp-main-header-content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.mobileapp-main-top-left {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}

.DealDox-CPQ-Mobile {
    font-size: 37px;
    font-weight: 600;
    font-family: 'Montserrat';
}

.On-the-Go-Efficiency {
    font-size: 22px;
    font-family: "Roboto", serif;
}


.MobileAppHeaderImage-imaging {
    width: 100%;
    border-radius: 10px;
    margin: 10px auto;
    height: 96%;
}


@media (max-width: 768px) {
    .mobileapp-main-top-container {
        flex-direction: column;
    }

    .mobileapp-main-top-left {
        width: 100%;
    }

    .mobileapp-dealdox-container {
        margin-top: 44px;
    }

    .mobileapp-main-top-left {
        align-items: center;
    }

    .DealDox-CPQ-Mobile {
        font-size: 25px;
    }

    .On-the-Go-Efficiency {
        font-size: 13px;
        text-align: center;
    }

    .mobile-app-images-todownload {

        height: 100px;
        width: 149px;
    }

    .mobile-app-image {
        width: 100%;
    }

    .mobileapp-main-top-container {
        gap: 15px;
        height: auto;
    }

    .MobileAppHeaderImage-image {
        width: 100%;
    }

    .mobileapp-main-top-left {
        padding: 20px 0px;
    }

    .MobileAppHeaderImage-imaging {
        margin-top: -50px;
    }
}
</style>
