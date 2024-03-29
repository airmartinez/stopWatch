import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => clearInterval(intervalIdRef.current);
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };

    const formatTime = () => {
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        const seconds = Math.floor(DDA / 1000) % 60;
        const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

        const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

        return `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}.${formatDigit(milliseconds)}`;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div className="bg-black p-4 rounded-full mb-4 text-4xl">{formatTime()}</div>
            <div className="flex justify-center space-x-4">
                <button
                    className={`px-4 py-2 bg-${isRunning ? 'red' : 'green'}-500 text-white rounded-md font-semibold`}
                    onClick={isRunning ? stop : start}
                >
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button
                    className="px-4 py-2 bg-gray-700 text-white rounded-md font-semibold"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default StopWatch;
