<template>
  <div>
    <!-- Header -->
    <header class="bg-gray-100">
      <div class="container header-container">
        <div class="flex h-16">
          <div class="flex items-center flex-1">
            <a href="/" alt="home page">
              <img src="https://www.huexd.com/images/logo-blue.svg" class="header-logo" alt="Logo" />
            </a>

            <div class="header-point">
              <ul class="flex gap-5 text-nowrap m-0 pl-3 ">
                <li @click="toggleDropdown('human-solutions')">Human Solutions</li>
                <a class="a-tag" href="/about">
                  <li>About Us</li>
                </a>
                <a class="a-tag" href="/contact-us">
                  <li>Contact Us</li>
                </a>
                <li @click="toggleDropdown('it-solutions')">IT Solutions</li>
              </ul>
            </div>
          </div>
          <div class="flex items-center justify-end flex-1">
            <p class="m-0 align-middle cursor-pointer menu-button" @click="toggleMenu">
              <Icon name="mi:menu" class=" w-10 h-10" />
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Drop down -->
    <section v-if="isDropdownOpen" class="dropdown-overlay" ref="dropdownCloseRef">
      <div class="dropdown-content" :class="{ open: isDropdownOpen }" :key="dropdownKey">
        <div v-if="currentDropdown === 'it-solutions'" class="content-area it-solutions-content">
          <div class="w-full md:w-1/2 flex justify-center items-center flex-col content-left"
            style="background-color: #fbf5e7;">
            <a class="it-solutions-1" href="/technologies">
              <h2>IT Solutions</h2>
            </a>
            <p class="p-tag">IT solutions are sets of services, software and designed to help
              businesses.</p>
          </div>

          <div class="w-full md:w-1/2 content-right" style="background-color: #f6f8ff;">
            <ul>
              <li>
                <a href="/technologies/software-development">Software & Development</a>
                <p>Customized software solutions for your business.</p>
              </li>
              <li>
                <a href="/technologies/sap">ERP</a>
                <p>Streamline your processes with our ERP solutions.</p>
              </li>
              <li>
                <a href="/technologies/cloud-infrastructure">Cloud & Infrasctructure</a>
                <p>Secure and scalable cloud solutions for your needs.</p>
              </li>
              <li>
                <a href="/technologies/business-applications">Bussiness-Applications</a>
                <p>Customized software solutions for your business.</p>
              </li>
              <li>
                <a href="/technologies/cyber-security">Cyber & Security</a>
                <p>Comprehensive cyber security services.</p>
              </li>
              <li>
                <a href="/technologies/data-analytics">Data & Analytics</a>
                <p>Protect your data with our security solutions.</p>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="currentDropdown === 'human-solutions'" class="content-area human-solutions-content">
          <div class="w-full md:w-1/2 flex justify-center items-center flex-col content-left"
            style="background-color: #fbf5e7;">
            <a class="it-solutions-1" href="/technologies">
              <h2>Human Solutions</h2>
            </a>
            <p class="p-tag">Human solutions are sets of services, software and designed to help
              businesses.</p>
          </div>

          <div class="w-full md:w-1/2 content-right" style="background-color: #f6f8ff;">
            <ul>
              <li>
                <a href="/technologies/software-development">contract role</a>
                <p>Customized software solutions for your business.</p>
              </li>
              <li>
                <a href="/technologies/sap">Permanant Hire</a>
                <p>Streamline your processes with our ERP solutions.</p>
              </li>
              <li>
                <a href="/technologies/cloud-infrastructure">HR resources</a>
                <p>Secure and scalable cloud solutions for your needs.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Veiw Section -->
    <section v-if="isMenuOpen" class="popup-overlay">
      <div class="popup-content">
        <div class="header-container">
          <div class="flex h-16">
            <div class="flex items-center flex-1">
              <img src="https://www.huexd.com/images/logo-blue.svg" class="h-8" alt="Logo" />
            </div>
            <div class="flex items-center justify-end flex-1">
              <p class="m-0 align-middle cursor-pointer" @click="toggleMenu">
                <span class="block text-black text-5xl font-bold leading-none">×</span>
              </p>
            </div>
          </div>
        </div>
        <div class="content-area">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-4 pb-5">
            <div class="md:col-span-1">
              <div class="menu-header-title">
                <h1 class="font-bold sm:text-1xl md:text-6xl lg:text-6xl xl:text-6xl">
                  <span class="block md:inline">
                    We're here to help you with human & technology solutions.
                  </span>
                </h1>
              </div>
              <div class="menu-header-description">
                <p class="font-medium text-2xl md:text-4xl lg:text-5xl">
                  <span>Let's Collaborate.</span>
                </p>
              </div>
            </div>

            <div class="md:col-span-1 flex flex-col justify-between">
              <div class="our_expertise_menu">
                <p class="font-medium text-2xl md:text-4xl lg:text-5xl">
                  <span>expertise&nbsp;&nbsp;-&gt;</span>
                </p>
              </div>
              <div class="mt-auto">
                <div class="flex flex-col">
                  <a href="/">Home</a>
                  <a href="/technologies">Human Solutions</a>
                  <a href="/managed-solutions">IT Solutions</a>
                  <a href="/about">About us</a>
                  <a href="/contact-us">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-area">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span class="text-lg leading-relaxed">Say hey</span>
              <span class="leading-relaxed">info@huexd.com</span>
              <span class="leading-relaxed">+00 0000 0000</span>
            </div>
            <div class="flex justify-end items-end">
              <p class="mr-4">Facebook</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { ref, onMounted, onBeforeUnmount } from 'vue';
//@ts-ignore
import { onClickOutside } from '@vueuse/core'

const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const currentDropdown = ref(null);
const dropdownKey = ref(0);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const toggleDropdown = (dropdown: string) => {
  if (currentDropdown.value === dropdown) {
    isDropdownOpen.value = !isDropdownOpen.value;
  } else {
    //@ts-ignore
    currentDropdown.value = dropdown;
    isDropdownOpen.value = true;
  }
  dropdownKey.value++;

  if (isDropdownOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
  currentDropdown.value = null;
  document.body.style.overflow = '';
};

const handleClose = (event: KeyboardEvent) => {
  console.log("key close event");
  if (event.key === 'Escape') {
    closeDropdown()
  }
}
onMounted(() => {
  document.addEventListener('keyup', handleClose)
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleClose)
})

const dropdownCloseRef = ref(null);
onClickOutside(dropdownCloseRef, closeDropdown)

</script>


<style scoped>
* {
  font-family: Manrope;
}

.header-container {
  height: 75px;
}

.menu-header-title {
  font-family: Manrope;
  font-size: 64px;
  padding-bottom: 20px;
  font-weight: 800;
  line-height: 70.4px;
  text-align: left;
}

.menu-header-description {
  font-family: Manrope;
  font-size: 48px;
  font-weight: 400;
  line-height: 60px;
  text-align: left;
}

.menu-header-description>p>span {
  border-bottom: 1px solid #000;
  line-height: 0.8;
}

.our_expertise_menu {
  font-size: 48px;
  font-weight: 400;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: all 0.9s ease;
}

.popup-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 740px;
  height: 70%;
  margin-bottom: 30px;
  transform: translateY(20%);
  opacity: 0;
  animation: slideUp 0.5s forwards;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@keyframes slideUp {
  from {
    transform: translateY(20%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.content-area {
  flex: 1;
  overflow-y: hidden;
}

.footer-area {
  flex: 0 0 auto;
}

ul {
  list-style: none;
  padding: 30px;
  margin: 0;
}

.header-point ul li {
  cursor: pointer;
  color: #221E1E;

}

ul li:hover {
  text-decoration: none;
}

.menu-button {
  display: none;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .header-container ul {
    display: none;
  }
}

.a-tag {
  text-decoration: none;
  color: #000;
}

.it-solutions-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.it-solutions-content .content-left {
  text-align: center;
  padding: 20px;
}

.it-solutions-content .content-left h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.it-solutions-content .content-left h2:hover {
  color: rgb(7, 15, 230);
}

.it-solutions-content .content-left h2 {
  color: #000000;
}

.it-solutions-content .content-left p {
  font-size: 1.2em;
  color: #000;
}

.it-solutions-content .content-right ul {
  list-style: none;
  padding: 20px;
  margin: 0;
}

.it-solutions-content .content-right ul li {
  margin-bottom: 0.5em;
  padding: 5px;
}

.it-solutions-content .content-right ul li p {
  margin: 0 0 0.5em 0;
  font-size: 14px;
  line-height: 20px;
}

.it-solutions-content .content-right ul li a {
  text-decoration: none;
  color: #000000;
  letter-spacing: -.02em;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
}

.it-solutions-content .content-right ul li a:hover {
  text-decoration: none;
  color: rgb(7, 15, 230);
}

.p-tag {
  font-size: 14px;
  line-height: 20px;
  color: blue;
}

.it-solutions-1 {
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -.04em;
  text-decoration: none;
  color: #000;
}

.human-solutions-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.human-solutions-content .content-left {
  text-align: center;
  padding: 20px;
}

.human-solutions-content .content-left h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.human-solutions-content .content-left h2:hover {
  color: rgb(7, 15, 230);
}

.human-solutions-content .content-left h2 {
  color: #000000;
}

.human-solutions-content .content-left p {
  font-size: 1.2em;
  color: #000;
}

.human-solutions-content .content-right ul {
  list-style: none;
  padding: 20px;
  margin-top: 100px !important;
}

.human-solutions-content .content-right ul li {
  margin-bottom: 0.5em;
  padding: 5px;
}

.human-solutions-content .content-right ul li p {
  margin: 0 0 0.5em 0;
  font-size: 14px;
  line-height: 20px;
}

.human-solutions-content .content-right ul li a {
  text-decoration: none;
  color: #000000;
  letter-spacing: -.02em;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
}

.human-solutions-content .content-right ul li a:hover {
  text-decoration: none;
  color: rgb(7, 15, 230);
}

.p-tag {
  font-size: 14px;
  line-height: 20px;
  color: blue;
}

.human-solutions-1 {
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -.04em;
  text-decoration: none;
  color: #000;
}


.dropdown-content {
  position: fixed;
  top: 10%;
  left: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  padding: 0px;
  overflow: hidden;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0;
  visibility: hidden;
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 740px;
  height: 70%;
  margin-bottom: 30px;
  transform: translateY(20%);
  opacity: 0;
  animation: slideUp 0.5s forwards;
  display: flex;
  flex-direction: column;
}

.dropdown-content.open {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

.dropdown-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-content ul li {
  cursor: pointer;
  padding: 10px 0;
}

.dropdown-content ul li:last-child {
  border-bottom: none;
}

.header-logo {
  height: 12rem;
}
</style>
