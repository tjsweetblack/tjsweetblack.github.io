<template>
    <section class="min-h-screen w-full" ref="achievementsSection" id="achievements-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">🏆 {{ t.achievements.title }}</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col space-y-6 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div
                v-for="(achievement, index) in content"
                :key="index"
                class="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md"
            >
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ achievement.title }}</h3>
                    <span class="text-sm text-gray-500 dark:text-slate-400">{{ achievement.date }}</span>
                </div>
                <p class="text-gray-700 dark:text-slate-300 mb-4">{{ achievement.description }}</p>
                <div v-if="achievement.attachments" class="flex flex-wrap gap-3">
                    <a
                        v-for="(attachment, idx) in achievement.attachments"
                        :key="idx"
                        :href="attachment.url"
                        target="_blank"
                        class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors duration-300"
                    >
                        <span v-if="attachment.type === 'pdf'">📄</span>
                        <span v-else-if="attachment.type === 'image'">🖼️</span>
                        <span v-else>🎬</span>
                        <span class="ml-2">{{ attachment.label }}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import { onIntersect } from '../composables/onIntersect';
import { translations, currentLanguage } from '../i18n/translations';

const props = defineProps({
    content: Object,
    transitions: Object
})

const t = computed(() => translations[currentLanguage.value])

const achievementsSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(achievementsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

</script>