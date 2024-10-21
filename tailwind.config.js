/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        "base-200": "rgba(17, 17, 17, 0.05)",
        "base-content": "#111111",
        "base-content-secondary": "rgba(17, 17, 17, 0.6)",
        primary: "#6047EC",
      },
    },
  },
  plugins: [],
};
