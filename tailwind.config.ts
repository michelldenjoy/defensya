import type { Config } from "tailwindcss";

const config: Config = {
  
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        defensya: {
          navy: {
            DEFAULT: "#0A1128",
            light: "#111B3D",
            accent: "#1E40AF",
          },
          blue: "#3B82F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;