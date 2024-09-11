"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Detaillia Website Development",
    description: "Developed the frontend using Angular 17 and integrated PayPal/Stripe payments.",
    image: "/images/projects/detaillia.png",  
    tag: ["All", "Internships"],
    gitUrl: "https://github.com/your-repo",
    previewUrl: "https://detaillia.com",  
  },
  {
    id: 2,
    title: "Marrakech Municipality Website",
    description: "Created responsive user interfaces using Angular and Material UI.",
    image: "/images/projects/marrakech.png",
    tag: ["All", "Internships"],
    gitUrl: "https://github.com/your-repo",
    previewUrl: "https://marrakech.ma",
  },
  {
    id: 3,
    title: "Développement d'un site web pour les clubs ENSAS",
    description: "Développement des modules de gestion des membres, des événements, et des ressources.",
    image: "/images/projects/ensas-clubs.png", // add the appropriate image
    tag: ["All", "Academic"],
    gitUrl: "https://github.com/your-repo",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Développement d'un Chatbot pour l'agence LA FORAIN-Immobilier",
    description: "Développement d'un chatbot avec intégration de PyTorch et Flask.",
    image: "/images/projects/chatbot.png", // add the appropriate image
    tag: ["All", "Academic"],
    gitUrl: "https://github.com/your-repo",
    previewUrl: "#",
  },
  {
    id: 5,
    title: "Développement d'un site web e-commerce",
    description: "Conception des interfaces utilisateurs et fonctionnalités d'authentification.",
    image: "/images/projects/e-commerce.png", // add the appropriate image
    tag: ["All", "Academic"],
    gitUrl: "https://github.com/your-repo",
    previewUrl: "#",
  }
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Internships"
          isSelected={tag === "Internships"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Academic"
          isSelected={tag === "Academic"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
