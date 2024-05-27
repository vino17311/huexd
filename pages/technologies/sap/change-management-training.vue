<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-4xl md:text-6xl lg:text-6xl xl:text-6xl">
                <span class="block md:inline">Accelerate SAP&nbsp;adoption.</span>
                <span class="block md:inline">Unify teams.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Cash in on your SAP investment with change management and training
                solutions designed by HUEXD.</p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img"
                    src="https://nttdata-solutions.com/wp-content/usermedia/Image-Picture-People-Discussing-20210830-GLO-EN.jpg"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb" class="overflow-x-auto">
                <ol class="flex	c-breadcrumb whitespace-nowrap">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies/sap">SAP</a></li>
                    <li class="c-breadcrumb__item --current">change&nbsp;management&amp;training</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Preparing for change. Planning for profit.</span>

                </h2>
                <p dir="ltr"><b>Your SAP rollout is on the horizon and the organisational impact will be massive. You
                        need to minimise the risk. Get everyone ready to embrace the new system. Training your SAP
                        end-users is how you get there.</b></p>
                <p>HUEXD helps you overcome the challenges of adult learning with tailored training solutions for your
                    specific goals. You’ll be matched with change managers and training specialists who can engage your
                    entire organisation with customised curricula. </p>
                <p>You’re looking for master communicators, those that make change exciting, not scary. The experts in
                    your technology and in teaching it. The people making sure you win. And we know how to find them.
                    We’re the OCM and training recruitment specialists for SAP. Talk to us. We have who you need. </p>

            </div>
        </div>
    </section>

    <div class="container hero4__top">
        <h2 class="flex flex-col	 hero__first__heading__1 text-5xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
            <span class="block md:inline">Drive SAP efficiency across all SAP business streams.</span>
        </h2>
    </div>

    <div class=" container c-section-grid__additional">
        <div class="c-panels">
            <div class="o-container o-container--medium c-panels__inner p-0">
                <ul class="grid grid-cols-1 sm:grid-cols-3 gap-3">

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">User-Readiness
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Communications Plan
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">
                                Training Strategies
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Risk Mitigation
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">
                                Leader Support
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">
                                Role-Mapping
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Stakeholder Engagement
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">OCM Strategy
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">
                                OCM Evaluations
                            </h4>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    </div>


    <Footer></Footer>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        Header,
        Footer,
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

.hero__first__heading__1 {
    color: #051AD0;
    flex: 1;
    width: 100%;
    margin-top: 0;
    align-items: center;
    font-weight: 800;
    font-family: Manrope;
}

.hero__technologies {
    padding-top: 20px;


}

.hero__second__heading {
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


.c-panels__inner {
    padding: var(--inner-padding, 0 20px);
}

.o-container--medium {
    max-width: calc(140rem +(20px* 2));
}

.o-container {
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;

}

.c-panels__item {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    gap: 0;
    align-content: start;
}

.c-panels__item-head {
    background-color: #c4132e;
    color: #fff;
    grid-row: 1;
}

.c-panels__item-title {
    grid-row: 2;
    display: flex;
    align-items: center;
    min-height: 122px;
    padding: 20px;
    color: #fff;
    background-repeat: no-repeat;
    background-position: 30px center;
    background-size: 35px;
}

ul {
    padding: 0px;
    margin-top: 30px;
}


.c-accordion__items {
    list-style: none;
    padding: 0 !important;
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
}
</style>