import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss/types/config";
import { withTV } from "tailwind-variants/transformer";

/** @type {import('tailwindcss').Config} */
const config = withTV({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
        gelatrial: "var(--font-gelatrial)",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      width: {
        base: "var(--base-size)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        labs: {
          foreground: {
            DEFAULT: "var(--foreground)",
          },
          background: "var(--background)",
          muted: "var(--muted)",
          border: "var(--border)",
        },
      },
      screens: {
        xs: "380px",
        sm: "445px",
        md: "768px",
        lg: "1024px",
        "lg.next": "1024.68px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1660px",
        "4xl": "1920px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container-base": {
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "var(--base-size)",
          margin: "auto",
        },
      });
    }),
  ],
} satisfies Config);

export default config;
