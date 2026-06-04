import { forwardRef, useImperativeHandle, useRef } from "react";

export interface WireGlobeMarkHandle {
  triggerPulse: (accentColor?: string) => void;
}

interface WireGlobeMarkProps {
  className?: string;
}

const WireGlobeMark = forwardRef<WireGlobeMarkHandle, WireGlobeMarkProps>(
  ({ className = "" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      triggerPulse(accentColor?: string) {
        const el = containerRef.current;
        if (!el) return;

        // Remove existing pulse class to allow re-trigger
        el.classList.remove("globe-pulsing");
        void el.offsetWidth; // reflow

        if (accentColor) {
          el.style.setProperty("--globe-pulse-color", accentColor);
        }
        el.classList.add("globe-pulsing");

        el.addEventListener(
          "animationend",
          () => el.classList.remove("globe-pulsing"),
          { once: true },
        );
      },
    }));

    return (
      <div
        ref={containerRef}
        className={`wire-globe-mark relative aspect-square ${className}`}
        aria-hidden="true"
      >
        {/* Ripple rings — animated by JS-added class */}
        <span className="globe-ripple globe-ripple-1" />
        <span className="globe-ripple globe-ripple-2" />
        <span className="globe-ripple globe-ripple-3" />
        <span className="wire-globe-art absolute inset-0 bg-current" />
      </div>
    );
  },
);

WireGlobeMark.displayName = "WireGlobeMark";

export default WireGlobeMark;
