<template>
    <div :class="['flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 transition-opacity motion-reduce:transition-none duration-500', showProject ? 'opacity-100' : 'opacity-0']">
      <!-- Image Gallery -->
      <div :class="['pb-4 lg:pb-0', project.alignLeft ? 'lg:order-last' : '']">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <template v-for="(image, index) in validImages" :key="index">
                  <img v-if="image && typeof image === 'string' && image.trim() !== ''"
                       @load="handleImageLoad"
                       :src="getImageUrl(image)"
                       class="h-auto w-full rounded-lg object-cover shadow-md" 
                       loading="lazy" 
                       @error="handleImageError" />
              </template>
          </div>
      </div>
      <!-- Project Details -->
      <div class="flex flex-col space-y-4" :class="project.alignLeft ? 'text-left' : 'lg:text-right'">
          <p>{{ project.yearCompleted }}</p>
          <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
          <p class="text-slate-500 dark:text-slate-300">{{ project.description }}</p>
          <p class="text-slate-600">{{ project.techStack }}</p>
          <div class="flex space-x-6 items-center text-slate-400" :class="!project.alignLeft ? 'lg:justify-end' : ''">
              <a v-for="link in project.links" :href="link.url" class="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color" target="_blank">
                  <span v-if="link.type == 'git'" class="flex items-center space-x-2">
                      <font-awesome-icon icon="fa-brands fa-github" class="h-7 w-7"></font-awesome-icon>
                      <span>{{ link.label }}</span>
                  </span>
                  <span v-else-if="link.type == 'external'" class="flex items-center space-x-2">
                      <ArrowTopRightOnSquareIcon class="h-7 w-7"/>
                      <span>{{ link.label }}</span>
                  </span>
                  <span v-else class="flex items-center space-x-2">
                      <LinkIcon class="h-6 w-6"/>
                      <span>{{ link.label }}</span>
                  </span>
              </a>
          </div>
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
