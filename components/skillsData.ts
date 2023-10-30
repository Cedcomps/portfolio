import Image from "next/image";
// SkillsData.ts
interface Skill {
    title: string;
    imageUrl: string;
    progression: string;
  }
  
  const SkillsData: Skill[] = [
    {
      title: "PSM1",
      imageUrl: "https://images.credly.com/size/340x340/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
      progression: "97%",
    },
    {
        title: "Google Cybersecurity Certificate",
        imageUrl: "https://images.credly.com/size/340x340/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png",
        progression: "93%",
    },
    {
        title: "SQL",
        imageUrl: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Azure-SQL-Database-Monitoring.component.complex-narrative-xl.ts=1692275024860.png/content/adobe-cms/fr/fr/products/instana/supported-technologies/azure-sql-database-monitoring/jcr:content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage",
        progression: "70%",
    },
    {
        title: "Python",
        imageUrl: "https://icon.icepanel.io/Technology/svg/Python.svg",
        progression: "30%",
      },   
      {
          title: "Azure",
          imageUrl: "https://icon.icepanel.io/Technology/svg/Azure.svg",
          progression: "30%",
        },
        {
          title: "Jira",
          imageUrl: "https://icon.icepanel.io/Technology/svg/Jira.svg",
          progression: "100%",
        },
        {
            title: "JavaScript",
            imageUrl: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
            progression: "50%",
        },   
        // {
        //     title: "Visual Studio Code",
        //     imageUrl: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
        //     progression: "30%",
        // },
        {
            title: "CSS3",
            imageUrl: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
            progression: "90%",
        },
        {
            title: "Canva",
            imageUrl: "https://icon.icepanel.io/Technology/svg/Canva.svg",
            progression: "100%",
        },   
        {
            title: "Visual Studio Code",
            imageUrl: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
            progression: "80%",
        },
        {
            title: "Docker ",
            imageUrl: "https://icon.icepanel.io/Technology/svg/Docker.svg",
            progression: "60%",
        },
        {
            title: "FileZilla",
            imageUrl: "https://icon.icepanel.io/Technology/svg/FileZilla.svg",
            progression: "90%",
        },   
        {
            title: "GitHub",
            imageUrl: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
            progression: "70%",
        },
        {
            title: "HTML5",
            imageUrl: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
            progression: "100%",
        },        
        {
            title: "Linux",
            imageUrl: "https://icon.icepanel.io/Technology/png-shadow-512/Linux.png",
            progression: "50%",
        },   
        {
            title: "Next.js",
            imageUrl: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
            progression: "20%",
        },
        {
            title: "PHP",
            imageUrl: "https://icon.icepanel.io/Technology/svg/PHP.svg",
            progression: "70%",
        },
        {
            title: "PuTTY",
            imageUrl: "https://icon.icepanel.io/Technology/svg/PuTTY.svg",
            progression: "100%",
        },   
        {
            title: "Figma",
            imageUrl: "https://icon.icepanel.io/Technology/svg/Figma.svg",
            progression: "80%",
        },
        // {
        //     title: "PHP",
        //     imageUrl: "https://icon.icepanel.io/Technology/svg/PHP.svg",
        //     progression: "90%",
        // },
    // Ajoutez d'autres projets de la même manière
  ];
  
  export default SkillsData;
  