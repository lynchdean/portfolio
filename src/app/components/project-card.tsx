interface ProjectCardProps {
    title: string;
    github: string;
    description: string;
}

export function ProjectCard({ title, github, description} : ProjectCardProps) {
    return (
        <div className="mockup-code">
            <pre data-prefix="$" className="text-warning"><code>
                {title} <a href={`https://github.com/${github}`} className="text-success">(Github Link)</a>
            </code></pre>
            <pre data-prefix=">" className=""><code>{description} </code></pre>
        </div>
    );
}