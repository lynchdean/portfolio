interface SectionHeadingProps {
    heading: string;
}

export function SectionHeading({ heading }: SectionHeadingProps) {
    return (
        <h2 className="text-4xl font-bold py-4">{heading}</h2>
    )
}