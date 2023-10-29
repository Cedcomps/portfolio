import Image from "next/image";
// projectsData.ts
interface Project {
    title: string;
    imageUrl: string;
    description: string;
  }
  
  const projectsData: Project[] = [
    {
      title: "Project 1",
      imageUrl: "URL_de_l'image_1",
      description: "Description du projet 1",
    },
    {
      title: "Project 2",
      imageUrl: "URL_de_l'image_2",
      description: "Description du projet 2",
    },
    // Ajoutez d'autres projets de la même manière
  ];
  
  export default projectsData;
  