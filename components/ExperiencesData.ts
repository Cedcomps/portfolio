// experiencesData.ts
interface Experience {
    title: string;
    company: string;
    purpose: string;
    imageSrc: string;
    date: string;
    accomplishments: string[];
  }
  
  const experiencesData: Experience[] = [
    {
      title: "Senior Product Manager",
      company: "F24",
      purpose: "Incident and crisis management, emergency­ notification ISO/IEC 27001",
      imageSrc: 'https://play-lh.googleusercontent.com/YPY6Sz5u4ks6Z9pc8kB4I8YnE73D3JbJdd-gM6ZDjDKQmlErAtefK6sLtYbWQHn00Ig',
      date: "2020 - 2023",
      accomplishments: ["Developed an alerting solution handling €20m ARR sales in 2021, by leading a team of 5 engineers", "Drived our migration program related to 3 products overlaps, by defining our 76 features development roadmap, communicating with stakeholders and senior management, and evaluating trade-offs through rigorous prioritization.", "Stopped churn in the Luxembourg market by 20%, by seeking, identifying and contextualizing areas for product improvement", "Built SSO authentication, reducing by 4 the cost of maintenance of multiple credentials to connect to our products portfolio and enabling 2FA for stronger security, by coordinating a team of 4 engineers.", "Achieved new product documentation architecture, adding new KPI resulting in a 60% reduction in the number of support tickets, by simplifying format with Customer Success.","Launched a new product edition for a variety of critical customers, increasing upsell by 12%, by working cross-functionnaly with engineering, marketing and sales team.","Setting up a data analysis process using SQL queries, solving customer needs into a feedback loop, by conducting a cross-functionnally Design Sprint with 3 product teams of 18 developers."],
    },
    {
      title: "Product Consultant",
      company: "DAVIDSON",
      purpose: "Digital Transformation consulting firm",
      imageSrc: "https://admin.davidson.fr/wp-content/uploads/logo-davidson.png",
      date: "2019 - 2020",
      accomplishments: ["Encouraged a Product culture, built strong relationships between Enterprise Architects and IT teams that didn't exist before, facilitating closer collaboration between stakeholders to gather and refine architecture concepts. "],
    },
    {
      title: "Product Manager",
      company: "AlarmTILT",
      purpose: "Alerting and crisis management solution ISO/IEC 27001",
      imageSrc: "https://play-lh.googleusercontent.com/kZLDb8BtSTO8AdIVCaStqpdpMZkqYDSBi0uKWaXPtgsans_GwGSR6_3UWJMumYL0W8Q",
      date: "2018 - 2019",
      accomplishments: ["Prioritized over 900 User Stories with stakeholders, by balancing between short-term deliverables and long-term investments., aligning the business with the market needs.","Presented recurring product demos as part of our go-to-market strategy, increasing sales by 15%, by reinforcing our product launch efforts with engineering, marketing and the sales team.","Streamlined the providers usage in our backend, reducing operations costs of 40%, by allocating more routes for cheaper and accurate providers.","Implemented RGPD-compliant data protection procedures in the product, by working closely with the engineering and legal teams to ensure the security and integrity of sensitive data."],
    },
    {
      title: "Product Mentor",
      company: "OPENCLASSROOMS",
      purpose: "Online certification training company",
      imageSrc: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
      date: "2017 - Now",
      accomplishments: ["Mentored and shaped the careers of future product managers, achieving a ROI score of 4.9 out of 5, by conducting more than 2700 personalized 1:1 coaching sessions.","Guided 156 students to graduation, demonstrating a strong commitment to their educational success and career development.","Coached employees from L'OREAL, BNP, EXPLEO, ENEDIS to reconvert to Scrum and Product Owner roles, passing their PSM1 and PSPO certifications with a rate of 90%, by delivering my knowledge in product management and agility."],
    },
    {
      title: "Founder",
      company: "Liinkart",
      purpose: "B2C marketplace startup",
      imageSrc: "https://pbs.twimg.com/profile_images/892695031068413952/MzAxYc86_400x400.jpg",
      date: "2016 - 2017",
      accomplishments: ["Democratized the online art market, connecting artists 90% more easily to art lovers by winning the 1st place out of 12 teams in Startup Weekend of Metz 2016.","Developed the product as a software developer, by learning PHP and JavaScript to get the things done."],
    },
    {
      title: "NCO in computer systems and networks",
      company: "French Army",
      purpose: "",
      imageSrc: "https://f.hellowork.com/holeest/logo/logo_armeev17-v-1.jpg",
      date: "2011 - 2016",
      accomplishments: ["Built secure network infrastructure and configuration of switches for NATO exercises, ensuring effective protection against computer attacks and unwanted intrusions, by applying Cosmic Top Secret security classification practices.","Setting up telecommunications systems from nowhere for the Quick Reaction Force, reducing time to respond during event of enemy confrontation.","Implemented advanced cryptographic protocols to enhance the security of army networks, reducing the risk of cyberattacks during NATO Citadel Guibert exercises."],
    },
    {
      title: "Team Lead",
      company: "SINEO",
      purpose: "Car preparation",
      imageSrc: "https://ac-franchise.com/wp-content/uploads/2017/01/logo-franchise-sineo.jpg",
      date: "2008 - 2010z",
      accomplishments: ["Created the waterless cleaning technique for the Audi Group, speeding up the sale of used vehicles by 40% and doubled the number of vehicles cleaned, having trained the Audi Group's preparers."],
    },
    // Ajoutez d'autres expériences de la même manière
  ];
  
  export default experiencesData;
  