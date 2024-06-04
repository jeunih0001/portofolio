import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'foreground-overlay': 'hsl(var(--foreground-overlay) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
      },
      animation: {
        enter_opacity: 'enter_opacity 200ms linear forwards',
        enter_y: 'enter_y 200ms linear forwards',
      },
      keyframes: {
        enter_opacity: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        enter_y: {
          '0%': {opacity: '0' , transform: 'translateY(-20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        }
      },
      fontFamily: {
        special: ['var(--font-anton)']
      },
      spacing: {
        navbar: '5rem'
      }
    },
  },
  plugins: [],
};
export default config;
