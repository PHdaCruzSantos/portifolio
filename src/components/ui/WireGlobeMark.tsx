interface WireGlobeMarkProps {
    className?: string;
}

const meridians = [64, 42, 22];
const parallels = [64, 42, 22];

const WireGlobeMark = ({ className = '' }: WireGlobeMarkProps) => {
    return (
        <div className={`relative aspect-square rounded-full border border-current ${className}`} aria-hidden="true">
            <span className="absolute inset-0 rounded-full border border-current/75" />
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current/75" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current/75" />

            {meridians.map((width) => (
                <span
                    key={`m-${width}`}
                    className="absolute left-1/2 top-0 h-full -translate-x-1/2 rounded-full border border-current/70"
                    style={{ width: `${width}%` }}
                />
            ))}

            {parallels.map((height) => (
                <span
                    key={`p-${height}`}
                    className="absolute left-0 top-1/2 w-full -translate-y-1/2 rounded-full border border-current/70"
                    style={{ height: `${height}%` }}
                />
            ))}
        </div>
    );
};

export default WireGlobeMark;
