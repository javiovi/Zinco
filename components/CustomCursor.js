import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Update cursor position on mouse move
        const handleMouseMove = (event) => {
            setCursorPosition({
                x: event.clientX - 18,
                y: event.clientY - 18,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className='fixed h-10 w-10 top-0 left-0 rounded-full border-white bg-white border-2 z-[100] pointer-events-none mix-blend-difference '
                style={{
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                    transition: 'transform 0.16s ease-out', // Adjust the duration and easing as needed
                }}>
            </div>
            {/* <div
                className='fixed h-1 w-1 top-0 left-0 rounded-full bg-[#3e3391] z-[100] pointer-events-none mix-blend-difference'
                style={{
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                    transition: 'transform 0.1s ease-out', // Adjust the duration and easing as needed
                }}>
            </div> */}
        </>
    );
}
