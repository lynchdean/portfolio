import {SkillGrid} from "@/app/components/skill-grid";
import {ProjectCard} from "@/app/components/project-card";
import {SectionHeading} from "@/app/components/section-heading";
import {TimelineEntry} from "@/app/components/timeline-entry";

import {experience} from "@/../data/experience.js";
import {skills} from "@/../data/skills.js";
import {projects} from "@/../data/projects.js";


export default function Home() {
    return (
        <div>
            <div className="hero min-h-80 bg-gradient-to-br from-slate-500 to-fuchsia-300">
                <div className="hero-content text-slate-200 p-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Dean Lynch</h1>
                        <h2 className="text-2xl md:text-5xl font-bold">Software Engineer</h2>
                        <h2 className="text-lg md:text-2xl font-bold">BSc. Computer Applications & Software
                            Engineering</h2>
                        <p className="text-md md:text-lg pt-4">I am a software engineer based in Dublin, Ireland
                            with a passion for full stack development.
                            I have experience with a variety of technologies including React, Node.js, and Python.
                        </p>
                        <p className="text-md md:text-lg font-bold py-4">
                            I am currently looking for new opportunities. If you would like to get in touch, please
                            feel free to reach out to me on LinkedIn.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a href="https://www.linkedin.com/in/deanlynch97/" target="_blank" className="btn">
                                LinkedIn
                            </a>
                            <a href="https://www.github.com/lynchdean" target="_blank" className="btn">
                                Github
                            </a>
                            <a href="https://pizzapool.app" target="_blank" className="btn">
                                pizzapool
                            </a>
                            <a href="https://apps.garmin.com/developer/ebe40baf-9d4c-4fde-b40c-b75cf3be799e/apps"
                               target="_blank" className="btn">
                                Garmin CIQ Apps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto">
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
                            isFirst={index === 0}
                            isLast={index === experience.length - 1}
                        />
                    ))}
                </ul>
            </div>

            <div className="container px-4 mx-auto pb-8 bg-ne">
                <SectionHeading heading="Skills:"/>
                <div className="rounded-2xl bg-base-200 p-4 pb-8">
                    {skills.map((section, index) => (
                        <SkillGrid key={index} title={section.title} skills={section.skills}/>
                    ))}
                </div>
            </div>

            <div className="container px-4 mx-auto pb-8">
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
