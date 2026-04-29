<template>
    <div :class="['transition-opacity motion-reduce:transition-none duration-500 mb-16', showProject ? 'opacity-1' : 'opacity-0']">
        <div class="mb-4">
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-1">{{ project.yearCompleted }}</p>
            <h3 class="text-xl font-extrabold mb-2">{{ project.projectName }}</h3>
            <p class="text-slate-500 dark:text-slate-300 mb-2">{{ project.description }}</p>
            <p class="text-slate-600 text-sm mb-3">{{ project.techStack }}</p>
            <div class="flex flex-wrap gap-4 text-slate-400">
                <a v-for="link in project.links" :href="link.url" class="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color" target="_blank">
                    <span v-if="link.type == 'git'" class="flex items-center space-x-2">
                        <font-awesome-icon icon="fa-brands fa-github" class="h-6 w-6"></font-awesome-icon>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else-if="link.type == 'external'" class="flex items-center space-x-2">
                        <ArrowTopRightOnSquareIcon class="h-6 w-6"/>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else class="flex items-center space-x-2">
                        <LinkIcon class="h-5 w-5"/>
                        <span>{{ link.label }}</span>
                    </span>
                </a>
            </div>
        </div>
        <img
            @load="showProject = true"
            :src="getImageUrl(project.imageLink)"
            class="w-full max-w-3xl rounded-lg shadow-md"
            loading="lazy"
            @error="handleImageError"
        />
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

const showProject = ref(true) // Show immediately

const handleImageError = (event) => {
    console.warn('Failed to load work image:', event.target.src);
    // Show placeholder on error
    event.target.src = 'https://via.placeholder.com/400x300/4305ba/ffffff?text=Project';
}

let getImageUrl = (path) => {
  if (!path) return 'https://via.placeholder.com/400x300/4305ba/ffffff?text=Project';
  return `/${path}`;
}

console.log('WorkUnit project:', props.project)
</script>
