import Project from "../public/assests/nextfood.png";
import Project1 from "../public/assests/ishortner.png";
import Project3 from "../public/assests/xdome.png";
import Project4 from "../public/assests/vitriol.png";
import Project5 from "../public/assests/fichta.png";
import Drophq from "../public/assests/drophq.png";
import Credizest from "../public/assests/credizest.png";

export const AllProjectData = [
  {
    id: 1,
    ProjectName: "Drop-hq  ",
    ProjectTechUsed: ["Next Js", "SCSS", "Redux ", "Vercel", "Node js"],
    ProjectDescription:
      "A Low budget Food Ordering and Delivery Web Application for Students ",
    ProjectImage: Drophq,
    ProjectUrl: "https://drop-hq.vercel.app/",
    GithubUrl: "https://github.com/blyncnov/DropHQ",
    reverseX: false,
    reverseY: false,
  },
  {
    id: 2,
    ProjectName: "!Vitriol  ",
    ProjectTechUsed: [
      "Next Js",
      "styled-Components",
      "vercel",
      "ethers js",
      "MetaMask",
    ],
    ProjectDescription:
      "A web3 charity dapp Website template. Awesome UI , connected to ethers and blockchain.",
    ProjectImage: Project4,
    ProjectUrl: "https://vitriol-neon.vercel.app",
    GithubUrl: " https://github.com/blyncnov/-Vitriol",
    reverseX: true,
    reverseY: false,
  },
  {
    id: 3,
    ProjectName: "Credizest ",
    ProjectTechUsed: ["Next Js", "styled-Components", "Vercel"],
    ProjectDescription: "Credizest is a Fintech landing page template.",
    ProjectImage: Credizest,
    ProjectUrl: "https://credizestx.vercel.app",
    GithubUrl: " https://github.com/blyncnov/credizest",
    reverseX: false,
    reverseY: false,
  },
  {
    id: 4,
    ProjectName: "Fichta",
    ProjectTechUsed: [
      "Next Js",
      "styled-Components",
      "Redux toolkit",
      "vercel",
      "MetaMask",
    ],
    ProjectDescription:
      "A web3 Ecommerce dapp for grocery, connected to ethers and blockchain.  ",
    ProjectImage: Project5,
    ProjectUrl: "https://fichta-mart.vercel.app",
    GithubUrl: "https://github.com/blyncnov/fichta ",
    reverseX: true,
    reverseY: false,
  },
  {
    id: 5,
    ProjectName: "NextFood Template",
    ProjectTechUsed: ["React Js", "Next js", "Styled-Components", "Vercel"],
    ProjectDescription:
      "A web app for Food Website template.  this project includes all the features of the website.",
    ProjectImage: Project,
    ProjectUrl: "https://next-food-app-nine.vercel.app",
    GithubUrl: " ",
    reverseX: false,
    reverseY: false,
  },
  {
    id: 6,
    ProjectName: "Ishortner",
    ProjectTechUsed: ["React Js", "styled-Components", "Netlify"],
    ProjectDescription:
      "A web app for url link shortner to give easy and memorable url to your website.",
    ProjectImage: Project1,
    ProjectUrl: "https://ishortner.netlify.app",
    GithubUrl: " ",
    reverseX: true,
    reverseY: false,
  },

  {
    id: 7,
    ProjectName: "Xdome Todo Application ",
    ProjectTechUsed: [
      "Next Js",
      "styled-Components",
      "Redux toolkit",
      "vercel",
    ],
    ProjectDescription:
      "A TODO web app managed with redux toolkit, slick design and well structured components.",
    ProjectImage: Project3,
    ProjectUrl: "https://xdome-todo.vercel.app",
    GithubUrl: "https://github.com/blyncnov/Xdome ",
    reverseX: false,
    reverseY: false,
  },
];

export default AllProjectData;
