<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-3xl md:text-6xl lg:text-6xl xl:text-6xl">
                <span class="block md:inline">Business</span>
                <span class="block md:inline">intelligence hiring.</span>
                <span class="block md:inline">Simplified.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Enabling better decision-making with standout BI talent.
            </p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img"
                    src="https://d2o2utebsixu4k.cloudfront.net/media/images/e89ad461-7902-4c67-bb6f-6ee9d6504eb1.png"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb" class="overflow-x-auto">
                <ol class="flex	c-breadcrumb whitespace-nowrap">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies/data-analytics">data & analytics</a>
                    </li>
                    <li class="c-breadcrumb__item --current">business-intelligence-reporting</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Strategic insights, expertly</span>
                    <span class="block md:inline">extracted.</span>

                </h2>
                <p dir="ltr"><b>Hiring strong business intelligence talent can be complicated. You’re looking for the
                        right cultural fit. Someone motivated. Exceptionally well-versed in business strategy. A
                        brilliant analytical mind.</b></p>
                <p>They’re the influencers of your business strategy. The epicentre of your competitive edge. The BI
                    developers, data analysts, and architects. When others just see numbers, they can extract meaningful
                    insights from infinite data. &nbsp;</p>
                <p>They can make or break your digital transformation. You can’t risk hiring the wrong person. Or
                    delaying the project with unsuccessful interviews. That's why you need a strong recruitment partner
                    like HUEXD. &nbsp;</p>
                <p>So that hiring won’t be on instinct alone. So the risk is out of your hands. So you will only receive
                    worthy CVs. Because we’ll know what your ideal match looks like. Better than anyone else. &nbsp;</p>
            </div>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl mt-5">
                    <span class="block md:inline">We have work-ready BI</span>
                    <span class="block md:inline">candidates.</span>

                </h2>
                <div class="hero__technologies1 mt-5">
                    <p class="hero__second__heading1 text-lg md:text-xl lg:text-xl xl:text-lg">
                        Unrivalled skills in every area.
                    </p>
                </div>
                <ol class="list-disc text-lg md:text-xl lg:text-xl xl:text-lg text-left">
                    <li>

                        Data Architecture
                    </li>
                    <li>Data Modelling</li>
                    <li>Data Science</li>
                    <li>BI Development</li>
                    <li>Big Data</li>
                    <li>Blockchain</li>
                    <li>Data Governance</li>
                    <li>Advanced Analytics</li>
                    <li>SQL Development</li>
                    <li>Master Data</li>
                </ol>
            </div>
        </div>
    </section>


    <div class="container">

        <Accordian :title="'Big Data & Data Science'"
            :content="'Data scientists and big data professionals are the unsung heroes. They see problems before they happen. Trends before they happen. Master communicators with exceptional technical talent.'"
            :link="'/technologies/data-analytics/big-data-data-science'"></Accordian>
        <Accordian :title="'Data Engineering & Development'"
            :content="'Data: it’s your most strategic asset. The heart of your digital transformation. The driving force behind your future innovations. You need data engineers and developers that speak its language.'"
            :link="'/technologies/data-analytics/data-engineering-development'"></Accordian>
        <Accordian :title="'Business Intelligence & Reporting'"
            :content="'Hiring strong business intelligence talent can be complicated. You’re looking for the right cultural fit. Someone motivated. Exceptionally well-versed in business strategy. A brilliant analytical mind.'"
            :link="'/technologies/data-analytics/business-intelligence-reporting'"></Accordian>
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