import Image from "next/image";
// projectsData.ts
interface Project {
    title: string;
    imageUrl: string;
    techs: string[];
    description: string;
    projectUrl: string;
  }
  
  const projectsData: Project[] = [
    {
      title: "Create a B2C marketplace",
      imageUrl: "liinkartCompressed.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Laravel.svg", "https://icon.icepanel.io/Technology/svg/PHP.svg", "https://icon.icepanel.io/Technology/svg/JavaScript.svg", "https://icon.icepanel.io/Technology/svg/HTML5.svg", "https://icon.icepanel.io/Technology/svg/CSS3.svg"],
      description: "Discover the artistic talents of tomorrow by valuing their work - Unknown artists want to make a living from their art, but can't exhibit their work in galleries. I created this reverse auction platform to bring art lovers and artists together. Developed using Laravel, PHP and JavaScript. Project available on GitHub",
      projectUrl: "https://github.com/Cedcomps/Liinkart---startup-project",
    },
    {
      title: "Create a tool kit for PM",
      imageUrl: "mentorpmcompressed.png",
      techs: ["https://icon.icepanel.io/Technology/svg/JavaScript.svg", "https://icon.icepanel.io/Technology/svg/HTML5.svg", "https://icon.icepanel.io/Technology/svg/CSS3.svg"],
      description: "A static platform for mentoring product managers in need of tools to help them through their careers. Project available on GitHub",
      projectUrl: "https://github.com/Cedcomps/mentorpm",
    },
    {
      title: "Run a Sprint from Beginning to End",
      imageUrl: "Mener un sprint de A à Z.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Define the features of a corporate social media network and track your team's progress with an agile mindset. Design documents and supports adapted to an Agile project management. Frame a project according to the Scrum methodology",
      projectUrl: "https://www.canva.com/design/DAFyvxmbFsI/xIgaEaZ8YZdizSQSDGdc1A/edit?utm_content=DAFyvxmbFsI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Handle the unexpected during a Sprint",
      imageUrl: "imprevu.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Use managerial skills to manage unexpected events and the problems team encountered during a sprint. Adapt your management methods to your team's varied profiles. Identify suitable external contractors for a project. Maintain a product backlog",
      projectUrl: "https://www.canva.com/design/DAFyvrXH7Hc/CX5FsPAXEpDJJ4yDhwPUiQ/edit?utm_content=DAFyvrXH7Hc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Inspect a product before it goes into production",
      imageUrl: "inspect.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Use managerial skills to smoothly handle the unexpected problems rising during a sprint and better support the team. Plan upcoming sprint releases. Present a product increment to stakeholders. Update a sprint board",
      projectUrl: "https://www.canva.com/design/DAFyv922fYI/F_KPz_1Bf2BhRxxC0BwYgg/edit?utm_content=DAFyv922fYI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Convert your Website's Visitors Into Leads",
      imageUrl: "landing-page.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Optimize the landing page of a travel agency using a varied set of qualitative and quantitative data. Analyze the UX quality on an interface. Assess the performance of a digital product. Design wireframes",
      projectUrl: "https://www.canva.com/design/DAFyv8TqbxM/c1JZTBEh5zq183M3Op9cnQ/edit?utm_content=DAFyv8TqbxM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Develop a Communication Strategy for the Release of a New Feature",
      imageUrl: "strategie de com.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Adapt statistical methods to solve problems in fields such as economics and engineering. Design internal and external communication material. Develop a Communication Strategy for the Release of a New Feature",
      projectUrl: "https://www.canva.com/design/DAFyv0nbX20/IlUvLkIo6LmfPCLk7zCGMA/edit?utm_content=DAFyv0nbX20&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Design a Prototype that Meets User Needs",
      imageUrl: "projet prototype.png",
      techs: [ "https://icon.icepanel.io/Technology/svg/Figma.svg", "https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Boost product's desirability by testing concepts and ideas on users. Assess a product's desirability to users. Design a working prototype of a product. ",
      projectUrl: "https://www.canva.com/design/DAFywS9MpBY/URiReETgL5uKzOlNkSw3iw/edit?utm_content=DAFywS9MpBY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Study the feasibility of adapting a product to smarthphone",
      imageUrl: "faisabilité produit tech.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Test solutions cost-effectively during a lean learning cycle and determine the viability of a product, before mobilizing a technical team. Analyze a product's technical feasibility. Evaluate a product's economic viability. ",
      projectUrl: "https://www.canva.com/design/DAFywrfpcNM/evfhxZrt16bs3nVB0ztWqg/edit?utm_content=DAFywrfpcNM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Lead the Product Strategy of a Travel Agency",
      imageUrl: "Définir la roadmap de votre produit.png",
      techs: ["https://icon.icepanel.io/Technology/svg/Jira.svg", "https://icon.icepanel.io/Technology/svg/Trello.svg"],
      description: "Revitalize the offer and the market positioning of an international travel agency. due to the pandemic situation. Define the product strategy of an organization. Rally stakeholders to a digital strategy",
      projectUrl: "https://www.canva.com/design/DAFywiKt_YQ/oX36saocFq1yS4tKmIgu3g/edit?utm_content=DAFywiKt_YQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    // Ajoutez d'autres projets de la même manière
  ];
  
  export default projectsData;
  