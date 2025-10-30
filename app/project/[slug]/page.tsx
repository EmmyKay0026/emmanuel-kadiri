import React from "react";
import MainTemplates from "@/components/templates/MainTemplate";
import Image from "next/image";

const ProjectPageView = () => {
  return (
    <MainTemplates>
      <div className="min-h-screen w-full px-[20px] md:px-[50px] lg:px-[70px] py-20">
        {/* Project Header */}
        <div className="w-full flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryGreen">
            Project Title
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            A detailed description of the project goes here. This should include
            the context, challenges, and objectives of the project.
          </p>
        </div>

        {/* Project Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/gallery/project1.jpg"
              alt="Project Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/gallery/project2.jpg"
              alt="Project Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 life_before inline-block">
                Project Overview
              </h2>
              <p className="text-muted-foreground">
                Detailed explanation of the project, including the problem it
                solves, the approach taken, and the final outcome.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 life_before inline-block">
                Technical Details
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Technology 1</li>
                <li>Technology 2</li>
                <li>Technology 3</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 life_before inline-block">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </section>
          </div>

          {/* Project Metadata */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Client
                  </h4>
                  <p className="text-foreground">Client Name</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Timeline
                  </h4>
                  <p className="text-foreground">3 months</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Role
                  </h4>
                  <p className="text-foreground">Lead Developer</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Website
                  </h4>
                  <a href="#" className="text-primaryGreen hover:underline">
                    View Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainTemplates>
  );
};

export default ProjectPageView;
