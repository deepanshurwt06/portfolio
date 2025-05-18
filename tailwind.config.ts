/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx,js,jsx}",      // Next.js app directory (if using app router)
      "./pages/**/*.{ts,tsx,js,jsx}",    // Next.js pages directory
      "./components/**/*.{ts,tsx,js,jsx}", // Components folder
    ],
    theme: {
      screens: {
        sm: '500px',    // custom small breakpoint
        md: '768px',    // custom medium breakpoint
        lg: '1024px',   // custom large breakpoint
        xl: '1280px',
        '2xl': '1536px',
      },
      
      extend: {
        animation: {
          'spin-slow': 'spin 6s linear infinite',
          'spin-reverse-slower': 'spin-reverse 10s linear infinite',
          'spin-slowest': 'spin 14s linear infinite',
        },
        keyframes: {
          'spin-reverse': {
            from: { transform: 'rotate(360deg)' },
            to: { transform: 'rotate(0deg)' },
          },
        },
      },
    },
    plugins: [],
  };
  