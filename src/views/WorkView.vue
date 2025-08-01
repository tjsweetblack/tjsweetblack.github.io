<template>
    <section class="min-h-screen w-full" ref="workSection" id="work-section">
        <div class="relative flex py-5 items-center">
            <h1 class="text-3xl font-bold pr-2 sm:pr-5">💻 Work</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <a :href="portfolio.archiveLink" class="pl-2 sm:pl-5 hover:text-link-color text-right text-sm">Visit Archive</a>
        </div>
        <div class="flex flex-col space-y-12 mb-36">
            <!-- WorkUnit components from props.content (works array) -->
            <WorkUnit
                v-for="(project, index) in props.content"
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

const props = defineProps({
    content: Array,
    transitions: Object
})

const workSection = ref({})

console.log('Works data:', props.content)
console.log('ProjectUnit data:', portfolio.projectUnit)
</script>
