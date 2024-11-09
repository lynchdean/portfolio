// Components
import {SkillGrid} from "@/app/components/skill-grid";
import {ProjectCard} from "@/app/components/project-card";
import {SectionHeading} from "@/app/components/section-heading";
import {TimelineEntry} from "@/app/components/timeline-entry";

// Data
import {hero} from "@/../data/hero.js";
import {links} from "@/../data/links.js";
import {experience} from "@/../data/experience.js";
import {skills} from "@/../data/skills.js";
import {projects} from "@/../data/projects.js";
import {hobbies} from "@/../data/hobbies.js";
import {cats} from "@/../data/cats.js";


export default function Home() {
    return (
        <div>
            <div className="hero min-h-80 bg-base-300">
                <div className="bg-[radial-gradient(circle_at_50%_55%,violet_0%,transparent_40%)]">
                    <div className="bg-[radial-gradient(circle_at_65%_55%,lime_0%,transparent_22%)]">
                        <div className="bg-[radial-gradient(circle_at_58%_40%,cyan_0%,transparent_35%)]">
                            <div className="hero-content p-16 ">
                                <div className="max-w-3xl">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">{hero.name}</h1>
                                    <h2 className="text-2xl md:text-5xl font-bold">{hero.title}</h2>
                                    <h2 className="text-lg md:text-2xl font-bold">{hero.degree}</h2>
                                    <p className="text-md md:text-lg pt-4">{hero.description1}</p>
                                    <p className="text-md md:text-lg font-bold py-4">{hero.description2}</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {links.map((link, index) => (
                                            <a key={index} href={link.url} target="_blank" className="btn">
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
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

            <div className="container px-4 mx-auto pb-8">
                <SectionHeading heading="Hobbies:"/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{hobby.title}</h2>
                                <p>{hobby.description}</p>
                            </div>
                            <figure>
                                <img src={hobby.image} alt={hobby.title}/>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container px-4 mx-auto pb-8">
                <SectionHeading heading="Cat Tax:"/>
                <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4">
                    {cats.map((cat, index) => (
                        <div key={index} className="carousel-item w-1/2">
                            <img src={cat.image} className="rounded-box" alt="Cat picture"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
