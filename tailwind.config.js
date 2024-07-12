/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./assets/**/*.css",
    "./components/**/*.{js,vue}",
    "./components/*.{js,vue}",
    "./layouts/**/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  salfeList: [
    "btn-primary",
    "btn-accent",
    "btn-secondary",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-error",
  ],
  theme: {
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    aspectRatio: {
      40: "40",
      21: "21",
    },
    extend: {
      backgroundImage: {
        'custom-radial-end': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 112, 40, 0.25) 0.01%, rgba(255, 112, 40, 0.00) 100%)',
        'custom-radial-start': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 112, 40, 0.15) 0.01%, rgba(255, 112, 40, 0.00) 100%)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '14': 'repeat(14, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      boxShadow: {
        '2xl': '0.25 0.25px 2px 0.5px rgba(103, 103, 103, 100)',
      },
      utils:{
        'a': 'w-full mx-auto h-full z-10 px-[1rem] lg:px-[2rem] xl:px-[4.25rem] 2xl:px-[6.25rem] max-w-[25rem] lg:max-w-[95rem] py-[3.125rem]',
      },
      typography: {
        xs: {
          css: {
            fontSize: "0.8125rem",
          },
        },
        "2xs": {
          css: {
            fontSize: "0.75rem",
          },
        },
      },
      screens: {
        xs: "320px",
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  // corePlugins: {
  //   aspectRatio: false,
  // },
  plugins: [require("daisyui"),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms'),
  plugin(function({ addVariant }) {
    addVariant('radio-checked', '&:checked ~ label')
  }),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
        /* your theme name */ primary: "#1e9b61" /* Primary color */,
          "primary-focus": "#198754" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#8f018f" /* Secondary color */,
          "secondary-focus": "#800080" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#ffffff" /* Accent color */,
          "accent-focus": "#ffffff" /* Accent color - focused */,
          "accent-content":
            "#323232" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#ffffff" /* Base color of page, used for blank backgrounds */,
          "base-200": "#f9fafb" /* Base color, a little darker */,
          "base-300": "#d1d5db" /* Base color, even more darker */,
          "base-content":
            "#1f2937" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#02850c" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,

          "--rounded-box":
            "1rem" /* border-radius for cards and other big elements */,
          "--rounded-btn":
            "0.85rem" /* border-radius for buttons and similar elements */,
          "--rounded-badge":
            "1.9rem" /* border-radius for badge and other small elements */,

          "--animation-btn": "0.25s" /* bounce animation time for button */,
          "--animation-input":
            ".2s" /* bounce animation time for checkbox, toggle, etc */,

          "--padding-card": "1rem" /* default card-body padding */,

          "--btn-text-case": "uppercase" /* default text case for buttons */,
          "--navbar-padding": ".5rem" /* default padding for navbar */,
          "--border-btn": "1px" /* default border size for button */,
          "--focus-ring": "2px" /* focus ring size for button and inputs */,
          "--focus-ring-offset": "2px",
        },
      },
      // 'dark', // and some pre-defined theme
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
  },

}

