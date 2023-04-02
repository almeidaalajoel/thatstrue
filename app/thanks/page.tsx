"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const main = document.getElementById("main");
        const text = document.getElementById("text");
        const getColors = () => {
            return [
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
            ];
        };
        if (main && text) {
            const [r1, g1, b1] = getColors();
            const [r2, g2, b2] = getColors();
            main.style.backgroundColor = `rgb(${r1},${g1},${b1})`;
            main.style.color = `rgb(${r2},${g2},${b2})`;
        }
        setInterval(() => {
            if (main && text) {
                const [r1, g1, b1] = getColors();
                const [r2, g2, b2] = getColors();
                main.style.backgroundColor = `rgb(${r1},${g1},${b1})`;
                main.style.color = `rgb(${r2},${g2},${b2})`;
            }
        }, 1000);
    });

    return (
        <main
            id="main"
            className="flex min-h-screen flex-col items-center justify-center p-24"
        >
            <div id="box" className="border-8 rounded-md p-32">
                <div id="text" className="text-[200px]">
                    ok thanks
                </div>
            </div>
        </main>
    );
}
