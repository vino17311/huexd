<template>
  <Header></Header>
  <section class="py-4">
    <div class="container hero4__top">
      <h2 class="flex flex-col hero__first__heading text-3xl md:text-6xl lg:text-6xl xl:text5xl mb-4">
        <span class="block md:inline">Chat to us today to see</span>
        <span class="block md:inline">how we can help.</span>
      </h2>
    </div>

    <section class="container mx-auto mt-4 mb-4">
      <div class="section_one_img_container">
        <img class="section_one_img_1"
          src="https://www.netsolutions.com/assets/images/cloud-computing-hub-banner-img-2.webp" alt="Landscape Image">
      </div>
    </section>
  </section>
  <section>
    <div class="container row">
      <div class="col-lg-4 col-md-0 col-sm-0 col-xs-0"></div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
        <UContainer class="h-screen">
          <UCard class="w-full sm:w-full md:w-full lg:w-[900px]">
            <template>
              <h2 class="mb-7">Message to us</h2>
            </template>

            <form ref="contactForm" @submit.prevent="handleFormSubmit">
              <UFormGroup name="firstName" label="First Name">
                <UInput type="text" v-model="formState.firstName" class="ui_input" @blur="validateFirstName">
                </UInput>
                <p v-if="formState.errors.firstName" class="error">{{ formState.errors.firstName }}</p>
              </UFormGroup>

              <UFormGroup name="lastName" label="Last Name">
                <UInput type="text" v-model="formState.lastName" class="ui_input" @blur="validateLastName">
                </UInput>
                <p v-if="formState.errors.lastName" class="error">{{ formState.errors.lastName }}</p>
              </UFormGroup>

              <UFormGroup name="email" label="Email">
                <UInput type="email" v-model="formState.email" class="ui_input" @blur="validateEmail">
                </UInput>
                <p v-if="formState.errors.email" class="error">{{ formState.errors.email }}</p>
              </UFormGroup>

              <UFormGroup name="phone" label="Phone Number">
                <UInput type="text" v-model="formState.phone" class="ui_input" @blur="validatePhone">
                </UInput>
                <p v-if="formState.errors.phone" class="error">{{ formState.errors.phone }}</p>
              </UFormGroup>

              <UFormGroup name="reasonForEnquiry" label="Reason for Enquiry">
                <USelect v-model="formState.reasonForEnquiry" :options="enquiryOptions" class="ui_select"></USelect>
                <p v-if="formState.errors.reasonForEnquiry" class="error">{{ formState.errors.reasonForEnquiry }}</p>
              </UFormGroup>

              <UFormGroup name="message" label="Message">
                <UTextarea type="text" v-model="formState.message" class="ui_input" minlength="5" required
                  @blur="validateMessage">
                </UTextarea>
                <p v-if="formState.errors.message" class="error">{{ formState.errors.message }}</p>
              </UFormGroup>

              <UButton class="mt-4" type="submit">SUBMIT</UButton>
            </form>
          </UCard>
        </UContainer>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showMessage" class="popup-message">
        {{ messageContent }}
      </div>
    </transition>
  </section>

  <Footer></Footer>
</template>


<script setup lang="ts">
//@ts-ignore
import { ref } from 'vue';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  reasonForEnquiry: '',
  message: '',
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reasonForEnquiry: '',
    message: ''
  }
};

const formState = ref({ ...initialFormState });

const showMessage = ref(false);
const messageContent = ref('');

const enquiryOptions = [
  { value: '', text: 'Select a reason' },
  { value: 'Employment reference request', text: 'Employment reference request' },
  { value: 'Complaint', text: 'Complaint' },
  { value: 'Payment', text: 'Payment' },
  { value: 'Employer enquiry', text: 'Employer enquiry' },
  { value: 'Candidate enquiry', text: 'Candidate enquiry' },
  { value: 'other', text: 'other' }
];

const validateFirstName = () => {
  if (!formState.value.firstName) {
    formState.value.errors.firstName = 'First Name is required.';
  } else if (!/^[a-zA-Z']{4,}$/.test(formState.value.firstName)) {
    formState.value.errors.firstName = 'First Name must be at least 4 characters and contain only letters.';
  } else {
    formState.value.errors.firstName = '';
  }
};

const validateLastName = () => {
  if (!formState.value.lastName) {
    formState.value.errors.lastName = 'Last Name is required.';
  } else if (!/^[a-zA-Z']{3,}$/.test(formState.value.lastName)) {
    formState.value.errors.lastName = 'Last Name must be at least 3 characters and contain only letters.';
  } else {
    formState.value.errors.lastName = '';
  }
};

const validateEmail = () => {
  if (!formState.value.email) {
    formState.value.errors.email = 'Email is required.';
  } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formState.value.email)) {
    formState.value.errors.email = 'Invalid email format.';
  } else {
    formState.value.errors.email = '';
  }
};

const validatePhone = () => {
  if (!formState.value.phone) {
    formState.value.errors.phone = 'Phone Number is required.';
  } else if (!/^(\+91[\-\s]?)?[0]?[789]\d{9}$/.test(formState.value.phone)) {
    formState.value.errors.phone = 'Invalid phone number format.';
  } else {
    formState.value.errors.phone = '';
  }
};

const validateMessage = () => {
  if (!formState.value.message) {
    formState.value.errors.message = 'Message is required.';
  } else if (formState.value.message.length < 5) {
    formState.value.errors.message = 'Message must be at least 5 characters.';
  } else {
    formState.value.errors.message = '';
  }
};

const validateForm = () => {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();
  validateMessage();
  return !Object.values(formState.value.errors).some(error => error !== '');
};

const googleScriptURL = 'https://script.google.com/macros/s/AKfycbzNKlZ6Zd6DLTh-uTWRJXUEfvktMPp2H42qpG3jbfcgAs6Qs1RdOfg32mgaf5NY4kpBXA/exec';

const handleFormSubmit = async (event: Event) => {
  event.preventDefault();

  if (!validateForm()) {
    console.log('Form validation failed.');
    return;
  }

  const formData = new FormData();
  formData.append('firstName', formState.value.firstName);
  formData.append('lastName', formState.value.lastName);
  formData.append('email', formState.value.email);
  formData.append('phone', formState.value.phone);
  formData.append('reasonForEnquiry', formState.value.reasonForEnquiry);
  formData.append('message', formState.value.message);

  try {
    const response = await fetch(googleScriptURL, {
      method: 'POST',
      body: formData,
    });

    const textResponse = await response.text();
    if (textResponse.includes('successfully sent')) {
      console.log('Data sent to Google Sheets:', textResponse);
      displayPopupMessage(textResponse);
      resetForm();
    } else {

      try {
        const result = JSON.parse(textResponse);
        console.log('Data sent to Google Sheets:', result);
        displayPopupMessage('Your message was successfully add to the Google Sheets database!');
        resetForm();
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError, 'Response:', textResponse);
        displayPopupMessage('Error parsing JSON response. Please try again.');
      }
    }
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    displayPopupMessage('Error sending data. Please try again.');
  }
};

const resetForm = () => {
  formState.value = { ...initialFormState };
};

const displayPopupMessage = (message: string) => {
  messageContent.value = message;
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 4000);
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

.hero__first__heading {
  font-family: Manrope;
  color: #051AD0;
}

.section_one_img_container {
  width: 100%;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  overflow: hidden;
}

.section_one_img_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popup-message {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #44c767;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
