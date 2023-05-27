import react from "../Assets/Skills-Images/react.png";
import nodejs from "../Assets/Skills-Images/nodejs.png";
import postgreSQL from "../Assets/Skills-Images/postgreSQL.png";
import figma from "../Assets/Skills-Images/figma.png";
import c_sharp from "../Assets/Skills-Images/c_sharp.png";
import mySQL from "../Assets/Skills-Images/mySQL.png";
import asp_net from "../Assets/Skills-Images/asp_net.png";

export const experienceData = [
  {
    duration: "Nov 2022 - Feb 2023",
    role: "Full Stack Developer Intern",
    company: "Elitely Group",
    jobscope: [
      "Designed and developed admin dashboard, enabling tracking and production of various users' status reports.",
      "Integrated the admin dashboard with information obtained from the database, ensuring seamless communication between the user interface and backend data storage.",
      "Conducted user testing to identify and resolve bugs.",
      "Proposed new features and functionalities for the company's application.",
    ],
    subheading: "Tech Stack",
    tech: ["React", "PostgreSQL", "NodeJS", "Figma"],
    images: [react, postgreSQL, nodejs, figma],
  },
  {
    duration: "May 2022 - Aug 2022",
    role: "Web Developer Intern",
    company: "ServerSam",
    jobscope: [
      "Implemented e-commerce website for clients which are currently used to drive their business online.",
      "Conducted user acceptance testing to ensure that client's websites met their specific requirements.",
      "Designed and implemented new website functionalities that are applied to drive clients' business revenue",
    ],
    subheading: "Tech Stack",
    tech: ["ASP.net", "C#", "mySQL"],
    images: [asp_net, c_sharp, mySQL],
  },
];
