import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                "move-left": "moveLeft 20s linear infinite",
            },
            keyframes: {
                moveLeft: {
                    "0%": { transform: "translateX(100vw)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [require("@designbycode/tailwindcss-text-stroke")],
} satisfies Config;
