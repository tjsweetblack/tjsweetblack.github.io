<template>
    <div class="flex items-center justify-center absolute z-50 bg-white dark:bg-slate-900 text-center w-screen h-screen overflow-hidden">
        <div class="relative w-full max-w-2xl px-6">
            <!-- Brand Header -->
            <div class="mb-12">
                <div class="flex items-center justify-center space-x-2 mb-6">
                    <p class="text-4xl md:text-6xl font-bold text-button-color">&lt;</p>
                    <p class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#4305ba] to-purple-600 bg-clip-text text-transparent">B.A.</p>
                    <p class="text-4xl md:text-6xl font-bold text-button-color">/&gt;</p>
                </div>
                <div class="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-button-color rounded-full"></div>
            </div>
            
            <h1 class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-2">
                {{ t.language.select }}
            </h1>
            <p class="text-slate-500 dark:text-slate-400 mb-10">Select your preferred language to continue</p>
            
            <!-- Language Options -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    @click="selectLanguage('en')"
                    class="group relative px-8 py-4 border-2 border-button-color text-button-color text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-button-color hover:text-white hover:scale-105 hover:shadow-xl"
                >
                    <span class="flex items-center justify-center gap-3">
                        <span class="text-2xl">🇬🇧</span>
                        <span>{{ t.language.english }}</span>
                    </span>
                </button>
                <button 
                    @click="selectLanguage('pt')"
                    class="group relative px-8 py-4 border-2 border-button-color text-button-color text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-button-color hover:text-white hover:scale-105 hover:shadow-xl"
                >
                    <span class="flex items-center justify-center gap-3">
                        <span class="text-2xl">🇧🇷</span>
                        <span>{{ t.language.portuguese }}</span>
                    </span>
                </button>
            </div>
            
            <!-- Decorative line -->
            <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p class="text-sm text-slate-400">Portfolio v1.0</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { translations, setLanguage } from '../i18n/translations';

const router = useRouter();
const t = computed(() => translations[localStorage.getItem('language') || 'en']);

const selectLanguage = (lang) => {
    setLanguage(lang);
    router.push(window.location.hash || '/');
    window.location.reload();
};
</script>