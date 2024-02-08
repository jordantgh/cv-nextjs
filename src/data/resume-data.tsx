import Link from "next/link";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

interface Course {
  name: string;
  badges?: string[];
}

interface EducationEntry {
  institution: string;
  location: string;
  title: string;
  description: string;
  start: string;
  end?: string;
  courses?: Course[];
}

export const RESUME_DATA = {
  name: "Jordan Taylor",
  initials: "JT",
  location: "Edinburgh",
  locationLink: "https://www.google.com/maps/place/Edinburgh",
  about:
    "PhD candidate at the University of Edinburgh, researching on IFITM Proteins as Regulators of Cytokine Production and Radioresistance in Cancer.",
  summary:
    <>
    Passionate about biochemistry, immunology, genetics, and all things data. Check out my {" "}
    <Link className="underline" href="https://jordant.co.uk/blog/">website</Link> for more about me.
  </>,
  avatarUrl: "https://jordant.co.uk/IMG_1674_Original.jpg",
  personalWebsiteUrl: "https://jordant.co.uk",
  contact: {
    email: "jtaylor81284@hotmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jordan-taylor-6822b373/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/jordantgh",
        icon: GitHubIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/jtaylor_tweets",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      institution: "University of Edinburgh",
      location: "Edinburgh",
      title: "MRC Precision Medicine PhD",
      description:
        '"IFITM Proteins as Regulators of Cytokine Production and Radioresistance in Cancer"',
      start: "2020",
      end: "2024",
      courses: [
        {
          name: "Introduction to Practical Programming with Objects",
          badges: ["Java", "GUI"],
        },
        {
          name: "Functional Genomic Technologies",
          badges: ["R", "Genomics"],
        },
        {
          name: "Programming for the Life Sciences",
          badges: ["Python"],
        },
        {
          name: "Data Science (MPH)",
          badges: ["R", "Data Cleaning", "Public Health"],
        },
        {
          name: "Introduction to Statistical Methods",
          badges: ["R", "Statistics"],
        },
        {
          name: "Global Health Governance (MPH)",
          badges: ["Public Health"],
        },
        {
          name: "Public Health and Health Policy (MPH)",
          badges: ["Public Health"],
        },
      ],
    },
    {
      institution: "University of Strathclyde",
      location: "Glasgow",
      title: "BSc (Hons) Biochemistry & Immunology",
      description: "First-class honours",
      start: "2011",
      end: "2015",
    },
  ] as EducationEntry[],
  work: [
    {
      company: "University of Edinburgh",
      link: "https://www.ed.ac.uk/",
      title: "Data Science Internship: Polygenic score simulation and evaluation",
      description:
        "Simulation of different genomic conditions (e.g., epistasis, main effects, polygenic signal) and testing how different ways of calculating the polygenic score perform.",
      badges: ["Data Science", "R", "Genetics", "Public Health"],
      start: "2023",
      end: "2023",
      supervisor: "Dr. Kristin Nicodemus",
    },
    {
      company: "University of Edinburgh",
      link: "https://www.ed.ac.uk/",
      title:
        "Tools to study therapeutic targets in the tumour-interferon nexus",
      description:
        "Research project focusing on identifying therapeutic targets within the nexus of tumor development and interferon signaling to better understand treatment pathways.",
      badges: ["Biochemistry", "CRISPR"],
      start: "2019",
      end: "2020",
      supervisor: "Prof. Kathryn Ball",
    },
    {
      company: "University of Dundee",
      link: "https://www.dundee.ac.uk/",
      title:
        "Discovering novel kinase regulators of the TLR3 signaling pathway",
      description:
        "Worked on uncovering new kinase regulators linked to the TLR3 pathway, which has implications for immunology and potential treatments.",
      badges: ["Biochemistry", "Immunology"],
      start: "2016",
      end: "2019",
      supervisor: "Prof. Sir Philip Cohen",
    },
    {
      company: "University of Dundee",
      link: "https://www.dundee.ac.uk/",
      title: "Mitotic phosphorylation of the tumour suppressor nuclease FAN1",
      description:
        "Explored the phosphorylation process of FAN1, a crucial nuclease in tumor suppression during mitosis, to understand its role in cancer progression.",
      start: "2016",
      end: "2016",
      badges: ["Biochemistry", "DNA Repair", "Cancer Biology"],
      supervisor: "Prof. John Rouse",
    },
    {
      company: "University of Dundee",
      link: "https://www.dundee.ac.uk/",
      title: "Cytosolic DNA detection in human keratinocytes",
      description:
        "Conducted research on the mechanisms of cytosolic DNA detection within human keratinocytes, which could provide insights into skin-related immune responses.",
      start: "2015",
      end: "2016",
      badges: ["Biochemistry", "Immunology"],
      supervisor: "Dr. Leonie Unterholzner",
    },
  ],
  skills: [
    "R Programming",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "Data Visualization",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ],
  projects: [
    // Add any current or past projects here...
  ],
  publications: [
    {
      title:
        "Alternative splicing expands the antiviral IFITM repertoire in Chinese horseshoe bats",
      techStack: ["Biochemistry", "Genomics", "Virology"],
      description:
        "Functional and bioinformatic analysis of IFITM genes in Chinese horseshoe bats.",
      link: {
        href: "https://www.biorxiv.org/content/10.1101/2023.12.04.569605v1",
      },
      authors: "Mak N, Zhang D, Li X, Rahman K, Datta SAK, Taylor J, Liu J, Shi Z, Temperton N, Irving AT, Compton AA, Sloan RD",
      journal: "J. Biol. Chem.",
      publicationDate: "04/12/2023",
      isPublication: true,
    },
    {
      title:
        "IFITM proteins: Understanding their diverse roles in viral infection, cancer, and immunity",
      techStack: ["Writing", "Biochemistry", "Immunology"],
      description:
        "Review article on the diverse roles of IFITM proteins. *Co-first author",
      link: {
        href: "https://www.jbc.org/article/S0021-9258(22)01184-X/fulltext",
      },
      authors: "Gomez-Herranz M*, Taylor J*, Sloan RD.",
      journal: "J. Biol. Chem.",
      publicationDate: "23/11/2022",
      isPublication: true,
    },
    {
      title:
        "Identification of TBK1 complexes required for the phosphorylation of IRF3 and the production of interferon",
      techStack: ["Biochemistry", "Immunology"],
      description:
        "Discovered new upstream regulatory circuits of the TBK1-IRF3 axis.",
      link: {
        href: "https://portlandpress.com/biochemj/article/474/7/1163/49687/Identification-of-TBK1-complexes-required-for-the",
      },
      authors: "Bakshi S, Taylor J, Strickson S, McCartney T, Cohen P.",
      journal: "J. Biol. Chem.",
      publicationDate: "15/03/2017",
      isPublication: true,
    },
    {
      title:
        "IFI16 and cGAS cooperate in the activation of STING during DNA sensing in human keratinocytes",
      techStack: ["Biochemistry", "Immunology"],
      description:
        "Established IFI16 as a key regulator of the cGAS-STING pathway in human keratinocytes.",
      link: {
        href: "https://www.nature.com/articles/ncomms14392",
      },
      authors:
        "Almine JF, O'Hare CA, Dunphy G, Haga IR, Naik RJ, Atrih A, Connolly DJ, Taylor J, Kelsall IR, Bowie AG, et al.",
      journal: "Nat. Commun.",
      publicationDate: "13/02/2017",
      isPublication: true,
    },
  ],
} as const;
