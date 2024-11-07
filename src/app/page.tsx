import {SkillGrid} from "@/app/components/skill-grid";
import {ProjectCard} from "@/app/components/project-card";

export default function Home() {
  return (
      <div>
          <div className="hero min-h-80 bg-gradient-to-br from-slate-500 to-fuchsia-300">
              <div className="hero-content text-slate-200 p-24">
                  <div className="max-w-lg">
                      <h1 className="text-7xl font-bold">Dean Lynch</h1>
                      <h2 className="text-5xl font-bold">Software Engineer</h2>
                      <p className="text-lg pt-4">I am a software engineer with a passion for full stack development.
                          I have experience with a variety of technologies including React, Node.js, and Python.
                          I am always looking to learn new things and improve my skills.
                      </p>
                  </div>
              </div>
          </div>

          <div className="container mx-auto pb-8">
              <h2 className="text-5xl font-bold py-4">Skills:</h2>
                <SkillGrid title="Languages" skills={["Python", "Java", "JavaScript", "TypeScript"]} />
                <SkillGrid title="Frameworks" skills={["Django", "Flask", "React", "Next.js", "Tailwind CSS", "Bootstrap"]} />
                <SkillGrid title="Tools" skills={["Git", "Selenium", "Jenkins", "Jira", "Docker", "AWS", "SQL", "Linux", "Windows"]} />
          </div>

          <div className="container mx-auto pb-8">
              <h2 className="text-5xl font-bold py-4">Highlighted Projects:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard title="pizzapool" github="lynchdean/pizzapool" description="A carpool-style group ordering web app. Used by one of the most popular run clubs in Dublin." />
                    <ProjectCard title="Mild Watch Face" github="lynchdean/MildWatchFace " description="Garmin watch face for Mild Activity Run CLub" />
                    <ProjectCard title="Dean's Simple Watch Face" github="lynchdean/DeansSimpleWatchFace " description="A simple data-rich watch face for Garmin devices." />
                </div>
          </div>
      </div>
  );
}
