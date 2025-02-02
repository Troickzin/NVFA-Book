/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
       "white-50": "var(--white-50)",
        "white-100": "var(--white-100)",
        "white-200": "var(--white-200)",
        "white-300": "var(--white-300)",

        "dark-50": "var(--dark-50)",
        "dark-100": "var(--dark-100)",
        "dark-200": "var(--dark-200)",
        "dark-300": "var(--dark-300)",

        "eft-blue": "var(--eft-blue)",
        "eft-blue-100": "var(--eft-blue-100)",
        "eft-blue-200": "var(--eft-blue-200)",
        "eft-blue-300": "var(--eft-blue-300)",
        "eft-blue-400": "var(--eft-blue-400)",
        "eft-blue-500": "var(--eft-blue-500)",
        
        "eft-red": "var(--eft-red)",
        "eft-red-100": "var(--eft-red-100)",
        "eft-red-button": "var(--eft-red-button)",
        "eft-red-button-hover": "var(--eft-red-button-hover)",
        "eft-red-button-active": "var(--eft-red-button-active)",
        
        "eft-yellow": "var(--eft-yellow)",
        "eft-yellow-100": "var(--eft-yellow-100)",
        "eft-yellow-hover": "var(--eft-yellow-hover)",
        "eft-yellow-active": "var(--eft-yellow-active)",
      },
      animation: {
        'book-animation': 'var(--book-animation)',
        'kindle-animation': 'var(--kindle-animation)',
        'bg-detail-animation': 'var(--bg-detail-animation)',
      }
    },
  },
  plugins: [],
};
