import {ReactNode} from "react";

interface SectionProps {
    heading: string;
    children?: ReactNode;
}

export function Section({heading, children}: SectionProps) {
    return (
        <div className="container px-4 mx-auto pb-8">
            <h2 className="text-4xl border-b-4 font-mono font-bold py-4 mb-4">{heading}</h2>
            {children}
        </div>
    )
}