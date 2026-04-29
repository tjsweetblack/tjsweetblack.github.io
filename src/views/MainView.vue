<template>
	<SplashView v-if="showingSplash"/>
	<LanguageView v-else-if="showLanguageSelect"/>

  	<div v-show="!showingSplash && !showLanguageSelect" class="min-h-screen overscroll-contain bg-white dark:bg-slate-900 dark:text-slate-300 text-base md:text-xl">
		<Navbar :show-transition="showLanding" :dark-mode-active="darkModeActive" @toggle-dark="toggleDark"/>

		<div class="min-h-full mx-10">
			<div class="flex flex-col md:grid md:grid-cols-6 min-h-full">
				<div class="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none">
					<ul class="md:fixed md:bottom-0 mb-7 flex items-center space-x-8 md:flex-col md:space-y-4 md:space-x-0">
						<li v-show="githubLink" :class="['transition-all motion-reduce:transition-none duration-500', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="githubLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-github" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="linkedinLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[100ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="linkedinLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-linkedin" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="mediumLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[150ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="mediumLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-medium" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="stackoverflowLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[200ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="stackoverflowLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-stack-overflow" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="xTwitterLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[200ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="xTwitterLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-x-twitter" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
					</ul>
				</div>
				<div class="col-span-4 flex-1 flex-col order-1 md:order-none">
					<div class="container mx-auto max-w-full 2xl:max-w-6xl">
						<LandingView :content="greetingContent" :show-transition="showLanding"/>

						<AboutView :content="portfolio.about" :transitions="portfolio.transitions" />

						<ExperienceView :content="portfolio.experiences" :transitions="portfolio.transitions" />

						<AchievementsView :content="portfolio.achievements" :transitions="portfolio.transitions" />

						<WorkView :content="portfolio.works" :transitions="portfolio.transitions" />

						<ContactView :content="portfolio.contact" :transitions="portfolio.transitions" />

						<footer class="hidden text-center md:block mb-5">
							<p> <a href="" class="" target="_blank"></a></p>
							<a href="https://github.com/feifyKike/webdev_portfolio" class="" target="_blank"></a>
						</footer>
					</div>
				</div>
				<div class="hidden col-span-1 md:flex flex-initial relative order-2 text-center md:order-none">
					<p :class="['fixed bottom-2 right-10 origin-top-right rotate-90 transition-all motion-reduce:transition-none duration-500', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">📍 {{ basedLocationText }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import LandingView from './LandingView.vue'
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import AchievementsView from './AchievementsView.vue'
import WorkView from './WorkView.vue'
import ContactView from './ContactView.vue'
import SplashView from './SplashView.vue'
import LanguageView from './LanguageView.vue'

import portfolio from '../portfolio'
import { getLanguage, translations, currentLanguage } from '../i18n/translations'

const router = useRouter()

const showingSplash = ref(portfolio.splashScreen)
const showLanguageSelect = ref(!localStorage.getItem('language'))
const showLanding = ref(!(portfolio.transitions.active || portfolio.transitions.onlyLanding))
const darkModeActive = ref(false)

onMounted(() => {
	splashScreen()
	landingTransition()
	useDark()
})

// Social Media Links
const githubLink = portfolio.socialMediaLinks.github
const linkedinLink = portfolio.socialMediaLinks.linkedin
const mediumLink = portfolio.socialMediaLinks.medium
const stackoverflowLink = portfolio.socialMediaLinks.stackoverflow
const xTwitterLink = portfolio.socialMediaLinks.xtwitter;

const greetingContent = computed(() => {
    const t = translations[currentLanguage.value]
    return {
        ...portfolio.greeting,
        intro: t.greeting.intro,
        message: t.greeting.message,
        basedLocation: portfolio.greeting.basedLocation
    }
})

const basedLocationText = computed(() => {
    const t = translations[currentLanguage.value]
    return t.greeting.basedLocation + ' ' + portfolio.greeting.basedLocation.split(',')[1]
})

const splashScreen = () => {
	if (portfolio.splashScreen) {
		setTimeout(() => {
			showingSplash.value = false
			if (!localStorage.getItem('language')) {
				showLanguageSelect.value = true
			} else {
				router.push(window.location.hash)
			}
		}, 2000)
	} else if (!localStorage.getItem('language')) {
		showLanguageSelect.value = true
	}
}

const landingTransition = () => {
	if (!showLanding.value && portfolio.splashScreen) {
		setTimeout(() => {
			showLanding.value = true
		}, 2100)
	} else if (!showLanding.value) {
		setTimeout(() => {
			showLanding.value = true
		}, 500)
	}
}

const useDark = () => {
	// credit: https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.remove('bg-white')
		document.documentElement.classList.add('dark', 'bg-slate-900')
		darkModeActive.value = true
	} else {
		document.documentElement.classList.remove('dark', 'bg-slate-900')
		document.documentElement.classList.add('bg-white')
		darkModeActive.value = false
	}
}

const toggleDark = () => {
	if (darkModeActive.value) {
		localStorage.theme = 'light'
	} else {
		localStorage.theme = 'dark'
	}

	useDark()
}

</script>