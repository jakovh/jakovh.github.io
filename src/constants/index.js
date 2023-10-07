import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    excel,
    jupyter,
    pandas,
    postgresql,
    python,
    seaborn,
    tableau,
    boatmarket,
    instacart,
    films
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    /*{
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    }, */
    {
      name: "React JS",
      icon: reactjs,
    },
/*     {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    }, */
    /* {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    }, */
    {
      name: "git",
      icon: git,
    },
 /*    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    }, */
    {
      name: "Microsoft Excel",
      icon: excel
    },
    {
      name: "Jupyter",
      icon: jupyter
    },
    {
      name: "Pandas",
      icon: pandas
    },
    {
      name: "PostgreSQL",
      icon: postgresql
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Seaborn",
      icon: seaborn
    },
    {
      name: "Tableau",
      icon: tableau
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Boat Market Analysis",
      description:
        "A boat selling company wants to discover new trends in a boat market. Since the company is restocking its inventory, they would like to know the characteristics of popular boats. The goal of this analysis is to identify what makes a boat popular and which characteristics determine its price.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tableau",
          color: "green-text-gradient",
        },
        {
          name: "scipy",
          color: "pink-text-gradient",
        },
      ],
      image: boatmarket,
      source_code_link: "https://github.com/jakovh/boat_sales_data",
      tableau_link: "https://public.tableau.com/app/profile/jakov.horvat/viz/Boatsales/BoatSalesAnalysis",
    },
    {
      name: "Instacart - Online Grocery Store Analysis",
      description:
        "Instacart wants to uncover more information about their sales patterns. The task is to perform an exploratory analysis of some of their data in order to derive insights and suggest strategies for better segmentation based on the provided criteria.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "orange-text-gradient",
        },
        {
          name: "matplotlib",
          color: "purple-text-gradient",
        },
      ],
      image: instacart,
      source_code_link: "https://github.com/jakovh/instacart_basket_analysis",
    },
    {
      name: "Movie Rental Company Analysis",
      description:
        "A movie rental company wants to lunch an online video rental service. A goal of this analysis is to analyze data using SQL and answer any ad-hoc business questions.",
      tags: [
        {
          name: "postgresql",
          color: "teal-text-gradient",
        },
        {
          name: "tableau",
          color: "green-text-gradient",
        },
        {
          name: "excel",
          color: "gold-text-gradient",
        },
      ],
      image: films,
      source_code_link: "https://github.com/jakovh/rockbuster_stealth",
      powerpoint_link: "https://www.dropbox.com/scl/fi/jh29ahykz9nkvkxae1q82/Rockbuster_Stealth_presentation.pdf?rlkey=jroz64totq1qyv5yt8ubc9mig&dl=0",
      tableau_link: "https://public.tableau.com/app/profile/jakov.horvat/viz/TotalCustomersandRevenuebyCountry/Sheet1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };