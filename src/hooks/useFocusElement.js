import { useRef } from "react";

export const useFocusElement = () => {
    const focusElement = useRef();
    const focus = () => {
        focusElement.current.focus();
    };

    return [focusElement, focus];
};
