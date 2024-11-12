import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

interface ProjectHighlightProps {
    title: string;
    description: string;
    tech: Array<string>;
    image: string;
    link: string;
    github: string;
    bgClass: string;
}


export function ProjectHighlight({title, description, tech, image, link, github, bgClass}: ProjectHighlightProps) {
    return (
        <div
            className={`card lg:card-side bg-base-300 text-base-content ${bgClass} shadow-xl mb-8`}>
            <div className="card-body">
                <h2 className="card-title text-6xl">{title}</h2>
                <p className="text-2xl">{description}</p>
                <div className="join pb-2">
                    {tech.map((tech) => (
                        <span key={tech} className="badge badge-outline mr-2">{tech}</span>
                    ))}
                </div>
                <div className="card-actions justify-start">
                    <a href={link} target="_blank" className="btn"><FaExternalLinkAlt/>Link</a>
                    <a href={github} target="_blank" className="btn"><FaGithub/>GitHub</a>
                </div>
            </div>
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="h:48 w-48 lg:h-64 lg:w-64 p-4"/>
            </figure>
        </div>
    )
}