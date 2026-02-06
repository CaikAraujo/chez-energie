/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Outfit"', 'sans-serif'],
            },
            colors: {
                brand: {
                    primary: '#2563eb', // blue-600
                    secondary: '#1e40af', // blue-800
                    accent: '#84cc16', // lime-500
                    dark: '#0f172a', // slate-900
                    surface: '#f8fafc', // slate-50
                },
                midnight: '#020617',
                deep: '#0B1120',
                accent: {
                    cyan: '#06b6d4',
                    lime: '#84cc16',
                    emerald: '#10b981'
                }
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
