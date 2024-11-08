interface SectionHeadingProps {
    heading: string;
}

export function SectionHeading({ heading }: SectionHeadingProps) {
    return (
        <h2 className="text-4xl border-b-4 font-mono font-bold py-4 mb-4">{heading}</h2>
    )
}