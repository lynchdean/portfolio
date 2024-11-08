import {SkillGrid} from "@/app/components/skill-grid";
import {ProjectCard} from "@/app/components/project-card";
import {SectionHeading} from "@/app/components/section-heading";
import {TimelineEntry} from "@/app/components/timeline-entry";

import { experience } from "@/../data/experience.js";
import { skills } from "@/../data/skills.js";
import { projects } from "@/../data/projects.js";

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
                  {skills.map((section, index) => (
                      <SkillGrid key={index} title={section.title} skills={section.skills}/>
                  ))}
              </div>
          </div>

          <div className="container mx-auto pb-8">
              <SectionHeading heading="Projects:"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                      <ProjectCard
                          key={index}
                          title={project.title}
                          github={project.github}
                          desc={project.desc}
                          tech={project.tech}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
}
