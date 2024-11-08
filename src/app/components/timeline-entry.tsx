interface TimelineEntryProps {
    year: string;
    company: string;
    title: string;
    location: string;
    description: Array<string>;
    isFirst?: boolean;
    isLast?: boolean;
}

export function TimelineEntry({
                                  year,
                                  company,
                                  title,
                                  location,
                                  description = [],
                                  isFirst = false,
                                  isLast = false
                              }: TimelineEntryProps) {
    return (
        <li>
            {!isFirst && <hr/>}
            <div className="timeline-start mb-auto pb-4 md:text-end">
                <time className="font-mono italic">{year}</time>
                <div className="text-lg font-black">{company}</div>
                <div className="text-lg font-black">{title}</div>
                <div className="text-lg ">{location}</div>

            </div>
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"/>
                </svg>
            </div>
            <div className="timeline-end mb-auto pb-4">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl text-neutral-400 font-medium">Details</div>
                    <div className="collapse-content">
                        <ul className="list-disc ms-6">
                            {description.map((line) => (
                                <li key={line} className="text-start mb-4">{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {
                !isLast && <hr/>
            }
        </li>
    )
}