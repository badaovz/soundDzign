/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            fontPrimary: ['Inter', 'serif'],
            fontSecond: ['Alegreya', 'serif'],
        },
        colors: {
            black: '#000',
            blackLight: '#181E1E',
            white: '#fff',
            pinkColor: '#E63946',
            pinkLight: '#FF6864',
            yellowColor: '#FFCA28',
            'rgba-5': 'rgba(0, 0, 0, .5)',
        },
        backgroundImage: {
            headerBg: "url('./src/assets/images/heroImg.png')",
        },
    },
    plugins: [],
};
