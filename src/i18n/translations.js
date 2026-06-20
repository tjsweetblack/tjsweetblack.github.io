export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            achievements: "Achievements",
            work: "Work",
            contact: "Contact",
            resume: "Resume"
        },
        greeting: {
            intro: "Hello 👋, my name is",
            message: "Software Developer",
            basedLocation: "Based in"
        },
        about: {
            title: "About Me",
            techStack: "Most Recent Tech Stack..."
        },
        experience: {
            title: "Experience"
        },
        achievements: {
            title: "Achievements",
            viewTranscript: "View Transcript",
            watchVideo: "Watch Demo Video"
        },
        work: {
            title: "Work",
            archive: "Visit Archive"
        },
        contact: {
            title: "Contact",
            getInTouch: "Get in Touch",
            email: "Email:",
            seeking: "Currently seeking web and software development internships.",
            connect: "Also looking to build a team for projects & startup ideas or just make professional connections."
        },
        language: {
            select: "Choose Language",
            english: "English",
            portuguese: "Português"
        }
    },
    pt: {
        nav: {
            about: "Sobre",
            experience: "Experiência",
            achievements: "Conquistas",
            work: "Trabalhos",
            contact: "Contacto",
            resume: "Currículo"
        },
        greeting: {
            intro: "Olá 👋, o meu nome é",
            message: "Sou estudante de ciência da computação e um futuro engenheiro de software. Atualmente trabalho como desenvolvedor web na minha universidade criando ferramentas para ajudar estudantes, educadores e funcionários.",
            basedLocation: "Baseado em"
        },
        about: {
            title: "Sobre Mim",
            techStack: "Stack Tecnológico Mais Recente..."
        },
        experience: {
            title: "Experiência"
        },
        achievements: {
            title: "Conquistas",
            viewTranscript: "Ver Transcrição",
            watchVideo: "Ver Vídeo Demo"
        },
        work: {
            title: "Trabalhos",
            archive: "Ver Arquivo"
        },
        contact: {
            title: "Contacto",
            getInTouch: "Entre em Contacto",
            email: "Email:",
            seeking: "À procura de estágio em desenvolvimento web e software.",
            connect: "Também procuro construir uma equipa para projetos e ideias de startup ou simplesmente fazer conexões profissionais."
        },
        language: {
            select: "Escolher Idioma",
            english: "English",
            portuguese: "Português"
        }
    }
}

export const currentLanguage = {
    value: localStorage.getItem('language') || 'en'
}

export function setLanguage(lang) {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
}

export function getLanguage() {
    return currentLanguage.value
}