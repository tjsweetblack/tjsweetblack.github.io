// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Belmiro Adriano",
    message: "Software Developer",
    basedLocation: "Angola, LUANDA",
    resumeLink: "https://jmp.sh/opL8Ujes", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.png'
}

const socialMediaLinks = {
    github: "https://github.com/tjsweetblack",
    linkedin: "https://www.linkedin.com/in/belmiro-adriano-18554024a/",

} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Belmiro Adriano, and I’m a software developer with experience in C, C++, Flutter, Python, and Node.js. I’m responsible, organized, and a problem solver. I work well in a team, learn quickly, and think independently. I’ve been programming for over 3 years and have a strong foundation in advanced mathematics like calculus, statistics, and discrete mathematics. I’ve developed various projects that enhanced my experience in mobile development."
    ], // Separated items are paragraphs
    techStack: [
        "C",
        "C++",
        "Python",
        "Vue.js",
        "Dart",
        "Flutter",
        "Git",
        "Bash",
        "CMake",
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "FullStack & Flutter Mobile",
        company: {
            name: "AcademiaLb",
            link: "https://academialb.com"
        },
        duration: "2024 - Present",
        bulletPoints: [
            "Developing and maintaining web applications using React and Node.js.",
            "Building and optimizing back-end APIs and database management.",
            "Creating cross-platform Flutter applications for mobile devices.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions."
        ],
        hashtags: [
            "FullStack",
            "WebDevelopment",
            "Flutter",
            "MobileDevelopment",
            "React",
            "Node.js"
        ]
    },
    {
        position: "FullStack & Flutter Mobile",
        company: {
            name: "Self-Employed",
            link: ""
        },
        duration: "2023 - Present",
        bulletPoints: [
            "Building custom web and mobile applications for clients worldwide.",
            "Creating cross-platform Flutter applications for mobile devices.",
            "Developing full-stack solutions with React and Node.js backends.",
            "Delivering projects on time while maintaining high code quality."
        ],
        hashtags: [
            "FullStack",
            "Flutter",
            "MobileDevelopment",
            "Dart",
            "React",
            "Node.js"
        ]
    }
]

// --- 🏆 Achievements Section ---
const achievements = [
    {
        title: "42Luanda Transcender",
        description: "Completed the entire 42 common core curriculum, comprising 16 projects spanning fundamentals, graphics, systems, networks, and web development. Demonstrated proficiency in C, C++, Python, Docker, and various other technologies through rigorous peer-to-peer learning and code reviews.",
        date: "2025",
        type: "education",
        attachments: [
            { label: "View Transcript", type: "pdf", url: "images/42-transcript.pdf" }
        ]
    },
    {
        title: "MapaZZZ Hackathon Winner (SudoZZZ 2025)",
        description: "Won the hackathon with MapaZZZ, an innovative malaria prevention application that allows users to map and track mosquito breeding sites in their area. The project leverages Flutter, Firebase, and OpenStreetMap to create a life-saving tool for community health.",
        date: "2025",
        type: "competition",
        attachments: [
            { label: "Watch Demo Video 1", type: "video", url: "images/video1.MP4" },
            { label: "Watch Demo Video 2", type: "video", url: "images/video2.MP4" },
            { label: "Watch Demo Video 3", type: "video", url: "images/video3.MP4" },
            { label: "Watch Demo Video 4", type: "video", url: "images/video4.MP4" }
        ]
    },
    {
        title: "1st Place Hackathon Winner",
        description: "Architected and developed a robust mobile Point of Sale (POS) system using Flutter. The application facilitates real-time sales registration, features an embedded Machine Learning model for fraud detection and credit score assessment, manages live stock and inventory data, and integrates seamlessly with physical POS thermal printing hardware.",
        date: "2025",
        type: "competition",
        attachments: [
            { label: "View Image 1", type: "image", url: "images/p1.jpeg" },
            { label: "View Image 2", type: "image", url: "images/p2.jpeg" },
            { label: "View Image 3", type: "image", url: "images/p3.jpeg" }
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Get Next Line",
        yearCompleted: "2024",
        description: "Because reading a line from a fd is way too tedious, this project is about creating your own function that returns a line read from one file descriptor or more, if you consider the bonus project requirement. The function get_next_line() returns NULL, if there is nothing else to read or if an error occurred.",
        techStack: "C",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/tjsweetblack/ft_get_nex_line"
            },
            {
                label: "",
                type: "external",
                url: "https://github.com/tjsweetblack/ft_get_nex_line"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "so_long",
        yearCompleted: "2024",
        description: "So_Long is a simple tile-based game where the player must collect all the collectibles and reach the exit while navigating through obstacles. Developed using the MiniLibX library for graphics and handling user inputs, this game is a classic example of a 2D puzzle platformer. Features",
        techStack: "C, Makefile, MiniLibX",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/tjsweetblack/ft_get_nex_line"
            },
            {
                label: "",
                type: "external",
                url: "https://www.linkedin.com/posts/belmiro-adriano-18554024a_gamedevelopment-softwareengineering-42school-activity-7234176184912146432-YOTH?utm_source=share&utm_medium=member_desktop"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "Cube 3D",
        yearCompleted: "2024",
        description: "A 3D graphical representation of a maze from a first-person perspective, inspired by the classic game Wolfenstein 3D. This project was developed as part of the 42 school curriculum. It utilizes the raycasting rendering technique to create the illusion of a three-dimensional space from a two-dimensional map.",
        techStack: "C, Makefile, MiniLibX",
        links: [
            {
                label: "gtihub repo",
                type: "git",
                url: "https://github.com/tjsweetblack/Cube3d"
            }
        ],
        imageLink: "images/cub3d.png",
        alignLeft: true
    },

]

const projectUnit = [
    {
        projectName: "MoBurger",
        yearCompleted: "2025",
        description: "A comprehensive mobile application built with Flutter for ordering and managing burger deliveries. Features include user authentication, menu browsing, custom burger creation, order placement, and real-time order tracking with Firebase backend integration.",
        techStack: "Dart, Flutter, Firebase, OpenStreetMap",
        links: [
            { label: "Download on Play Store", type: "playstore", url: "https://play.google.com/store/apps/details?id=com.moburger.app&pcampaignid=web_share" },
            { label: "Download on App Store", type: "appstore", url: "https://apps.apple.com/ao/app/moburger/id6755946307" },
            { label: "Visit Website", type: "external", url: "https://moburger.online" }
        ],
        imageLinks: [
            "images/b1.png",
            "images/b2.png",
            "images/b3.png",
            "images/b4.png",
            "images/b5.png",
            "images/b6.png",
            "images/b7.png",
            "images/b8.png",
            "images/b9.png",
            "images/b10.png",
            "images/b11.png",
            "images/b12.png",
        ],
        alignLeft: false // Follows `so_long` (true), so this is correct.
    },
    {
        projectName: "MapaZZZ",
        yearCompleted: "2025",
        description: "An interactive mapping application developed using Flutter, integrating Firebase for data storage and OpenStreetMap for detailed geographical information. Allows users to discover or add mosquito breeding sites, view nearby sites, and receive notifications for nearby breeding sites. to avoid malaria.",
        techStack: "Dart, Flutter, Firebase, OpenStreetMap",
        links: [
            { label: "View Live Demo", type: "external", url: "https://mapa-zzz-team-83bq43p0i-miros-projects-c74f19f1.vercel.app/" }
        ],
        imageLinks: [
            "images/m1.png",
            "images/m2.png",
            "images/m3.png",
            "images/m4.png",
            "images/m5.png",
            "images/m6.png",
            "images/m7.png",
            "images/m8.png",
            "images/m9.png",
            "images/m10.png",
            "images/m11.png",
            "images/m12.png",
            "images/m13.png",
            "images/m14.png",
            "images/m15.png",
            "images/m16.png",
            "images/m17.png",
            "images/m18.png",
            "images/m19.png",
            "images/m20.png",
            "images/m21.png",
        ],
        alignLeft: true // This should be true to alternate with the previous project.
    },
    {
        projectName: "The Story of Tchissola expo Japan 2025",
        yearCompleted: "2025",
        description: "A visually engaging website showcasing the story of Tchissola for Expo Japan 2025. The project presents an interactive narrative experience highlighting cultural heritage and storytelling through modern web design.",
        techStack: "Vue.js, HTML, CSS, JavaScript",
        links: [
            { label: "View Website", type: "external", url: "https://expoqrwebsite.vercel.app/" }
        ],
        imageLinks: [
            "images/tchissola1.png",
            "images/tchissola2.png",
        ],
        alignLeft: false
    }
];

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Email: belmiroa34@gmail.com",
            "Currently seeking web and software development internships.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/wkePU4H9zH7nv82QA"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    achievements,
    projectUnit,
    works,
    archiveLink,
    contact
}
