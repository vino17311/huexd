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

            <UForm :schema="ContactvalidationSchema" :state="formState" @submit="handleFormSubmit">
              <UFormGroup name="firstName" label="First Name">
                <UInput type="text" v-model="formState.firstName" class="ui_input"></UInput>
              </UFormGroup>

              <UFormGroup name="lastName" label="Last Name">
                <UInput type="text" v-model="formState.lastName" class="ui_input"></UInput>
              </UFormGroup>

              <UFormGroup name="email" label="Email">
                <UInput type="email" v-model="formState.email" class="ui_input"></UInput>
              </UFormGroup>

              <UFormGroup name="phone" label="Phone Number">
                <UInput type="text" v-model="formState.phone" class="ui_input"></UInput>
              </UFormGroup>

              <UFormGroup name="reasonForEnquiry" label="Reason for Enquiry">
                <USelect v-model="formState.reasonForEnquiry" :options="enquiryOptions" class="ui_select"></USelect>
              </UFormGroup>

              <UFormGroup name="message" label="Message">
                <UTextarea type="text" v-model="formState.message" class="ui_input"></UTextarea>
              </UFormGroup>

              <UButton class="mt-4" type="submit">SUBMIT</UButton>
            </UForm>
          </UCard>
        </UContainer>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup lang="ts">
//@ts-ignore
import { ref } from 'vue';
//@ts-ignore
import { z } from 'zod'
//@ts-ignore
import type { FormSubmitEvent } from '#ui/types'
import { ContactvalidationSchema } from "~/schemas/contactSchema";

const formState = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  reasonForEnquiry: '',
  message: '',
});

const enquiryOptions = [
  { value: '', text: 'Select a reason' },
  { value: 'Employment reference request', text: 'Employment reference request' },
  { value: 'Complaint', text: 'Complaint' },
  { value: 'Payment', text: 'Payment' },
  { value: 'Employer enquiry', text: 'Employer enquiry' },
  { value: 'Candidate enquiry', text: 'Candidate enquiry' },
  { value: 'other', text: 'other' }
];

function handleFormSubmit(event: FormSubmitEvent<any>) {
  const formData = event.data as z.output<typeof ContactvalidationSchema>;

  console.log(formData);
}


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
</style>
