// experiencesData.ts
interface Experience {
    title: string;
    company: string;
    imageSrc: string;
    technologies: string[];
    date: string;
    accomplishments: string[];
  }
  
  const experiencesData: Experience[] = [
    {
      title: "Senior Product Manager",
      company: "F24",
      imageSrc: 'https://play-lh.googleusercontent.com/YPY6Sz5u4ks6Z9pc8kB4I8YnE73D3JbJdd-gM6ZDjDKQmlErAtefK6sLtYbWQHn00Ig',
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      date: "2020 - 2023",
      accomplishments: ["Accomplishment 1", "Accomplishment 2", "Accomplishment 3"],
    },
    {
      title: "Autre titre",
      company: "Autre entreprise",
      imageSrc: "https://play-lh.googleusercontent.com/YPY6Sz5u4ks6Z9pc8kB4I8YnE73D3JbJdd-gM6ZDjDKQmlErAtefK6sLtYbWQHn00Ig",
      technologies: ["Tech A", "Tech B"],
      date: "Date 2",
      accomplishments: ["Réussite A", "Réussite B"],
    },
    // Ajoutez d'autres expériences de la même manière
  ];
  
  export default experiencesData;
  