<template>
    <div class="app-download-area pt-70">
        <div class="container">
            <div class="app-download-inner bg-gray">
                <div class="contact-page-header-form-app-download-inner">




                </div>
            </div>
        </div>
    </div>
</template>

<script>
// new Vue({
//     el: '#contact-form',
//     data: {
//         formData: {
//             first_name: '',
//             last_name: '',
//             phone: '',
//             email: '',
//             company: '',
//             country: '',
//             message: '',
//             agree_terms: true,
//             phoneNumber: '',
//             maxPhoneNumberLength: 15,
//             phoneValidationMessage: 'Please enter exactly 15 numeric digits',
//         },
//         errors: {}
//     },
// });

// import Vue from 'vue'

export default {
    name: 'AppDownload',

    // methods: {

    //     validatePhoneNumber() {
    //   // Remove any non-numeric characters from the phone number
    //   this.phoneNumber = this.phoneNumber.replace(/\D/g, '');
    // },
    // allowOnlyNumbers(event) {
    //   // Allow only numeric digits (0-9) in the input field
    //   const charCode = event.which ? event.which : event.keyCode;
    //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //     event.preventDefault();
    //   }
    // },

    //     validateForm() {
    //         this.errors = {};

    //         if (!this.formData.first_name) {
    //             this.errors.first_name = 'First Name is required.';
    //         }

    //         if (!this.formData.last_name) {
    //             this.errors.last_name = 'Last Name is required.';
    //         }

    //         if (!this.formData.phoneNumber) {
    //             this.errors.phoneNumber = 'Phone is required.';
    //         }

    //         if (!this.formData.email) {
    //             this.errors.email = 'Email is required.';
    //         } else if (!this.isValidEmail(this.formData.email)) {
    //             this.errors.email = 'Please enter a valid email address.';
    //         }

    //         if (!this.formData.company) {
    //             this.errors.company = 'Company is required.';
    //         }

    //         if (!this.formData.country) {
    //             this.errors.country = 'Country is required.';
    //         }

    //         if (!this.formData.message) {
    //             this.errors.message = 'Message is required.';
    //         }

    //         if (!this.formData.agree_terms) {
    //             this.errors.agree_terms = 'You must agree to the Terms of Use.';
    //         }

    //         return Object.keys(this.errors).length === 0;
    //     },
    //     isValidEmail(email) {
    //         // You can implement your own email validation logic here.
    //         // For a simple example, let's check if the email contains '@'.
    //         return email.includes('@');
    //     },
    //     onSubmit() {
    //         if (this.validateForm()) {
    //             // Submit the form
    //             // For example, you can use axios or fetch to submit the form data to the server.
    //             // You can also redirect to the 'thank-you' page after successful submission.
    //             //   alert('Form submitted successfully!');
    //             // this.$refs.contactForm.submit(); // Uncomment this line if you want to submit the form using HTML form submission.
    //         }
    //     }
    // },

}
</script>