import { isFunction } from "../../shared";
import { useEffect, useState } from "react";

// This check is the make sure that the matchMedia function exists. In the test environement, that
// function is not available.
export const supportsMatchMedia = isFunction(window?.matchMedia);

// Copied from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/utils/src/useMediaQuery.ts
export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => supportsMatchMedia
        ? window.matchMedia(query).matches
        : false
    );

    useEffect(() => {
        if (!supportsMatchMedia) {
            return;
        }

        const mediaQueryList = window.matchMedia(query);

        const onChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener("change", onChange);

        return () => {
            mediaQueryList.removeEventListener("change", onChange);
        };
    }, [query]);

    return matches;
}
