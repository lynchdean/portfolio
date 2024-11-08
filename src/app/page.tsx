import {SkillGrid} from "@/app/components/skill-grid";
import {ProjectCard} from "@/app/components/project-card";
import {SectionHeading} from "@/app/components/section-heading";
import {TimelineEntry} from "@/app/components/timeline-entry";

import { experience } from "@/../data/experience.js";

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
              <SectionHeading heading="Experience:"/>
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  {experience.map((entry, index) => (
                      <TimelineEntry
                          key={index}
                          year={entry.year}
                          company={entry.company}
                          title={entry.title}
                          location={entry.location}
                          description={entry.description}
                          isLast={index === experience.length - 1}
                      />
                  ))}
              </ul>
          </div>

          <div className="container mx-auto pb-8 bg-ne">
              <SectionHeading heading="Skills:"/>
              <div className="rounded-2xl bg-neutral-100 p-4 pb-8">
                  <SkillGrid title="Languages" skills={["Python", "Java", "JavaScript", "TypeScript"]}/>
                  <SkillGrid title="Frameworks"
                             skills={["Django", "Flask", "React", "Next.js", "Tailwind CSS", "Bootstrap"]}/>
                  <SkillGrid title="Tools"
                             skills={["Git", "Selenium", "Jenkins", "Jira", "Docker", "AWS", "SQL", "Linux", "Windows"]}/>
              </div>
          </div>

          <div className="container mx-auto pb-8">
              <SectionHeading heading="Projects:"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectCard title="pizzapool" github="lynchdean/pizzapool"
                               desc={["A carpool-style group ordering web app.", "Used by one of the most popular run clubs in Dublin."]}
                               tech={["Python", "Django"]}/>
                  <ProjectCard title="Mild Watch Face" github="lynchdean/MildWatchFace "
                               desc={["Garmin watch face for Mild Activity Run CLub."]} tech={["MonkeyC"]}/>
                  <ProjectCard title="Dean's Simple Watch Face" github="lynchdean/DeansSimpleWatchFace"
                               desc={["A simple data-rich watch face for Garmin devices."]} tech={["MonkeyC"]}/>
                  <ProjectCard title="Portfolio" github="lynchdean/portfolio"
                               desc={["Personal portfolio website. (you are here)"]}
                               tech={["React", "Next.js", "Tailwind CSS"]}/>
                  <ProjectCard title="BirdWatch Fingal" github="lynchdean/birdwatch-fingal"
                               desc={["Website for BirdWatchIreland Fingal branch."]} tech={["React", "Bootstrap"]}/>
              </div>
          </div>
      </div>
  );
}
