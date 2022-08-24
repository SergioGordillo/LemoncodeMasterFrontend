import React, { useState } from "react";

export const useDebounce = (initialValue: string) => {
    const [debounceValue, setDebounceValue] = useState(initialValue);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(initialValue)
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    }, [initialValue])

}