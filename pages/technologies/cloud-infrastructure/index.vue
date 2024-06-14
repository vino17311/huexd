<template>

    <Header></Header>
    <section class="py-4">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-3xl md:text-6xl lg:text-6xl xl:text-5xl">
                <span class="block md:inline">Capable cloud</span>
                <span class="block md:inline">& infrastructure talent.</span>
                <span class="block md:inline">Captured by HUEXD</span>
            </h2>
        </div>

        <div class="container hero__technologies">
            <p class="hero__second__heading">Match with global cloud, digital, and DevOps specialists.</p>
        </div>

        <section class="container mx-auto mt-4 mb-4">
            <div class="section_one_img_container">
                <img class="section_one_img"
                    src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/cloud-computing.png"
                    alt="Landscape Image">
            </div>
        </section>

        <div class="container c-hero__breadcrumb">
            <nav aria-label="breadcrumb">
                <ol class="flex	c-breadcrumb">
                    <li class="c-breadcrumb__item"><a href="/">Home</a></li>
                    <li class="c-breadcrumb__item"><a href="/technologies">Technologies</a></li>
                    <li class="c-breadcrumb__item --current">Cloud&nbsp;Infrastructure</li>
                </ol>
            </nav>
        </div>
    </section>

    <section>
        <div class="container row">
            <div class="col-lg-6 col-md-0 col-sm-0 col-xs-0"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-sm-1 order-md-1">
                <h2 class="mb-5 text-2xl md:text-6xl lg:text-6xl xl:text-4xl">
                    <span class="block md:inline">Hire today. Grow tomorrow.</span>
                </h2>
                <p dir="ltr"><b>Cloud demands are growing exponentially. Everyday a new technology. A new skill set
                        needed. So you need to stay one step ahead. Agile. Scalable. Growth-focused. With talent that
                        meets that demand. That gives you an edge.</b></p>
                <p>You need the right caliber of talent. Talent that surpasses your expectations. Cloud engineers,
                    architects, and DevOps engineers. That can deliver cloud solutions. Perfectly aligned to your
                    vision. For a better future.&nbsp;</p>
                <p>We stay close to cloud candidates. We stay in-the-know about emerging technologies. And industry
                    demands. So you’ll get only the most accomplished professionals. That you can hire today. To be
                    ready for tomorrow.&nbsp;</p>
            </div>
        </div>
    </section>



    <div class="container">
        <div class="container hero4__top">
            <h2 class="flex flex-col	 hero__first__heading text-5xl md:text-6xl lg:text-6xl xl:text-5xl mt-5">
                <span class="block md:inline">Cloud</span>
            </h2>
        </div>

        <div class="hero__technologies1 mt-5">
            <p class="hero__second__heading1">Don’t compromise on cloud talent. Get in touch.</p>
        </div>

        <Accordian :title="'Cloud Infrastructure Platforms'"
            :content="'Connect with cloud-confident consultants, engineers, developers, and architects. The world’s leading experts in AWS Cloud, Google Cloud, Oracle systems.'"
            :link="'/technologies/cloud-infrastructure/cloud-infrastructure-platforms'"></Accordian>
        <Accordian :title="'Digital Platforms'"
            :content="'Whether integrating new digital platforms. Or growing your current tech. Building your digital platform team is easy and straightforward with HUEXD.'"
            :link="'/technologies/cloud-infrastructure/digital-platforms'"></Accordian>
        <Accordian :title="'DevOps'"
            :content="'Get matched with experienced DevOps engineers, consultants, and architects. Ready to unify your people, processes, and technology for more profit.'"
            :link="'/technologies/cloud-infrastructure/devops'"></Accordian>
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
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');

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

.section_one_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
