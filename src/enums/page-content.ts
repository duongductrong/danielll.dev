import { urls } from "./urls";

export const pageContent_ABOUT_ME = {
  WORKS_EXPERIENCE: [
    {
      id: "whammytech",
      name: "Whammy Tech",
      date: "Sep 2022 - Present",
      position: "Software Engineer",
      description: `
      As a Software Engineer at Whammy Tech, 
      my mission is to contribute to the company's success by leveraging my technical skills. 
      I work with software developers and testers to design and develop robust solutions that meet client requirements. 
      Collaborating with fellow engineers, I clarify requirements, conduct code reviews, and ensure adherence to best practices. 
      I use technologies like Meteor.js, Remix-run, and Next.js to contribute to projects. 
      Following Agile scrum methodology, I actively participate in project development, delivering assigned tasks within the sprint week.
      `,
    },
    {
      id: "rio-technology",
      name: "RIO Technology",
      date: "Apr 2021 - Sep 2022",
      position: "Fullstack Developer",
      description: `
      As a Software Engineer at RIO Technology, I am responsible for learning and applying new technologies, 
      collaborating with Back-end Developers to design and integrate Mockups & APIs, maintaining and upgrading features in existing products, 
      proposing technology improvements, and 
      contributing to projects using Vue.js, React.js, JQuery, and Laravel.
      `,
    },
    {
      id: "anflash-technology",
      name: "Anflash Technology",
      date: "Jun 2020 - Apr 2021",
      position: "Front-end Developer",
      description: `
      As a Front-end Developer at Anflash Technology, I coordinate software deployments, 
      design APIs with back-end developers, collaborate with team members to plan 
      and develop project features and user interfaces, adjust design parameters, work with designers on product interfaces, 
      deploy client projects using Filezilla, and design feature interfaces and APIs using React.js and Laravel.
      `,
    },
    {
      id: "canawan",
      name: "Canawan",
      date: "May 2020 - Jun 2020",
      position: "Front-end Developer",
      description: `
      As a Frontend intern at Canawan Office, I develop GUI software using Vue.js and React.js, enhancing web page functionality and user experience. 
      Collaborate with Back-End Developer to build a Vue.js-based CMS.
      `,
    },
  ],
};

type Project = {
  accessible: "public" | "private";
  id: string;
  slug: string;
  detailedName: string;
  title: string;
  referenceSiteUrl: string;
  description: string;
  thumbnail?: string;
};

export const pageContent = {
  participated: [
    {
      accessible: "public",
      id: "langfarmstore.com",
      slug: "langfarm",
      detailedName: "Langfarm E-Commerce",
      title: "Langfarm",
      referenceSiteUrl: "//langfarmstore.com",
      thumbnail: "/assets/projects/langfarm/langfarm-thumbnail.png",
      description: "The e-commerce store in Vietnam.",
    },
    {
      accessible: "private",
      id: "ranhillsaj",
      slug: "ranhillsaj",
      detailedName: "",
      title: "Ranhillsaj",
      referenceSiteUrl: urls.workItem.replace("[id]", "ranhillsaj"),
      description: "The sensor data visualization systems.",
    },
    {
      accessible: "public",
      id: "casio.anhkhue.com",
      slug: "casio-anhkhue-com",
      detailedName: "Anh khue Casio",
      title: "Casio",
      referenceSiteUrl: "//casio.anhkhue.com",
      description: "The watch store of Japan brand in Vietnam.",
      thumbnail:
        "https://res.cloudinary.com/xskill/image/upload/v1658076646/statics/casio-anhkhue_xcye2u.webp",
    },
    {
      accessible: "public",
      id: "surumi.co.jp",
      slug: "surumi.co.jp",
      detailedName: "surumi.co.jp",
      title: "surumi.co.jp",
      referenceSiteUrl: "//surumi.co.jp",
      description: "A Landing page introducing AI technology",
    },
  ] as Project[],
  labs: [
    {
      accessible: "public",
      id: "radio.3d",
      slug: "radio.3d",
      detailedName: "radio.3d",
      title: "radio.3d",
      referenceSiteUrl: urls.labView.replace("[id]", "radio"),
      description: "radio.3d",
      thumbnail: "/assets/thumbnails/radio-3d.png",
    },
    {
      accessible: "public",
      id: "bedroom.3d",
      slug: "bedroom.3d",
      detailedName: "bedroom.3d",
      title: "bedroom.3d",
      referenceSiteUrl: urls.labView.replace("[id]", "bedroom"),
      description: "bedroom.3d",
      thumbnail: "/assets/thumbnails/bedroom-3d.png",
    },
    {
      accessible: "public",
      id: "macbook.3d",
      slug: "macbook.3d",
      detailedName: "macbook.3d",
      title: "macbook.3d",
      referenceSiteUrl: urls.labView.replace("[id]", "macbook"),
      description: "macbook.3d",
      thumbnail: "/assets/thumbnails/macbook-3d.png",
    },
    {
      accessible: "public",
      id: "desk",
      slug: "desk",
      detailedName: "desk",
      title: "desk",
      referenceSiteUrl: urls.labView.replace("[id]", "desk"),
      description: "desk",
      thumbnail: "/assets/thumbnails/desk-3d.png",
    },
    {
      accessible: "public",
      id: "lottery-machine",
      slug: "lottery-machine",
      detailedName: "lottery-machine",
      title: "lottery-machine",
      referenceSiteUrl: urls.labView.replace("[id]", "lottery-machine"),
      description: "lottery-machine",
      thumbnail: "/assets/thumbnails/lottery-machine.png",
    },
    {
      accessible: "public",
      id: "note10",
      slug: "note10",
      detailedName: "note10",
      title: "note10",
      referenceSiteUrl: urls.labView.replace("[id]", "note10"),
      description: "note10",
      thumbnail: "/assets/thumbnails/note-10.png",
    },
  ] as Project[],
  PROJECTS: [
    {
      id: "casio.anhkhue.com",
      slug: "casio-anhkhue-com",
      detailedName: "Anh khue Casio",
      title: "Casio Anh Khue",
      referenceSiteUrl: "//casio.anhkhue.com",
      description: "The store sales the watches",
      image:
        "https://res.cloudinary.com/xskill/image/upload/v1658076646/statics/casio-anhkhue_xcye2u.webp",
      theResult:
        "Improved speed and user experience compared to the previous version. Enhanced user experience",
      metadata: {
        services: ["E-commerce"],
        location: "Ho Chi Minh City",
        website: "https://casio.anhkhue.com",
        thumbnails: [
          "https://res.cloudinary.com/xskill/image/upload/v1687277369/meee/casio-1_vam33e.webp",
          "https://res.cloudinary.com/xskill/image/upload/v1687277370/meee/casio-2_kbrgrz.webp",
          "https://res.cloudinary.com/xskill/image/upload/v1687277368/meee/casio-3_ah4ihe.webp",
          "https://res.cloudinary.com/xskill/image/upload/v1687277368/meee/casio-4_tgrr77.webp",
        ],
      },
    },
    {
      id: "gambox",
      slug: "gambox",
      detailedName: "Gambox Solutions",
      title: "The Gambox solutions",
      referenceSiteUrl: "none",
      description: "The game campaign event solution for the brands",
      image:
        "https://res.cloudinary.com/xskill/image/upload/v1658076049/statics/gambox-desktop_vzgq24.webp",
      theResult:
        "Achieved an award in a start-up competition for software solutions",
      metadata: {
        services: ["Solutions"],
        location: "Ho Chi Minh City",
        website: null,
        thumbnails: [
          "https://res.cloudinary.com/xskill/image/upload/v1658076049/statics/gambox-desktop_vzgq24.webp",
        ],
      },
    },
    {
      id: "codestus",
      slug: "codestus",
      detailedName: "Codestus",
      title: "Codestus.com",
      referenceSiteUrl: "https://codestus.com",
      description:
        "The personal blog to sharing the tips, knowledged in programming.",
      image:
        "https://res.cloudinary.com/xskill/image/upload/v1658076386/statics/codestus.com_okjdb0.webp",
      theResult:
        "Effective programming knowledge transfer, high website traffic, top Google ranking.",
      metadata: {
        services: ["Blog"],
        location: "Unknown",
        website: "https://codestus.com",
        thumbnails: [
          "https://res.cloudinary.com/xskill/image/upload/v1687275936/meee/codestus-1_tho7lj.webp",
          "https://res.cloudinary.com/xskill/image/upload/v1687275936/meee/codestus-2_xoffk0.webp",
          "https://res.cloudinary.com/xskill/image/upload/v1687275936/meee/codestus-4_m2u2up.webp",
          // "https://res.cloudinary.com/xskill/image/upload/v1687275936/meee/codestus-3_pybl5u.webp",
        ],
      },
    },
  ],
} as const;

export const pageContent_HOME = {
  CODEPENS: [
    {
      href: "https://codepen.io/CodeEN/pen/gOzByzm",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279185/meee/codepen-1_lqljph.webp",
    },
    {
      href: "https://codepen.io/CodeEN/pen/vYpYRbZ",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279185/meee/codepen-2_jxfxbo.webp",
    },
    {
      href: "https://codepen.io/CodeEN/pen/ZEagjJE",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279185/meee/codepen-3_qz57bd.webp",
    },
    {
      href: "https://codepen.io/CodeEN/pen/ZEaPXXW",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279185/meee/codepen-4_toc1wv.webp",
    },
    {
      href: "https://codepen.io/CodeEN/pen/JjXmojm",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279185/meee/codepen-6_wvde3w.webp",
    },
    {
      href: "https://codepen.io/CodeEN/pen/XWdxBap",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279185/meee/codepen-5_qqcoqi.webp",
    },
    {
      href: "https://codepen.io/CodeEN/pen/wvMqLEE",
      src: "https://res.cloudinary.com/xskill/image/upload/v1687279186/meee/codepen-7_xrljqs.webp",
    },
  ],
};

export const pageNavigateItems = [
  {
    id: "about",
    label: "About",
    path: urls.landing.about,
  },
  {
    id: "works",
    label: "Works",
    path: urls.landing.works,
  },
  {
    id: "Contact",
    label: "Contact",
    path: urls.landing.contact,
  },
];
