/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "3xl": { min: "1800px" },
      xxl: { max: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "991px" },
      md: { max: "768px" },
      sm: { max: "540px" },
      xsm: { max: "377px" },
    },
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        primaryyellow: "#fbee44",
      },
      backgroundImage: {
        gradientyellowbg:
          "linear-gradient(90deg, rgba(255,222,89,1) 20%, rgba(255,145,77,1) 80%)",
      },
    },
      backgroundImage: theme => ({
        'linear-orange-yellow': 'linear-gradient(to right, #f97316, #fde047)',
      }),
  },
  plugins: [],
};
