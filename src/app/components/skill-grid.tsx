interface SkillGridProps {
    title: string;
    skills: string[];
}

export function SkillGrid({ title, skills }: SkillGridProps) {
    return (
        <div>
            <div className="divider ">{title}</div>
            <div className="grid grid-cols-6 gap-6">
                {skills.map((skill) => (
                    <div key={skill} className="stats shadow">
                        <div className="stat">
                            <div className="stat-title text-center">{skill}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}