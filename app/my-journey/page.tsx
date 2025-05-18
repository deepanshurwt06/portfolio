import BackgroundDisplay from "@/components/common/backgroundDisplay";
import { CardEducation } from "@/components/journey/card-education";
import CardExperience from "@/components/journey/card-experience";
import { educationData } from "@/src/data/education";
import { experienceData } from "@/src/data/exprience";

export default function Page() {
  return (
    <>
      <BackgroundDisplay />
      <div className="container mx-auto min-h-screen px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center lg:text-4xl text-[#4cc9f0]">
          <span className="text-white">My </span> Journey
        </h2>

        <div className="flex flex-col lg:flex-row mt-10 gap-6">
          {/* education section */}

          <div className="w-full lg:w-1/2  shadow-md rounded-lg p-6 ">
            <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
            <div className="relative pl-6 border-l-2 border-[#50b4d3]">
              <ul className="space-y-4">
                {educationData.map((edu, index) => (
                  <li key={index}>
                    <CardEducation {...edu} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* experience  section */}

          <div className="w-full lg:w-1/2  shadow-md rounded-lg p-6 ">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Experience
            </h3>
            <div className="relative pl-6 border-l-2 border-[#50b4d3]">
              <ul className="space-y-4">
                {experienceData.map((exp, index) => (
                  <li key={index}>
                    <CardExperience {...exp} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
