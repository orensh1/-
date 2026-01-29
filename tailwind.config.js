/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
            colors: {
                brand: {
                    lime: '#D2F824',
                    dark: '#0A0A0A',
                    gray: '#171717',
                    light: '#F5F5F5'
                }
            }
        },
    },
    plugins: [],
}
