export type Project = {
  imgSrc: string;
  title: string;
  description: string;
  features: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
};

export const projects: Project[] = [
  {
    imgSrc: "/assets/project121.png",
    title: "RayVibe - PDF Summarizer",
    description:
      "A web application that summarizes PDF documents using advanced NLP techniques.",
    features: "PDF Upload, Text Summarization, Sentiment Analysis, and More",
    techStack:[ "Node.js", "SQL", "tailwindCSS"],
    githubLink: "https://github.com/deepanshurwt06/RayVibe",
    liveLink: "https://rayvibe.onrender.com/",
  },
  {
    imgSrc: "/assets/project2.png",
    title: "Hello Home ",
    description: "A modern, full-stack real estate liasting web application.",
    features:
      "Add, Edit, Delete listing, Search filter,infinite scroll, and more",
    techStack: ["React", "Node.js", "MongoDB", "tailwindCSS, firebase auth"],
    githubLink: "https://github.com/deepanshurwt06/Hello-Home",
    liveLink: "https://mern-auth-n05i.onrender.com/",
  },
  {
    imgSrc: "/assets/project121.png",
    title: "RayVibe - PDF Summarizer",
    description:
      "A web application that summarizes PDF documents using advanced NLP techniques.",
    features: "PDF Upload, Text Summarization, Sentiment Analysis, and More",
    techStack:[ "Node.js", "SQL", "tailwindCSS"],
    githubLink: "https://github.com/deepanshurwt06/RayVibe",
    liveLink: "https://rayvibe.onrender.com/",
  },
  
  
];
