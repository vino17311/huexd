<template>
  <Header />
  <Nuxt />
  <section class="section_hero">
    <div class="div-block-197 w-clearfix">
      <div class="hero4__top">
        <h2 class="hero4__header">Chat to us today to see <br>how we can help.</h2>
      </div>
      <div class="hero4__bottom ">
        <div class="hero4__left">
          <p class="hero4__description">Tell us a bit about yourself, and we’ll tell you a lot more about us.</p>
        </div>
      </div>
      <div class="hero4__imagecontainer"><img
          src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          loading="eager" sizes="(max-width: 1919px) 90vw, 1400px" alt="About Ruul" class="hero4__img">

      </div>
    </div>
  </section>
  <div>
    <form>
      <h1 class="text-4xl font-bold mb-2  text-customRed">Message Us</h1>
      <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="Register"
        @submit="submitHandler" :actions="false">

        <div class="flex gap-4">
          <FormKit type="text" name="First Name" label="First Name" placeholder="Enter your First Name"
            validation="required" />
          <FormKit type="text" name="Last Name" label="Last Name" placeholder="Enter your Last Name"
            validation="required" />
        </div>
        <div class="flex gap-4">
          <FormKit type="email" name="email" label="Email" placeholder="Enter your Email" validation="required" />
          <FormKit type="tel" label="Phone number" placeholder="xxx-xxx-xxxx" validation="optional" />
        </div>
        <div classes="select-option">
          <FormKit type="select" label="Reason for your enquiry" name="country" :options="[
            'select  an option',
            'Employment reference request',
            'Complaint',
            'Payment',
            'Employment Enquiry',
            'Candidate Enquiry',
            'Other',
          ]" />
        </div>



        <FormKit name="Message" type="textarea" label="Message" help="Please describe your issue in detail."
          validation="required|length:5,500" />
        <div>
          <FormKit type="submit" label="Submit" classesx="bg-customRed text-white" />
        </div>
      </FormKit>
      <div v-if="submitted">
        <h2 class="text-xl text-green-500">Message sent successfully!</h2>
      </div>

    </form>
  </div>
  <Footer />
  <Nuxt />

</template>


<script>
import Header from '~/components/Header.vue';
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Add Tailwind CSS classes here if needed */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: "Manrope", sans-serif;
}



.hero4__imagecontainer {
  float: left;
  aspect-ratio: auto;
  padding-top: 30px;
  position: relative;

}

.w-clearfix:before,
.w-clearfix:after {
  content: " ";
  grid-area: 1/1/2/2;
  display: table
}

.w-clearfix:after {
  clear: both
}

.div-block-197 {
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto
}

.hero4__top {
  display: flex
}

.hero4__bottom {
  justify-content: space-between;
  align-items: center;
  display: flex
}

.hero4__header {
  color: #003e39;
  letter-spacing: -1.8px;
  text-transform: uppercase;
  flex: 1;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 30px;
  font-size: 60px;
  font-weight: 800;
  line-height: 100%
}

.hero4__description {
  color: var(--dark-slate-grey-2);
  text-align: left;
  text-shadow: none;
  max-width: 540px;
  margin-bottom: 0;
  line-height: 150%
}

.section_hero {
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 5%;
  display: block;
  overflow: hidden
}

.hero4__header-copy {
  color: #003e39;
  letter-spacing: -1.8px;
  text-transform: uppercase;
  flex: 1;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 30px;
  font-size: 60px;
  font-weight: 800;
  line-height: 100%
}

.div-block-197 {
  max-width: 1330px
}

.hero4__header {
  width: 100%
}

.hero4__header-copy {
  width: 100%
}

.div-block-197 {
  max-width: 1400px
}

.hero4__header {
  width: 100%;
  font-size: 72px
}

.hero4__header-copy {
  width: 100%;
  font-size: 72px
}

.hero4__header {
  width: 100%
}

.hero4__header-copy {
  width: 100%;
  padding-bottom: 20px
}

.hero4__header {
  text-align: left
}

.hero4__description {
  padding-right: 30px
}

.section_hero {
  padding-top: 40px
}

.hero4__header-copy {
  text-align: left
}

.hero4__bottom {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  flex-flow: column;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-items: flex-start;
  display: flex
}

.hero4__header {
  align-self: auto;
  padding-bottom: 20px;
  font-size: 48px
}

.hero4__description {
  font-size: 16px;
  line-height: 175%
}

.hero4__img {
  object-fit: cover;
  border-radius: 10px;
  height: 250px
}

.section_hero {
  padding-top: 40px;
  padding-bottom: 60px
}

.hero4__imagecontainer {
  float: none;
  height: auto;
  overflow: hidden
}

.hero4__header-copy {
  align-self: auto;
  padding-bottom: 20px;
  font-size: 48px
}

.hero4__img {
  object-fit: cover;
  height: 390px;
  overflow: visible;
  width: 100%;
}

.section_hero {
  padding-bottom: 60px
}

.hero4__imagecontainer {
  float: none;
  clear: none;
  border-radius: 10px;
  height: auto;
  margin-top: 30px;
  padding-top: 0;
  position: static;
  overflow: hidden
}
</style>