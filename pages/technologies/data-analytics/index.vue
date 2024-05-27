<template>
    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-3xl md:text-6xl lg:text-6xl xl:text-5xl">
                <span class="block md:inline">Win the fight for</span>
                <span class="block md:inline">supreme data talent.</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Turn raw numbers into strategic decisions with the world’s best data
                science analysts.</p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img"
                    src="https://www.milesweb.in/blog/wp-content/uploads/2022/12/why-data-analytics-consulting-services-are-necessary-for-business-success.png"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb">
                <ol class="flex	c-breadcrumb">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item --current">Data&nbsp;Analytics</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Talk to recruiters who speak data</span>
                </h2>
                <p dir="ltr">The health of your digital ecosystem depends on the data that fuels it. And you depend on
                    the people who can interpret that data. They’re the logic behind your strategy. The scientists
                    behind your company’s victory.</p>
                <p>Data is the new diamond. And data experts are the new gold. So it’s tough to find the right people.
                    That’s where we come in.. &nbsp;</p>
                <p>We’re connected with the world’s leading data analysts, big data specialists, and data scientists. If
                    you’re looking for dynamic data talent, we know how to find it.&nbsp;</p>
                <p>For more than 20 years, we’ve been dedicated to data. Understanding how it drives business success.
                    Matching data-driven companies with data-devoted talent.</p>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-5xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
                <span class="block md:inline">Always innovating. Always learning.</span>
            </h2>
        </div>
        <div class="hero__technologies1">
            <p class="hero__second__heading1">Thanks to your data masters, matched by HUEXD:</p>
        </div>
    </div>

    <section class="c-section">
        <div class="container">
            <div class="flex justify-center">
                <div class="w-full lg:w-7/12 xl:w-9/12">
                    <div class="c-section-grid-head text-left sm:text-center md:text-center xl:text-left">
                        <h2 class="text-xl text-left md:text-2xl xl:text-5xl mt-4 mb-5">Roles</h2>
                    </div>
                    <div class="c-section-grid-content">
                        <div class="c-section-grid-main c-content">
                            <div class="c-accordion">
                                <ul class=" flex flex-col gap-4	 c-accordion-items js-accordion">
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title  font-bold">Cyber
                                            Security
                                            Analysts</h5>
                                    </li>
                                    <li class="c-accordion-item bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">Project
                                            Managers
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">Risk
                                            Consultants
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">
                                            Security
                                            Monitoring
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">Cyber
                                            Security
                                            Engineers</h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">
                                            Security
                                            Business
                                            Analysts</h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">Infosec
                                            Experts
                                        </h5>
                                    </li>
                                    <li class="c-accordion-item  bg-gray-200 ">
                                        <h5 class="c-accordion-item-title   font-bold">CISOs
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-5xl md:text-6xl lg:text-6xl xl:text-5xl mt-5 mb-5">
                <span class="block md:inline">Always learning. Always innovating.</span>
            </h2>
        </div>
        <Accordian :title="'Big Data & Data Science'"
            :content="'Data scientists and big data professionals are the unsung heroes. They see problems before they happen. Trends before they happen. Master communicators with exceptional technical talent.'"
            :link="'/technologies/data-analytics/big-data-data-science'"></Accordian>
        <Accordian :title="'Data Engineering & Development'"
            :content="'Data: it’s your most strategic asset. The heart of your digital transformation. The driving force behind your future innovations. You need data engineers and developers that speak its language.'"
            :link="'/technologies/data-analytics/data-engineering-development'"></Accordian>
        <Accordian :title="'Business Intelligence & Reporting'"
            :content="'Hiring strong business intelligence talent can be complicated. You’re looking for the right cultural fit. Someone motivated. Exceptionally well-versed in business strategy. A brilliant analytical mind.'"
            :link="'/technologies/data-analytics/business-intelligence-reporting'"></Accordian>
        <Accordian :title="'AI & ML'"
            :content="'The AI revolution has only just begun. Every business around you is scrambling for the best AI & ML talent. To drive innovation. Outpace AI breakthroughs. Help your organisation take full control of AI and ML’s unimaginable force.'"
            :link="'/technologies/data-analytics/ai-ml'"></Accordian>
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
