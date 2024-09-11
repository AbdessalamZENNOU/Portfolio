"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NodeJs</li>
        <li>NestJs</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>SpringBoot</li>
      </ul>
    ),
  },
  {
    title: "Education",
  id: "education",
  content: (
    <ul className="list-disc pl-2">
      <li>
        <strong>National School of Applied Sciences, Safi</strong> <br />
        Computer Engineering and Artificial Intelligence <br />
        <span>2022 - Present</span>
      </li>
      <li>
        <strong>First Preparatory Classes of High Schools, Meknes</strong> <br />
        Preparatory Classes for Grandes Écoles - Mathematics and Physics (MP) <br />
        <span>2021 - 2022</span>
      </li>
      <li>
        <strong>Lycée Moulay Youssef, Rabat</strong> <br />
        Preparatory Classes for Grandes Écoles - Mathematics and Physics (MP) <br />
        <span>2019 - 2021</span>
      </li>
      <li>
        <strong>Lycée Moulay Ali Cherif, Temara</strong> <br />
        Baccalaureate in Physical Sciences <br />
        <span>2018 - 2019</span>
      </li>
    </ul>
  ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a full-stack web developer with a focus on building responsive and dynamic web applications.
          My expertise spans a wide range of technologies, 
          including Angular, ReactJs, NestJs, SpringBoot, NodeJs, PostgreSQL, MySQL, and TailwindCSS. 
          I have experience working on both frontend and backend Development.
           I am passionate about developing efficient and scalable applications, continuously expanding my skills, 
           and eager to collaborate with others to create innovative solutions. Currently, I am seeking opportunities
            to apply and enhance my technical expertise in real-world projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
