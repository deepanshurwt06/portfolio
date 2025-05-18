import BackgroundDisplay from "@/components/common/backgroundDisplay";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/src/data/projects";

export default function Page() {
  return (
    <>
      <BackgroundDisplay />
      <div className="container mx-auto min-h-screen px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 lg:mb-10 text-center lg:text-4xl text-white">
          My <span className="text-[#4cc9f0]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3-justify-center gap-6 my-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
