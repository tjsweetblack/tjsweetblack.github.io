<template>
    <section class="min-h-screen w-full" ref="workSection" id="work-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-2 sm:pr-5">💻 Work</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <a :href="portfolio.archiveLink" class="pl-2 sm:pl-5 hover:text-link-color text-right text-sm">Visit Archive</a>
        </div>
        <div :class="['flex flex-col space-y-12 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <!-- WorkUnit components from works array -->
            <WorkUnit
                v-for="(project, index) in portfolio.works"
                :key="`work-${index}`" :project="project"
            />
            
            <!-- ProjectView components from projectUnit array -->
            <ProjectView
                v-for="(project, index) in portfolio.projectUnit"
                :key="`project-${index}`" :project="project"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import WorkUnit from '../components/WorkUnit.vue'
import ProjectView from './ProjectView.vue'
import portfolio from '../portfolio';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object
})

const workSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(workSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true
</script>
