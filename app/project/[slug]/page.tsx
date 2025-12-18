import React from "react";
import MainTemplates from "@/components/templates/MainTemplate";
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/constants/projects";
import PortfolioCard from "@/components/molecules/PortfolioCard";
import { PortfolioCardListType, ProjectDetailType } from "@/types";
import TitleText from "@/components/molecules/TitleText";
import ProjectHero from "@/components/organism/ProjectHero";
import FallingText from "@/components/FallingText";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectPageView = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects: ProjectDetailType[] = projects
    .filter((p) => p.slug !== slug)

    .slice(0, 4);

  // console.log(otherProjects);

  return (
    <MainTemplates>
      <div className="absolute hidden lg:block w-[248px] h-[248px] bg-primaryGreen dark:bg-white blur-[300px] right-0 top-0" />

      <ProjectHero
        title={project.title}
        description={project.description}
        coverImage={project.coverImage}
        ctaText={project.ctaText}
        role={project.role}
        timeline={project.timeline}
        client={project.client}
        website={project.website}
      />
      <div className="min-h-screen w-full bg-accent dark:bg-secondary px-[20px] md:px-[50px] lg:px-[70px] py-20">
        {/* Project Header */}
        {/* <div className="w-full flex flex-col gap-6">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryGreen">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-accent max-w-3xl">
            {project.description}
          </p>
        </div> */}
        {/* Problem statement */}
        <section className=" flex items-center justify-center flex-wrap  md:flex-row flex-col mt-16 gap-4">
          <div className="w-full md:w-[47%]">
            {project.challenges && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white inline-block">
                  Problem statement
                </h2>
                <p className="text-muted-foreground dark:text-accent">
                  {project.challenges}
                </p>
              </>
            )}
            {project.challengesList && (
              <ul className="space-y-2 mt-2 ml-4">
                {project.challengesList.map((solution, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground dark:text-accent list-disc list-inside"
                  >
                    {solution}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-full md:w-[47%]">
            <Image
              src={project.problemImg || project.coverImage}
              className="hidden md:block rounded-lg"
              alt={project.title}
              width={500}
              height={500}
            />
          </div>
        </section>
        {/* Solution */}
        <section className=" flex items-center justify-center flex-wrap  md:flex-row flex-col mt-16 gap-4">
          <div className="w-full md:w-[47%]">
            <Image
              src={project.solutionImg || project.coverImage}
              className=" hidden md:block rounded-lg"
              alt={project.title}
              width={500}
              height={500}
            />
          </div>
          <div className="w-full md:w-[47%]">
            {project.solution && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white inline-block">
                  Solution provided
                </h2>
                <p className="text-muted-foreground dark:text-accent">
                  {project.solution}
                </p>
              </>
            )}
            {project.solutionList && (
              <ul className="space-y-2 mt-2 ml-4">
                {project.solutionList.map((solution, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground dark:text-accent list-disc list-inside"
                  >
                    {solution}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Project Images */}
        {project.images.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden "
              >
                <Image
                  src={image}
                  alt={`${project.title} Image ${index + 1}`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Project Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white inline-block">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-muted-foreground dark:text-accent space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white inline-block">
                Technical Details
              </h2>
              <ul className="list-disc list-inside text-muted-foreground dark:text-accent space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>

            {project.learnings && project.learnings.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white inline-block">
                  Experience gained
                </h2>
                <ul className="list-disc list-inside text-muted-foreground dark:text-accent space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </section>
            )}
            {/* More images */}
            {project.moreImages && project.moreImages.length > 0 && (
              <div className="mt-12 grid grid-cols-1 gap-2 lg:gap-6 ">
                {project.moreImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[200px] md:h-[400px] w-full rounded-lg overflow-hidden "
                  >
                    <Image
                      src={image}
                      alt={`${project.title} Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Metadata */}
          <div className="lg:col-span-1 space-y-6 ">
            <div className="bg-primaryGreen dark:bg-darkGreen border border-border p-6 rounded-lg shadow-sm sticky top-20">
              <h3 className="text-xl font-semibold mb-4 text-white ">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-accent">Client</h4>
                  <p className="text-foreground">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-accent">Timeline</h4>
                  <p className="text-foreground">{project.timeline}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-accent">Role</h4>
                  <p className="text-foreground">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-accent">Website</h4>
                  <a
                    href={project.website}
                    className=" dark:text-primaryGreen text-accent hover:underline transition-all peer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.ctaText}{" "}
                    <span className=" peer-hover:rotate-90 transform rotate-0 transition-all ">
                      {" "}
                      &#8599;
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute hidden lg:block w-[248px] h-[248px] bg-primaryGreen dark:bg-white blur-[200px] right-0 top-50%" />
          </div>
        </div>
      </div>

      <section className=" mt-20 blacken mb-10 bg-primaryGreen dark:bg-darkGreen rounded-t-[45px] w-full px-[20px] md:px-[50px] lg:px-[70px] py-20">
        <TitleText
          largeClassName="text-white "
          smallClassName="text-darkGreen dark:text-primaryGreen"
          smallHeading="There is more!"
          largeHeading="More interesting projects"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {otherProjects.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* <FallingText
        text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        // highlightClass={["highlighted"]}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      /> */}
    </MainTemplates>
  );
};

export default ProjectPageView;
