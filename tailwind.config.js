/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // primary: '#1E1E1E',
        
        separator: '#3F3F3F',
        black: '#161616',
        gray: '#AEAEAE',

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
      },
      backgroundImage: {
        'paper-pattern': "radial-gradient(50% 50% at 50% 50%, rgba(174, 174, 174, 0) 0%, rgba(174, 174, 174, 0.94) 100%), linear-gradient(rgba(22, 22, 22, 0.1) 1.6px, transparent 1.6px), linear-gradient(90deg, rgba(22, 22, 22, 0.1) 1.6px, transparent 1.6px), linear-gradient(rgba(22, 22, 22, 0.1) 0.8px, transparent 0.8px), linear-gradient(90deg, rgba(22, 22, 22, 0.1) 0.8px, rgba(173, 173, 173, 0) 0.8px)",
        'paper-pattern-dark': "radial-gradient(50% 50% at 50% 50%, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.94) 100%), linear-gradient(rgba(174, 174, 174, 0.1) 1.6px, transparent 1.6px), linear-gradient(90deg, rgba(174, 174, 174, 0.1) 1.6px, transparent 1.6px), linear-gradient(rgba(174, 174, 174, 0.1) 0.8px, transparent 0.8px), linear-gradient(90deg, rgba(174, 174, 174, 0.1) 0.8px, rgba(22, 22, 22, 0) 0.8px)"
      },
      backgroundSize: {
        'paper-pattern-size': 'cover, 40px 40px, 40px 40px, 8px 8px, 8px 8px',
      },
      backgroundPosition: {
        'paper-pattern-position': 'center, -1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px'
      },
      fontFamily: {
        'inter': 'var(--font-inter)',
        'poppins': 'var(--font-poppins)',
        'roboto-condensed': 'var(--font-roboto-condensed)',
        'righteous': 'var(--font-righteous)',
        'montserrat': 'var(--font-montserrat)'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'effect': {
          '0%, 100%': { transform: "rotate(-180deg)" },
          '25%': { transform: "rotate(90deg) scale(0.5)" },
          '50%': { transform: "translate(-20%, -20%) rotate(-90deg)" },
          '100%': { transform: "rotate(0deg)" },
        },
        'effect-2': {
          '0%, 100%': { transform: 'scale(0.7) translate(100%, -100%) rotate(-50deg)' },
          '50%': { transform: 'translate(50%, -50%) scale(1.2) rotate(-20deg)' },
          '100%': { transform: 'translate(0) scale(1) rotate(0deg)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'effect': 'effect 1s ease-in-out',
        'effect-2': 'effect-2 1.5s ease-in-out'
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
}