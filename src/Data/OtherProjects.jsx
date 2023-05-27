import portfolio from "../Assets/Projects-Images/portfolio.png";
import coollights from "../Assets/Projects-Images/coollights.png";
import datapipeline from "../Assets/Projects-Images/datapipeline.png";
import python from "../Assets/Skills-Images/python.png";
import gcs from "../Assets/Skills-Images/gcs.png";
import airflow from "../Assets/Skills-Images/airflow.png";
import mongodb from "../Assets/Skills-Images/mongodb.png";
import pandas from "../Assets/Skills-Images/pandas.png";
import tableau from "../Assets/Skills-Images/tableau.png";
import react from "../Assets/Skills-Images/react.png";
import css from "../Assets/Skills-Images/css.png";
import framermotion from "../Assets/Skills-Images/framermotion.png";
import asp_net from "../Assets/Skills-Images/asp_net.png";
import c_sharp from "../Assets/Skills-Images/c_sharp.png";
import mysql from "../Assets/Skills-Images/mySQL.png";

export const otherProjects = [
  {
    title: "Yelp Data Pipeline",
    subheading:
      "This data-driven project involves implementing an end to end data pipeline which provides insights on the various factors potentially affecting food businesses.",
    sourcecode: "https://github.com/edenyew/yelp_airflow",
    projectImage: datapipeline,
    skills: ["Python", "Airflow", "GCS", "Pandas", "MongoDB", "Tableau"],
    techstack: [python, airflow, gcs, pandas, mongodb, tableau],
  },
  {
    title: "Website Portfolio",
    subheading:
      "A website portfolio that showcases the value he aims to deliver for his clients.",
    sourcecode: "https://github.com/edenyew/xavier-portfolio",
    projectImage: portfolio,
    skills: ["React", "Framer", "CSS"],
    techstack: [react, framermotion, css],
  },
  {
    title: "Coollights",
    subheading:
      "An e-commerce website which was designed to establish and expand the online presence of the business to drive their sales and growth.",
    sourcecode: "",
    projectImage: coollights,
    skills: ["ASP.net", "C#", "mySQL"],
    techstack: [asp_net, c_sharp, mysql],
  },
];
