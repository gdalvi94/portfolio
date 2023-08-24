// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode:"class",
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   purge: [ './pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       fontFamily:{
//         burtons : "burtons"
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Updated path
    "./components/**/*.{js,ts,jsx,tsx}", // Updated path
    "./app/**/*.{js,ts,jsx,tsx}", // Updated path
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Updated path
    "./styles/**/*.{js,ts,jsx,tsx}", // Updated path
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
