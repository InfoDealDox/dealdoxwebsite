<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="gdrp-top-container">
            <div class="gdrp-top-flex">
                <span class="GDPR-Compliant">DealDox.io is a GDPR Compliant </span>
                <small class="gdpr-small-content">At DealDox, protecting customer data and ensuring privacy are our top
                    priorities. We fully adhere
                    to
                    the General Data Protection Regulation (GDPR) to safeguard the privacy rights of EU individuals.
                </small>
                <small class="gdpr-small-content">
                    The GDPR applies to companies processing personal data of EU residents, including those with a
                    presence
                    in the EU or targeting the European market.
                </small>
                <small class="gdpr-small-content">
                    We are dedicated to helping our customers meet their GDPR compliance requirements.
                </small>
            </div>
            <div class="gdrp-top-flex">
                <span class="gdpr-mean-heading">What does GDPR mean?</span>
                <small class="gdpr-small-content">The General Data Protection Regulation (GDPR) is an EU law that
                    protects the privacy and personal
                    data of individuals within the EU. It gives individuals more control over their data and requires
                    organizations to be transparent, obtain consent, and ensure data security. The GDPR applies to any
                    company processing data of EU residents, regardless of location, and non-compliance can result in
                    heavy
                    fines. </small>


            </div>
            <div class="gdrp-top-flex">
                <span class="gdpr-mean-heading">Learn more about GDPR </span>
                <small class="gdpr-small-content">For additional information visit <a
                        href="https://commission.europa.eu/law/law-topic/data-protection_en" class="european-union">
                        wesbite of European Union</a> </small>
            </div>
            <div class="gdrp-top-flex">
                <span class="gdpr-mean-heading">Whom to contact? </span>
                <small class="gdpr-small-content">If you have any queries regarding GDPR, feel free to reach us at <a
                        href="mailto:info@dealdox.io" class="european-union">info@dealdox.io</a></small>
            </div>

        </div>

        <DealDoxFooter />
    </div>


</template>

<script>

import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: "gdpr",

    components: {
        Navbar,
        DealDoxFooter
    }
}

</script>

<style>
.gdrp-top-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #f7f9fa;
    ;
    padding: 40px;
    margin: auto;
    margin-top: 110px;
    max-width: 1330px;
    
}

.gdrp-top-flex {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.GDPR-Compliant {
    font-size: 32px;
    font-weight: 800;
    padding: 20px 3px;
}

.gdpr-mean-heading {
    font-size: 20px;
    font-weight: 600;
}

.gdpr-small-content {
    font-size: 17px;
}


.european-union {
    font-weight: 600;
    color: black;

}

.european-union:hover {
    cursor: pointer;
    color: #715cf3;

}

@media (max-width: 768px) {
    .gdrp-top-container {
        margin-top: 80px;
        padding: 13px;
    }

    .GDPR-Compliant {
        text-align: center;
        font-size: 24px;
        font-weight: 800;
        padding: 10px 3px;
    }

    .gdpr-small-content {
        font-size: 14px;
        text-align: center;
    }

    .gdpr-mean-heading {
        text-align: center;
    }
}
</style>