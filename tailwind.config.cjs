/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            body: ['"Source Sans Pro"'],
            mono: ['"IBM Plex Mono"'],
            sans: ["Work sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
