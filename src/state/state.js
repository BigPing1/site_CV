import Diploma from "../pdf/Diploma.pdf";
import cyberBasic from "../pdf/Cisco.pdf";
import MaxD from "../pdf/maxd.pdf";
import Essential from "../pdf/Essentials.pdf";
import bitsBytes from "../pdf/Bits&bytes.pdf";
import basicTech from "../pdf/Basicsof.pdf";

let state = {
  portfolioPage: {
    projects: [
      {
        id: 1,
        name: "CV first version",
        href: "https://bigping1.github.io/My_sity_CV_portfolio/",
        adaptive: "yes",
        image: "https://cdn-icons-png.flaticon.com/512/8347/8347432.png",
      },
      {
        id: 2,
        name: "Steel company",
        href: "https://bigping1.github.io/site_for_harness_makers/",
        adaptive: "yes",
        image:
          "https://bigping1.github.io/site_for_harness_makers/images/logo_eco-seel-new.png",
      },
      {
        id: 3,
        name: "Kingdom Flowers",
        href: "https://bigping1.github.io/site_kingdom_flowers/",
        adaptive: "no",
        image:
          "https://bigping1.github.io/site_kingdom_flowers/images/knihte_logo-VERS4.png",
      },
    ],
  },
  otherPage: {
    certification: [
      {
        id: 1,
        name: "Junior Bachelor`s Diploma 'Computer Sciences'",
        pdf: Diploma,
        issued: "Odesa I.I. Mechnikov National University",
        link: "",
        image:
          "https://i.pinimg.com/564x/90/0f/36/900f364b22baa2ccef3284caf272c4c1.jpg",
      },
      {
        id: 2,
        name: "Bits and bytes of computer network",
        pdf: bitsBytes,
        issued: "Google(Coursera)",
        link: "https://www.coursera.org/account/accomplishments/verify/5D2LBW7JQWKQ?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQot_F7YgVS780Itz-oVa4HSetKYzHUO9BqxQ&s",
      },
      {
        id: 3,
        name: "Basics of technical support",
        pdf: basicTech,
        issued: "Google(Coursera)",
        link: "https://www.coursera.org/account/accomplishments/verify/F9TBFAAYAS5R?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQot_F7YgVS780Itz-oVa4HSetKYzHUO9BqxQ&s",
      },
      {
        id: 4,
        name: "Cybersecurity Essentials",
        pdf: Essential,
        issued: "Cisco",
        link: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tGnvloR2qPhuzYBuPMgJEdUWSYsEfmCwKw&s",
      },
      {
        id: 5,
        name: "Introduction to Cybersecurity",
        pdf: cyberBasic,
        issued: "Cisco",
        link: "",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tGnvloR2qPhuzYBuPMgJEdUWSYsEfmCwKw&s",
      },
      {
        id: 6,
        name: "Modeling in Autodesk 3Ds Max",
        pdf: MaxD,
        issued: "Osvita",
        link: "",
        image:
          "https://www.clipartmax.com/png/full/110-1108805_step-by-step-quality-education-poster-making.png",
      },
    ],
  },
};

export default state;
