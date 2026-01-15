import { useState } from 'react';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const BlurImage = ({ src, alt, className, containerClassName, ...props }: BlurImageProps) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <div className={`overflow-hidden ${containerClassName?.includes('absolute') || containerClassName?.includes('fixed') ? '' : 'relative'} ${containerClassName || ''}`}>
            
            {/* Loading Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 bg-white/5 animate-pulse z-10" />
            )}

            <img
                src={src}
                alt={alt}
                className={`
                    ${className}
                    transition-all duration-700 ease-in-out
                    ${isLoading ? 'scale-110 blur-xl grayscale opacity-0' : 'scale-100 blur-0 grayscale-0 opacity-100'}
                `}
                onLoad={() => setLoading(false)}
                {...props}
            />
        </div>
    );
};

export default BlurImage;
