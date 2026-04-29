<template>
    <section class="min-h-screen w-full" ref="aboutSection" id="about-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['mb-20 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <!-- Text Content -->
            <div class="mb-8">
                <p v-for="paragraph in content.autobiography" class="mb-4">{{ paragraph }}</p>
                <div>
                    <p class="pb-3 font-semibold">Most Recent Tech Stack...</p>
                    <ul class="flex flex-wrap gap-2">
                        <li v-for="tech in content.techStack" class="px-3 py-1 bg-gray-200 dark:bg-slate-700 rounded-full text-sm">{{ tech }}</li>
                    </ul>
                </div>
            </div>
            <!-- Image Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <img :src="getImageUrl(content.photo1Link)" class="w-full rounded-lg shadow-md" loading="lazy"/>
                <img :src="getImageUrl(content.photo2Link)" class="w-full rounded-lg shadow-md" loading="lazy"/>
                <img :src="getImageUrl(content.photo3Link)" class="w-full rounded-lg shadow-md col-span-2 sm:col-span-1" loading="lazy"/>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Object,
    transitions: Object
})

const aboutSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(aboutSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

// Static Images
let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>