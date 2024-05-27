<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-3xl md:text-6xl lg:text-6xl xl:text-5xl">
                <span class="block md:inline">Confident candidates. </span>
                <span class="block md:inline">Ready for Cloud.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Drive radical change with cloud consultants of the highest calibre.</p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img" src="https://www.cloud4c.com/uae/sites/uae/files/2023-12/sap-on-aws.webp"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb" class="overflow-x-auto">
                <ol class="flex	c-breadcrumb whitespace-nowrap">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies/sap">SAP</a></li>
                    <li class="c-breadcrumb__item --current">cloud-offerings</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Business, reshaped.</span>
                </h2>
                <p dir="ltr"><b>As the digital world evolves, you need cloud professionals who are ready to react.
                        Talent that embraces innovation. Talent that harnesses the power of SAP Cloud technology to
                        design a better future.</b></p>
                <p>Open up a world of possibilities with SAP Cloud experts. Professionals who exude confidence. Who know
                    what they’re talking about. Who turn bold ideas into reality.</p>
                <p>We’re here for you today for a stronger tomorrow. Building Cloud teams that make a real impact. From
                    day one. We’re consultative. Collaborative. Connected. See how RED Global can help today. </p>

            </div>
        </div>
    </section>



    <div class="container">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-5xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
                <span class="block md:inline">Unlock the power of SAP’s Cloud Offerings.</span>
            </h2>
        </div>
        <Accordian :title="'S/4 HANA'"
            :content="'Embrace S/4 HANA’s future-focused tech with experienced professionals at your fingertips.'">
        </Accordian>
        <Accordian :title="'Ariba'"
            :content="'Get the Ariba talent you need to optimise your digital procurement and supply chain processes.'">
        </Accordian>
        <Accordian :title="'Successfactors'"
            :content="'Empower your staff with S/4 technology consultants that reshape how you manage teams in Successfactors.'">
        </Accordian>
        <Accordian :title="'Hybris'"
            :content="'Transform your eCommerce and digital marketing strategy to boost profits, with Hybris consultants.'">
        </Accordian>
        <Accordian :title="'Fieldglass'"
            :content="'Manage your entire external workforce from invoicing to deployment, with Fieldglass consultants.'">
        </Accordian>
        <Accordian :title="'Concur'"
            :content="'Match with Concur specialists who can digitise spending and automate travel expenses.'">
        </Accordian>
        <Accordian :title="'Fiori'"
            :content="'Develop new apps and user experiences in less time with Fiori experts sourced by HUEXD.'">
        </Accordian>
    </div>
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

@media (min-width: 768px) {
    .c-section-grid__inner {
        display: grid;
        column-gap: 1.82rem;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        width: 100%;
    }
}

.c-accordion-item {
    padding: 1.9rem;
    color: #c4132e;
}
</style>
