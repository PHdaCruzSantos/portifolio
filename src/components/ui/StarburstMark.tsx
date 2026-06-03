interface StarburstMarkProps {
    className?: string;
}

const rays = Array.from({ length: 24 }, (_, index) => index * 15);

const StarburstMark = ({ className = "" }: StarburstMarkProps) => {
    return (
        <div className={`relative aspect-square ${className}`} aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
            {rays.map((rotation, index) => (
                <span
                    key={rotation}
                    className="absolute left-1/2 top-1/2 h-px origin-left bg-current"
                    style={{
                        width: index % 2 === 0 ? '48%' : '38%',
                        transform: `rotate(${rotation}deg)`,
                    }}
                />
            ))}
        </div>
    );
};

export default StarburstMark;
