interface HobbyProps {
    title: string;
    description: string;
    image: string;
}

export function Hobby({title, description, image}: HobbyProps) {
    return (
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <figure>
                <img src={image} alt={title}/>
            </figure>
        </div>
    )
}