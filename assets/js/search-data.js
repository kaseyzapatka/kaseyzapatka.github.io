// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a sampling of my public-facing projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-github",
          title: "github",
          description: "a sampling of my public repos on github",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "materials for courses i&#39;ve taught",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-your-buffer-is-lying-to-you",
        
          title: "Your buffer is lying to you",
        
        description: "Why projection choice shrank my study area by 20%",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/buffer-projections/";
          
        },
      },{id: "post-flexible-functions",
        
          title: "Flexible Functions",
        
        description: "My Flexible Plotting Approach in R using ggplot2",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/flexible-functions/";
          
        },
      },{id: "post-positron",
        
          title: "Positron",
        
        description: "Why I Switched to Positron",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/positron/";
          
        },
      },{id: "post-spatial-joins-in-python",
        
          title: "Spatial joins in Python",
        
        description: "Spatial join tutorial in Python",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/spatial-joins/";
          
        },
      },{id: "news-i-received-my-phd",
          title: 'I received my PhD!',
          description: "",
          section: "News",},{id: "news-i-started-my-postdoc-at-university-of-california-berkeley-smile",
          title: 'I started my Postdoc at University of California, Berkeley! :smile:',
          description: "",
          section: "News",},{id: "projects-housing-literacy",
          title: 'Housing Literacy',
          description: "Online tool annotating NYC rent regulations, empowering rent-stabilized tenants and supporting advocates with accessible resources, policy analysis, and data tools.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-superdiversity",
          title: 'Superdiversity',
          description: "Developed an interactive website visualizing New York metropolitan superdiversity, combining data analysis, cross-functional team leadership, and public-facing demographic insights.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-nepa-clean-energy-review-analysis",
          title: 'NEPA Clean Energy Review Analysis',
          description: "Built a Python BERT+LLM pipeline for the Clean Air Task Force to extract and classify 120,000+ federal environmental review documents, enabling evidence-based permitting reform recommendations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-nyc-voter-turnout-analysis",
          title: 'NYC Voter Turnout Analysis',
          description: "Applying Bayesian surname geocoding, multilevel regression with poststratification, and LLMs to study ethno-racial voter turnout patterns across 4.6 million NYC voter registration records.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-san-jose-transit-equity",
          title: 'San Jose Transit Equity',
          description: "Parcel-level analysis of housing capacity and displacement risk within one mile of Diridon Station — San Jose&#39;s zoning permits ~120,000 homes where only ~12,800 exist today, with ~20,600–42,500 buildable on parking lots and vacant land alone.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-sf-residential-inspection-risk",
          title: 'SF Residential Inspection Risk',
          description: "Built composite risk scores for San Francisco parcels using fire, violation, and inspection records, and deployed interactive Shiny dashboards for the SF Fire Department and Department of Building Inspection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/kaseyzapatka.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%73%65%79%7A%61%70%61%74%6B%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kaseyzapatka", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kaseyzapatka", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7278-3660", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5nHsgg0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/kaseyzap", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
