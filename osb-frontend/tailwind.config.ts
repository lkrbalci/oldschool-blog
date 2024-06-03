import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            transform: "skewX(9deg)",
          },
          "10%": {
            transform: "skewX(-8deg)",
          },
          "20%": {
            transform: "skewX(7deg)",
          },
          "30%": {
            transform: "skewX(-6deg)",
          },
          "40%": {
            transform: "skewX(5deg)",
          },
          "50%": {
            transform: "skewX(-4deg)",
          },
          "60%": {
            transform: "skewX(3deg)",
          },
          "70%": {
            transform: "skewX(-2deg)",
          },
          "80%": {
            transform: "skewX(1deg)",
          },
          "90%": {
            transform: "skewX(0deg)",
          },
          "100%": {
            transform: "skewX(0deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        "random-lg":
          "rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px, rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px",
        "random-sm": "rgba(0, 0, 0, 0.4) 5px 5px",
      },
    },
    colors: {
      primary: "#0000A8",
      secondary: "#00A8A8",
      trinary: "#A8A8A8",
      fourth: "#F8FCF8",
      black: "#000",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;

// @keyframes wiggle {
//   0% {
//     transform: skewX(9deg);
//   }
//   10% {
//     transform: skewX(-8deg);
//   }
//   20% {
//     transform: skewX(7deg);
//   }
//   30% {
//     transform: skewX(-6deg);
//   }
//   40% {
//     transform: skewX(5deg);
//   }
//   50% {
//     transform: skewX(-4deg);
//   }
//   60% {
//     transform: skewX(3deg);
//   }
//   70% {
//     transform: skewX(-2deg);
//   }
//   80% {
//     transform: skewX(1deg);
//   }
//   90% {
//     transform: skewX(0deg);
//   }
//   100% {
//     transform: skewX(0deg);
//   }
// }
