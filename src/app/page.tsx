// Components
import {Section} from "@/app/components/section";
import {SkillGrid} from "@/app/components/skill-grid";
import {ProjectHighlight} from "@/app/components/project-highlight";
import {ProjectCard} from "@/app/components/project-card";
import {TimelineEntry} from "@/app/components/timeline-entry";
import {Hobby} from "@/app/components/hobby";

// Data
import {hero} from "@/../data/hero.js";
import {experience} from "@/../data/experience.js";
import {education} from "@/../data/education.js";
import {skills} from "@/../data/skills.js";
import {projects} from "@/../data/projects.js";
import {hobbies} from "@/../data/hobbies.js";
import {projectHighlights} from "../../data/projectHighlights";


export default function Home() {
    return (
        <div>
            <div className="hero min-h-80 bg-neutral-content">
                <div className="bg-[radial-gradient(circle_at_50%_55%,violet_0%,transparent_40%)]">
                    <div className="bg-[radial-gradient(circle_at_65%_55%,lime_0%,transparent_28%)]">
                        <div className="bg-[radial-gradient(circle_at_58%_40%,cyan_0%,transparent_35%)]">
                            <div className="hero-content p-16 text-neutral">
                                <div className="max-w-3xl">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">{hero.name}</h1>
                                    <h2 className="text-2xl md:text-5xl font-bold">{hero.title}</h2>
                                    <h2 className="text-lg md:text-2xl font-bold">{hero.degree}</h2>
                                    <p className="text-md md:text-lg pt-4">{hero.description1}</p>
                                    <p className="text-md md:text-lg font-bold py-4">{hero.description2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section heading={"Experience:"}>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {experience.map((entry, index) => (
                        <TimelineEntry key={index}
                                       isFirst={index === 0}
                                       isLast={index === experience.length - 1}
                                       {...entry}
                        />
                    ))}
                </ul>
            </Section>

            <Section heading={"Education:"}>
                <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {education.map((entry, index) => (
                        <TimelineEntry key={index}
                                       isFirst={index === 0}
                                       isLast={index === education.length - 1}
                                       {...entry}
                        />
                    ))}
                </div>
            </Section>

            <Section heading="Skills:">
                <div className="rounded-2xl bg-base-200 p-4 pb-8">
                    {skills.map((section, index) => (
                        <SkillGrid key={index} {...section} />
                    ))}
                </div>
            </Section>

            <Section heading="Projects:">
                {projectHighlights.map((highlight, index) => (
                    <ProjectHighlight key={index} {...highlight}/>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project}/>
                    ))}
                </div>
            </Section>

            <Section heading="Hobbies:">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {hobbies.map((hobby, index) => (
                        <Hobby key={index} {...hobby} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
