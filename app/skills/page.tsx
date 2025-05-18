import BackgroundDispaly from "@/components/common/backgroundDisplay";
import SkillBar from "@/components/skills/skill-bar";

export default function Page() {
  return (
    <>
      <BackgroundDispaly />
      <div className="container mx-auto min-h-screen px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 lg:mb-10 text-center lg:text-4xl text-white">
          Skills
        </h2>

        <div className="flex flex-col lg:flex-row mt-10 gap-6 ">
          <div className="w-full lg:w-1/2  shadow-md rounded-lg px-8 py-6 ">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Coding Skills
            </h3>

            <section className="border-2 border-[#29ace0] p-6 rounded-lg w-full shadow-md flex flex-col gap-3 mt-8 relative group overflow-hidden">
              {/* transition hover */}

              <span className="absolute inset-0 bg-slate-700/20 scale-x-0 origin-left transition-transform duration-800 ease-in-out group-hover:scale-x-100 z-0" />

              <SkillBar
                heading="Programming (Java, Python, JavaScript, TypeScript)"
                skills={85}
              />

              <SkillBar
                heading="Web Development (React, Node, Next, Firebase)"
                skills={93}
              />

              <SkillBar
                heading="Database Management (SQL, MongoD)"
                skills={80}
              />

              <SkillBar heading="Version Control (Git, GitHub)" skills={83} />

              <SkillBar heading="Concepts (DSA ,OOPs, OS)" skills={88} />
            </section>
          </div>

          <div className="w-full lg:w-1/2  shadow-md rounded-lg px-8 py-6 ">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Professional Skills
            </h3>

            <section className="border-2 border-[#29ace0] p-6 rounded-lg w-full shadow-md flex flex-col gap-3 mt-8 relative group overflow-hidden">
              {/* transition hover */}

              <span className="absolute inset-0 bg-slate-700/20 scale-x-0 origin-left transition-transform duration-800 ease-in-out group-hover:scale-x-100 z-0" />

              <SkillBar heading="Team Collaboration " skills={85} />

              <SkillBar heading="UI/UX Design Principles " skills={72} />

              <SkillBar
                heading="Problem-Solving & Critical Thinking"
                skills={90}
              />

              <SkillBar heading="Agile & Scrum Methology" skills={88} />

              <SkillBar
                heading="Effective Communication & Leadership"
                skills={85}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
