<template>
    <div class="flex items-center justify-center absolute z-50 bg-white dark:bg-slate-900 text-center w-screen h-screen overflow-hidden">
        <div class="relative">
            <!-- Animated Background Elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div class="absolute top-1/2 -right-20 w-48 h-48 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div class="absolute -bottom-20 left-1/3 w-56 h-56 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
            
            <div class="flex flex-col items-center space-y-8 p-8 relative z-10">
                <!-- Animated Globe Icon -->
                <div class="relative">
                    <div class="text-8xl animate-bounce">🌍</div>
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-3xl rounded-full"></div>
                </div>
                
                <h1 class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    {{ t.language.select }}
                </h1>
                
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                    <button 
                        @click="selectLanguage('en')"
                        class="group relative px-10 py-5 bg-button-color text-white text-xl font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                    >
                        <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span class="relative flex items-center gap-3">
                            <span class="text-2xl group-hover:rotate-12 transition-transform duration-300">🇬🇧</span>
                            <span class="group-hover:tracking-wider transition-all duration-300">{{ t.language.english }}</span>
                        </span>
                    </button>
                    <button 
                        @click="selectLanguage('pt')"
                        class="group relative px-10 py-5 bg-button-color text-white text-xl font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                    >
                        <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span class="relative flex items-center gap-3">
                            <span class="text-2xl group-hover:-rotate-12 transition-transform duration-300">🇧🇷</span>
                            <span class="group-hover:tracking-wider transition-all duration-300">{{ t.language.portuguese }}</span>
                        </span>
                    </button>
                </div>
                
                <!-- Animated dots -->
                <div class="flex gap-2 mt-8">
                    <div class="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                    <div class="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
                    <div class="w-3 h-3 bg-pink-500 rounded-full animate-ping delay-600"></div>
                </div>
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