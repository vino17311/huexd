<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-3xl md:text-6xl lg:text-6xl xl:text-5xl">
                <span class="block md:inline">Power your</span>
                <span class="block md:inline">S/4HANA with HUEXD.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">The key to a successful S/4 transformation is finding the right people with
                the right skillset.</p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img"
                    src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/enterprise/solutions/sap-s4-hana-services.jpg"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb" class="overflow-x-auto">
                <ol class="flex	c-breadcrumb whitespace-nowrap">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies/sap">SAP</a></li>
                    <li class="c-breadcrumb__item --current">SAP S/4Hana</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Evolve into the S/4HANA era with confidence.</span>
                </h2>
                <p dir="ltr"><b>As the deadline looms for S/4HANA, it’s time to get your teams ready for tomorrow.
                        Sourcing talent that can take your SAP infrastructure into a cloud-based future is no easy
                        feat.</b></p>
                <p>We know it’s a complex, lengthy, and costly move to make. So you can’t afford mediocre talent. You
                    need a strong team who can ensure your migration is flawless. Measured. Strategic.</p>
                <p>Talent that can cover every cloud offering. Talent that fits in with your team. Talent that can help
                    you prove S/4HANA was a worthwhile investment to your superiors.</p>
                <p>You need a recruitment team that knows S/4HANA. That knows SAP. S/4HANA talent that exceeds
                    expectations. You want to minimise risk. Build a long-term recruitment strategy.</p>
                <p>This is what we offer here at HUEXD: your total S/4HANA talent solution.</p>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-4xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
                <span class="block md:inline">Building the right team to make the move to S/4HANA.</span>
            </h2>
        </div>
        <div class="hero__technologies1">
            <p class="hero__second__heading1">Brownfield. Greenfield. Landscape Transformation.</p>
            <p class="hero__second__heading1">Whatever your migration option, we have the talent you need to deliver.
            </p>
        </div>
    </div>

    <section class="c-section">
        <div class="container">
            <div class="flex justify-center">
                <div class="w-full lg:w-7/12 xl:w-9/12 p-0">
                    <div class="c-section-grid-content">
                        <div class="c-section-grid-main c-content">
                            <div class="c-accordion">
                                <ul class=" flex flex-col gap-4	 c-accordion-items js-accordion">
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title  font-bold">SAP Architects</h5>
                                    </li>
                                    <li class="c-accordion-item bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">Data Experts
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">BASIS
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">
                                            SAP Application experts&nbsp;-functional & S/4HANA functional
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">ABAP</h5>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <Footer></Footer>
</template>


<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Accordian from '~/components/Accordian.vue'

export default {
    components: {
        Header,
        Footer,
        Accordian
    },
};
</script>
<style scoped>
html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: "Manrope";
}

.hero__first__heading {
    color: #051AD0;
    flex: 1;
    width: 100%;
    margin-top: 0;
    font-weight: 800;
    font-family: Manrope;
}

.hero__technologies {
    padding-top: 20px;
}

.hero__technologies1 {
    padding-top: 10px;
    padding-bottom: 10px;


}

.hero__second__heading {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
}

.hero__second__heading1 {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
}

.c-breadcrumb {
    list-style-type: none;
    padding: 0;
    margin: 0;

}

.c-breadcrumb__item {
    display: inline-block;
    margin-right: 5px;
    font-size: 15px;
}

.c-breadcrumb__item a {
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
}

.c-breadcrumb__item a:hover {
    border-color: #051AD0;
}

.c-breadcrumb__item.--current a {
    color: #051AD0;
}

.c-breadcrumb__item.--current a:hover {
    border-color: transparent;
}

.c-hero__breadcrumb {
    margin-top: 20px;
    color: #051AD0;
}

.talent-recruitment-section {
    padding: 100px;

}

.talent-recruitment-section-inner {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title h2 {
    color: #051AD0;
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 100px;
    text-align: right;
}

.main-content p {
    color: #333;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 50px;
    text-align: start;
    margin-left: 300px;
}

.cta-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #051AD0;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;

}

.cta-button:hover {
    background-color: #3F4FFF;

}

.section_one_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.c-accordion--narrow {
    max-width: 808px;
}

.c-accordion__item {
    background-color: #f0f0f0;
    margin-bottom: 2rem;
    position: relative;
}

.c-accordion__item-title {
    padding: 2.0rem 7rem 2.0rem 3.4rem;
    color: #e11932;
}

.c__section {
    margin-left: 550px;

}



.c-accordion-item {
    padding: 1.9rem;
    color: #c4132e;
}
</style>
