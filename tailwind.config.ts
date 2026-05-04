import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface scale - using CSS custom properties
        bg: "var(--bg)",
        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        
        // Accent
        accent: "var(--accent)",
        
        // Text scale
        "t-0": "var(--t-0)",
        "t-1": "var(--t-1)",
        "t-2": "var(--t-2)",
        "t-3": "var(--t-3)",
        
        // Border scale
        "b-0": "var(--b-0)",
        "b-1": "var(--b-1)",
        "b-2": "var(--b-2)",
        "b-3": "var(--b-3)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Figtree", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease both",
        pulse: "pulse 2s ease infinite",
      },
      keyframes: {
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
