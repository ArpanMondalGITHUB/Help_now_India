/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        primary: '#9b87f5',   // Brand purple color
        secondary: '#ded9fa', // Light purple backgrounds
        emergency: '#ff7676',  // Softer red for emergency button
        white: '#ffffff',
        black: '#333333',
        gray: '#9e9e9e',
        lightGray: '#f5f5f5',
        darkGray: '#616161',
      }
    },
  },
  plugins: [],
}

