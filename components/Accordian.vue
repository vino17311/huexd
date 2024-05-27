<template>
    <div class="accordion">
        <ul class="accordion-items p-0">
            <li v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
                <h5 class="accordion-item-title" @click="toggleAccordion(index)">
                    {{ item.title }}
                    <Icon :name="activeAccordion === index ? 'mdi:minus' : 'mdi:plus'" class="icon-right" />
                </h5>
                <div v-show="activeAccordion === index" class="accordion-item-content">
                    <p>{{ item.content }}</p>
                    <div class="c-accordion__item-button-container" v-if="item.link">
                        <a :href="item.link"
                            class="c-button c-button--has-icon c-button--arrow-right c-accordion__item-button">
                            Read more
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeAccordion = ref(null);

const toggleAccordion = (index) => {
    activeAccordion.value = activeAccordion.value === index ? null : index;
};

const props = defineProps(['title', 'content', 'link']);

const accordionItems = ref([
    { title: props.title, content: props.content, link: props.link },

]);
</script>

<style scoped>
.accordion {
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    align-items: flex-end;
}

.accordion-item {
    width: 100%;
}

.accordion-item {
    background-color: #f0f0f0;
    margin-bottom: 1rem;
    border-radius: 5px;
    overflow: hidden;
}

.accordion-item-title {
    padding: 1.3rem 1.3rem 1.3rem 1.3rem;
    color: #f02f2fcf;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

}

.accordion-item-title .icon-right {
    margin-left: 0px;

}

.accordion-item-content {
    padding: 2.5rem 2.5rem 2.5rem 2.5rem;
    color: #555;
    transition: max-height 0.3s ease;
    max-height: 100%;
    overflow: hidden;
}

.accordion-item-content.show {
    margin-bottom: 2rem;
    max-height: 500px;
}

.c-accordion__item-button-container {
    margin-top: 10px;
}

.c-button {
    padding: 0.5rem 1rem;
    background-color: #e11932;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.c-button:hover {
    background-color: #c5001e;
}

p {
    margin-top: 0;
    margin-bottom: 2rem;
}
</style>
