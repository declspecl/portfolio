"use client";

import clsx from "clsx";
import React, { useState, useEffect } from "react";

const SCALE_FACTOR = 0.12;
const PORTRAIT_SCALE_MULTIPLIER = 2.5;

export default function Background() {
    const [scale, setScale] = useState(1.0);

    useEffect(() => {
        function updateBackgroundScale() {
            const realScaleFactor = (window.innerHeight > window.innerWidth) ? SCALE_FACTOR * PORTRAIT_SCALE_MULTIPLIER : SCALE_FACTOR;

            const newScale = 1 + ((window.document.documentElement.scrollTop / 1000) * realScaleFactor);

            setScale(newScale);
        }

        document.addEventListener("scroll", updateBackgroundScale);

        return () => {
            document.removeEventListener("scroll", updateBackgroundScale);
        }
    }, []);

    return (
        <div
            style={{ "--scale": scale } as React.CSSProperties}
            className={clsx(
                "fixed left-0 bottom-0 w-full h-full scale-[var(--scale)] z-10 bg-background transition-[transform] duration-300 ease-out opacity-90",
                "bg-starfield bg-contain bg-repeata"
            )}
        />
    );
}
