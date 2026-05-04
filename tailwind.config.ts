import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inria: ["var(--font-inria)", "serif"],
        "lib-sans": ["var(--font-libertinus-sans)", "sans-serif"],
        "lib-serif": ["var(--font-libertinus-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
