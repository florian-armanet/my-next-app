import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '460px',
                'sm': '576px',
                'sm-down': { 'max': '575px' },
                'md': '768px',
                'md-down': { 'max': '767px' },
                'lg': '1025px',
                'lg-down': { 'max': '1024px' },
                'xl': '1240px',
                'xl-down': { 'max': '1239px' },
            },
            colors: (theme) => ({
                primary: {
                    lightest: '#ddd6fe',
                    lighter: '#a78bfa',
                    light: '#6d28d9',
                    base: '#4c1d95',
                    hover: '#2e1065',
                },
            }),
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                icon: [
                    'Icomoon',
                ],
            },
        },
    },
    plugins: [],
};
export default config;
