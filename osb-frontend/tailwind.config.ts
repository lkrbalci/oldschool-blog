import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'primary': '#0000A8',
      'secondary': '#00A8A8',
      'trinary': '#A8A8A8',
      'fourth': '#F8FCF8',
      'black': '#000',
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
