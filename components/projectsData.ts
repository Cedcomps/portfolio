import Image from "next/image";
// projectsData.ts
interface Project {
    title: string;
    imageUrl: string;
    techs: string[];
    description: string;
  }
  
  const projectsData: Project[] = [
    {
      title: "Project 1",
      imageUrl: "URL_de_l'image_1",
      techs: [""],
      description: "Description du projet 1",
    },
    {
      title: "Develop a B2C marketplace",
      imageUrl: "https://codeur-production.s3.eu-west-3.amazonaws.com/otbrgocfagnhfwlo48ma5hroe5eu",
      techs: ["https://icon.icepanel.io/Technology/svg/Laravel.svg", "https://icon.icepanel.io/Technology/svg/PHP.svg", "https://icon.icepanel.io/Technology/svg/JavaScript.svg"],
      description: "Discover the artistic talents of tomorrow by valuing their work - that's the aim of this platform, to meet the needs of unknown artists who want to make a living from their art. Created using Laravel, PHP and JavaScript. Project available on GitHub",
    },
    // Ajoutez d'autres projets de la même manière
  ];
  
  export default projectsData;
  