interface ProjectCardProps {
    title: string;
    github: string;
    desc: Array<string>;
    tech: Array<string>;
}

export function ProjectCard({ title, github, desc = [], tech = []} : ProjectCardProps) {
    return (
        <div className="mockup-code">
            <pre data-prefix="$" className="text-warning"><code>
                {title} <a href={`https://github.com/${github}`} target="_blank"
                           className="text-success">(Github Link)</a>
            </code></pre>
            {desc.map((line) => (
                <pre key={line} data-prefix=">" className=""><code>{line}</code></pre>
            ))}
            <pre data-prefix=">" className=""><code>
                [{tech.join(", ")}]
            </code></pre>
        </div>
    );
}