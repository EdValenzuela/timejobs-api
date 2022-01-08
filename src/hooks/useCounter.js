import { useState } from "react"

export const useCounter = (init = 0) => {
    const [count, setCount] = useState(init);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if(count <= 0) return;
        setCount(count - 1);
    }

    return {
        count,
        handleIncrement,
        handleDecrement
    }

}