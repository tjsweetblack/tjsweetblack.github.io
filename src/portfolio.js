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
    message: "I'm a computer science student and an aspiring software engineer. Currently working as a web developer at my university building tools to aid students, educators, and staff.",
    basedLocation: "Angola, LUANDA",
    resumeLink: "https://jmp.sh/opL8Ujes", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/tjsweetblack",
    linkedin: "https://www.linkedin.com/in/belmiro-adriano-18554024a/",

} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Belmiro Adriano, and I’m a computer science student at 42 Luanda, where I study software engineering. My primary programming languages are C and C++, but I’m also expanding my skills by learning Dart, Flutter, and Python on my own.I’m responsible, organized, and a problem solver. I work well in a team, learn quickly, and think independently. I’ve been programming for over 3 years and have a strong foundation in advanced mathematics like calculus, statistics, and discrete mathematics. Currently, I’m focused on developing projects that merge my skills in software engineering and mobile app development."
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
        position: "Graphic Designer",
        company: {
            name: "YetuBrand",
            link: "https://yetubrand.ao"
        },
        duration: "2021 - 2023",
        bulletPoints: [
            "Designed visually appealing graphics and layouts for various marketing materials.",
            "Collaborated with clients to understand their branding needs and deliver tailored solutions.",
            "Managed multiple projects simultaneously while meeting tight deadlines.",
            "Utilized Adobe Creative Suite tools to create high-quality designs."
        ],
        hashtags: [
            "AdobeDesignTools",
            "GraphicDesign",
            "Marketing",
            "Branding",
            "Creativity"
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
        { label: "Download on App Store", type: "appstore", url: "https://apps.apple.com/ao/app/moburger/id6755946307" },
        { label: "View Live Demo", type: "external", url: "https://my-347sl8xjz-miros-projects-c74f19f1.vercel.app/" }
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
    projectUnit,
    works,
    archiveLink,
    contact
}
