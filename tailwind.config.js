/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": {
            width: "230px",
            height: "210px",
            transform: "rotate(0.0deg)",
          },
          "10%": {
            width: "200px",
            height: "170px",
            transform: "rotate(14deg)",
          },
          "20%": {
            width: "230px",
            height: "200px",
            transform: "rotate(-8deg)",
          },
          "30%": {
            width: "200px",
            height: "190px",
            transform: "rotate(14deg)",
          },
          "40%": {
            width: "230px",
            height: "210px",
            transform: "rotate(-4deg)",
          },
          "50%": {
            width: "200px",
            height: "220px",
            transform: "rotate(10.0deg)",
          },
          "60%": {
            width: "230px",
            height: "238px",
            transform: "rotate(0.0deg)",
          },
          "100%": {
            width: "210px",
            height: "170px",
            transform: "rotate(0.0deg)",
          },
        },
      },
      colors: {
        brand: {
          DEFAULT: "#2210AA",
          secondary: "#25C883",
          "secondary-100": "#EDEDF7",
          "secondary-200": "#E5E5FC",
          "secondary-300": "#9A99C8",
          "primary-opacity": "rgba(79, 77, 171, 0.1)",
          "primary-opacity2": "rgba(79, 77, 171, 0.05)",
          opacity: "rgba(37, 200, 141, 0.1)",
          "secondary-opacity": "#0b0061",
          "primary-100": "#f2f5f4",
          "primary-200": "#e9faf4",
          "primary-300": "#beeedd",
          dark: "#000000",
          light: "#ffffff",
          muted: "#595959",
          tree: "#6fb48e",
          "tree-dark": "#0B4635",
          danger: "#dc2626",
          white: "#ffffff",
          "icon-bg": "#F6F6FB",
          "child-1": "#91A59E",
          "bg-opacity-1": "#FAF9FE",
          hover: "#076f49",
          "overlay-primary": "rgba(34, 16, 170, 0.4)",
          "overlay-secondary": "rgba(38, 191, 143, 0.4)",
          "overlay-white": "rgba(255, 255, 255, 0.86)",
          menu: "3px 15px 74px rgba(22, 61, 177, 0.664)",
        },
        font: {
          DEFAULT: "#071F16",
          "brand-primary": "#2210AA",
          primary: "#071F16",
          child1: "#25C883",
          child2: "#91A59E",
          child3: "#5B6B65",
          white: "#ffffff",
        },
        status: {
          error: "#d02626",
          opacity: "rgba(208, 38, 38, 0.1)",
          "error-100": "rgba(208, 38, 38, 0.06)",
        },
        yellow: {
          DEFAULT: "#f98f14",
          50: "#FAE642",
          100: "#f3b81f",
          200: "#ffc33c",
          300: "#edc537",
        },
        fill: {
          base: "#f3f6f9",
          secondary: "#f8f9fb",
          thumbnail: "#f3f6fa",
          "dropdown-hover": "#f6f9fc",
          one: "#f1f6f9",
          two: "#f2f2f2",
          three: "#e8ebf0",
          four: "#e5eaf1",
        },
        gradient: {
          primary: "rgba(42, 194, 151, 0.2) 10.88%",
          secondary: "rgba(79, 77, 171, 0.2) 83.06%",
          "primary-opacity": "rgba(42, 194, 151, 0.074) 10.88%",
          "secondary-opacity": "rgba(192, 199, 237, 0.373) 80.25%",
        },
        border: {
          DEFAULT: "#E4E5EE",
          base: "#E4E5EE",
          one: "#E4E5EE",
          two: "#2210AA",
          three: "#E4E5EE",
          four: "#E4E5EE",
          five: "#E9E9E9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      margin: {
        "64px": "64px",
        "42px": "42px",
        "32px": "32px",
        "24px": "24px",
        "16px": "16px",
        "12px": "12px",
        "8px": "8px",
        "4px": "4px",
        "2px": "2px",
      },
      padding: {
        "64px": "64px",
        "42px": "42px",
        "32px": "32px",
        "24px": "24px",
        "16px": "16px",
        "12px": "12px",
        "8px": "8px",
        "4px": "4px",
        "2px": "2px",
      },
      borderRadius: {
        DEFAULT: "14px",
        sm: "5px",
        "md-x": "10px",
        md: "0.375rem",
        lg: "18px",
        full: "9999px",
        large: "12px",
        drop: "0 0 10px 10px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        "10px": ".625rem",
        "12px": "12px",
        "13px": "13px",
        "16px": "16px",
        "18px": "18px",
        "24px": "24px",
      },
      fontFamily: {
        body: ["'Inter', sans-serif"],
        inter: ["'Inter', sans-serif"],
        roboto: ["'Roboto', sans-serif"],
        burtons: ["'Burtons', sans-serif"],
        montserrat: ["'Montserrat',sans-serif"],
        spartan: ["'Spartan',sans-serif"],
        lobster: ["'Lobster',sans-serif"],
      },
      animation: {
        shine: "shine 0.8s ease-in",
        ping: "ping 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse: "pulse 1.5s infinite",
        bounce: "bounce 1.5s 1s",
        wave: "wave 5s linear infinite",
      },
      screens: {
        "sm-x": "280px",
        // => @media (min-width: 280px) { ... }

        sm: "380px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        headerFixed: "0px 41px 46px rgba(0, 0, 0, 1)",
        modal: "3px 7px 18px rgba(0, 0, 0, 0.07)",
        dropdown: "0 15px 74px rgba(0, 0, 0, 0.1)",
        icon: "3px 15px 74px rgba(20, 40, 100, 0.543)",
        menu: "3px 15px 74px rgba(22, 61, 177, 0.764)",
      },
    },
  },
  plugins: [],
};
