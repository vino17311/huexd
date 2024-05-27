<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-5xl md:text-6xl lg:text-6xl xl:text-5xl">
                <span class="block md:inline">Completely</span>
                <span class="block md:inline">committed to SAP.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Whether legacy or S/4HANA, you’ll accomplish your SAP transformation with
                top talent solutions by RED Global.</p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img" src="https://peritossolutions.com/wp-content/uploads/2021/07/image10.png"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb">
                <ol class="flex	c-breadcrumb">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item --current">SAP&nbsp;</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Build a winning SAP team, get</span>
                    <span class="block md:inline">your project completed.</span>
                </h2>
                <p dir="ltr"><b>The speed of business digitisation is blinding. You need the best CIOs, consultants, and
                        project managers to keep up. But the war for talent is fierce. You can’t risk your project going
                        off-course due to poor management.</b></p>
                <p>Put simply: you need world-class SAP talent to execute your project seamlessly. It’s possible. Just
                    tell us what you need. How your business works. Your culture. Your vision. Let us take on the risk
                    and help you find talent that fits. On-budget. On-time.&nbsp;</p>
                <p>Global consultants for your S/4Hana migration. Trainers to help your SAP investment go further.
                    Change managers to minimise disruption. Niche skills that seem impossible to find. There’s nothing
                    we can’t help you with.&nbsp;</p>
                <p>For over 20 years, we’ve been all about SAP. This is what we live and breathe. Partner with us to see
                    for yourself how much better SAP teams are with HUEXD involved.&nbsp;</p>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-5xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
                <span class="block md:inline">technologies </span>

            </h2>
        </div>

        <div class="hero__technologies1">
            <p class="hero__second__heading1">Our complete commitment to SAP and to you means we have evolved our
                offering to include intelligent technologies that support the digital transformations of our clients.
            </p>
        </div>


        <div class="second__head__accordian">
            <p class="second__heading__accordian_2">23 years later, SAP remains our core focus.</p>
        </div>
        <Accordian :title="'SAP S/4HANA'"
            :content="'Need reliable SAP S/4Hana architects, consultants, developers, and project managers who know what they’re doing? We can help you build an expert team for your digital transformation'"
            :link="'/technologies/sap/sap-s4hana'"></Accordian>
        <Accordian :title="'Cloud Offerings'"
            :content="'Find the best candidates that can help you integrate the latest cloud offerings onto your SAP landscape.'"
            :link="'/technologies/sap/cloud-offerings'"></Accordian>
        <Accordian :title="'Functional'"
            :content="'Match with expert functional SAP consultants who can transform your processes and/or systems to evolve your digital landscape.'"
            :link="'/technologies/sap/functional'"></Accordian>
        <Accordian :title="'Technical'"
            :content="'Covering every module, every business stream, and every industry, connect with SAP technical consultants and testers that can build, maintain, and upgrade your SAP systems.'"
            :link="'/technologies/sap/technical'"></Accordian>
        <Accordian :title="'Change Management & Training'"
            :content="'Get your team up to speed with SAP for maximum return on investment by tapping into our pool of dynamic change managers and experienced trainers'"
            :link="'/technologies/sap/change-management-training'"></Accordian>
        <Accordian :title="'Project/Programme Management'"
            :content="'We can provide SAP project and programme managers that can manage the whole project management lifecycle from proof of concept to cutover management.'"
            :link="'/technologies/sap/project-management'"></Accordian>
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
<style>
/* head and hero image and bread crum css start */
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
    /* font-size: 60px; */
    font-weight: 800;
    /* line-height: 60.2px; */
}

.hero__technologies {
    padding-top: 20px;
}

.hero__technologies1 {
    padding-top: 0px;


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
    margin-left: 10%;
    margin-bottom: 5%;
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
    font-weight: 800;
    margin-bottom: 100px;
    text-align: left;
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


.c-section-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
}



.c-section-grid__title {
    font-size: 40px;
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


.second__heading__accordian_2 {
    color: #051AD0;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 50px;
}
</style>
