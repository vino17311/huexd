<template>
  <div>
    <!-- Header -->
    <header class="bg-gray-100">
      <div class="container header-container">
        <div class="flex h-16">
          <div class="flex items-center flex-1">
            <a href="/" alt="home page"><img src="https://www.huexd.com/images/logo-blue.svg" class="h-8"
                alt="Logo" /></a>
            <!-- <a href="/technologies">Human Solutions</a>
            <a href="/managed-solutions">IT Solutions</a>
            <a href="/about">About</a>
            <a href="/contact-us">Contact</a> -->

          </div>
          <div class="flex items-center justify-end flex-1">
            <p class="m-0 align-middle cursor-pointer" @click="toggleMenu">Menu</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Full View Section -->
    <section v-if="isMenuOpen" class="fixed inset-0 bg-white flex justify-center overflow-hidden">
      <div class="container overflow-x-auto">
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-4 pb-5">
          <div class="md:col-span-1">
            <div class="menu-header-title">
              <h1 class="font-bold text-3xl md:text-6xl lg:text-6xl xl:text-7xl">
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
        <div class="grid grid-cols-1 gap-y-4 mt-5 pt-5 md:grid-cols-none">
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

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when full view section is open
      } else {
        document.body.style.overflow = ''; // Re-enable scrolling when full view section is closed
      }
    }
  }
};
</script>

<style scoped>
.header-container {
  height: 65px;
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
  font-weight: 400
}
</style>
