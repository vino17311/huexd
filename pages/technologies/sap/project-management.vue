<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-4xl md:text-6xl lg:text-6xl xl:text-6xl">
                <span class="block md:inline">PM's dedicated</span>
                <span class="block md:inline">to your success.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Professionals you can count on. Experience you can trust. </p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img"
                    src="https://www.valantic.com/wp-content/uploads/sharing-new-ideas-501653244-1.jpg"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb" class="overflow-x-auto">
                <ol class="flex	c-breadcrumb whitespace-nowrap">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies/sap">SAP</a></li>
                    <li class="c-breadcrumb__item --current">project&amp;management</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Unstoppable talent. Ready and waiting.</span>

                </h2>
                <p dir="ltr"><b>You’re ready to chase new levels of success. Profitability. Growth. You need project and
                        programme managers who can hit the ground running. High-caliber individuals with a thirst for
                        triumph.</b></p>
                <p>People who won’t buckle under the pressure, no matter how challenging the task. Who truly care. Those
                    with unparalleled drive. Ambition. Technical understanding.</p>
                <p>They’re rare, but they’re out there. We know how to find candidates who not only meet but exceed your
                    expectations. With 20 years of commitment to SAP and private global talent pools. </p>
            </div>
        </div>
    </section>

    <div class="container hero4__top">
        <h2 class="flex flex-col	 hero__first__heading__1 text-4xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
            <span class="block md:inline">Keep everything on track with sector-specific project&nbsp;management
                talent.</span>
        </h2>
    </div>

    <div class=" container c-section-grid__additional">
        <div class="c-panels">
            <div class="o-container o-container--medium c-panels__inner p-0">
                <ul class="grid grid-cols-1 sm:grid-cols-3 gap-3">

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Detailed Project Plans
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Cost Benefit Analysis
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">
                                Risk Mitigation Plans
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Stakeholder Management
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Status Reports
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Business Strategy
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Project Planning & Tracking
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Budgeting
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Project Governance
                            </h4>
                        </div>

                    </li>

                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">Resource Management
                            </h4>
                        </div>

                    </li>
                    <li class="c-panels__item">
                        <div class="c-panels__item-head">
                            <h4 class="c-panels__item-title">
                                Cutover Management
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

.section_one_img_container {
    width: 100%;
    height: 390px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 13px;
    overflow: hidden;
}
</style>