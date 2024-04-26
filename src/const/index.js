import { discord, twitch, instagram, github } from "../assets/icons"


export const navLinks = [
    {
        id: "#home",
        title:"Home",
    },
    {
        id: "#about",
        title: "About Me",
    },
    {
        id: "#portfolio",
        title: "Portfolio"
    },
    {
        id:"wetter",
        title: "Wetter-App"
    }
     

]

export const footerLinks = [
    {
        title: "Community",
        links :[
            {
                name: "GitHub",
                link: "https://github.com/KioshiOkh",
            },
            {
                name: "Muchware",
                link: "https://muchware.com"
            },
            {
                name: "Discord",
                link: "http://discord.paulokh.com"
            },
        ],
    },
    {
        title: "Projekte",
        links:[
            {
                name: "Wetter-App",
                link: "wetter"
            },
            {
                name: "",
                link: "",
            },
            {
                name: "",
                link: "",
            }
        ],
    },
    {
        title: "LEGAL",
        links:[
            {
                name: "Impressum",
                link: "impressum",
            },
            {
                name: "Datenschutzerklärung",
                link: "privacy-policy"
            }
        ],
    }
]

export const socialMedia = [
    {
        id: "instagram",
        icon: instagram,
        link: "https://www.instagram.com/paulokh"
    },
    {
        id: "twitch",
        icon: twitch,
        link: "https://www.twitch.tv/pau1okh"
    },
    {
        id: "discord",
        icon: discord,
        link: "http://discord.paulokh.com"
    },
    {
        id: "github",
        icon: github,
        link: "https://github.com/KioshiOkh"
    }
]