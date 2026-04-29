<template>
    <div :class="['transition-opacity motion-reduce:transition-none duration-500 mb-16', showProject ? 'opacity-100' : 'opacity-0']">
      <!-- Project Details -->
      <div class="mb-6">
          <p class="text-slate-500 dark:text-slate-400 text-sm mb-1">{{ project.yearCompleted }}</p>
          <h3 class="text-2xl font-extrabold mb-3">{{ project.projectName }}</h3>
          <p class="text-slate-600 dark:text-slate-300 mb-3">{{ project.description }}</p>
          <p class="text-slate-500 mb-4">{{ project.techStack }}</p>
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
                  <span v-else-if="link.type == 'appstore'" class="flex items-center space-x-2">
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span>{{ link.label }}</span>
                  </span>
                  <span v-else-if="link.type == 'playstore'" class="flex items-center space-x-2">
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.283 2.633l2.807 1.626L5.283 6.885l-2.807-1.626L5.283 2.633zm10.892 10.891l-2.302-2.302 10.937-6.333-8.635 8.635z"/>
                      </svg>
                      <span>{{ link.label }}</span>
                  </span>
                  <span v-else class="flex items-center space-x-2">
                      <LinkIcon class="h-5 w-5"/>
                      <span>{{ link.label }}</span>
                  </span>
              </a>
          </div>
      </div>
      <!-- Image Gallery -->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <template v-for="(image, index) in validImages" :key="index">
              <img v-if="image && typeof image === 'string' && image.trim() !== ''"
                   @load="handleImageLoad"
                   :src="getImageUrl(image)"
                   class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" 
                   loading="lazy" 
                   @error="handleImageError"
                   :alt="`${project.projectName} screenshot ${index + 1}`" />
          </template>
      </div>
    </div>
  </template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
});

const showProject = ref(true);
let loadedImages = 0;

// Filter out undefined/empty images
const validImages = computed(() => {
    if (!props.project.imageLinks || !Array.isArray(props.project.imageLinks)) {
        return [];
    }
    return props.project.imageLinks.filter(img => 
        img && 
        img !== 'undefined' && 
        img !== null && 
        typeof img === 'string' && 
        img.trim() !== ''
    );
});

const handleImageLoad = () => {
    loadedImages++;
    // Once all images for this project are loaded, show the project
    if (loadedImages === validImages.value.length) {
        showProject.value = true;
    }
};

const handleImageError = (event) => {
    console.warn('Failed to load image:', event.target.src);
    event.target.style.display = 'none'; // Hide broken images
};

const getImageUrl = (path) => {
  if (!path || path === 'undefined' || path === null || typeof path !== 'string') {
    return 'https://via.placeholder.com/400x300/4305ba/ffffff?text=Image'; 
  }
  return `/${path}`;
};

onMounted(() => {
    console.log('Project imageLinks:', props.project.imageLinks);
    console.log('Valid images:', validImages.value);
    
    // If there are no valid images, show the project immediately
    if (validImages.value.length === 0) {
        showProject.value = true;
    }
});
</script>
