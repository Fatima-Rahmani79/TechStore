/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // toggle با class روی <html>

  theme: {
    extend: {

      // ─── Colors ────────────────────────────────────────────────────────────
      colors: {
        // Neutral (پایه همه چیز)
        neutral: {
          0:    "#FFFFFF",
          50:   "#F7F7F6",
          100:  "#EFEFED",
          200:  "#E2E1DE",
          300:  "#C8C7C2",
          400:  "#9B9A95",
          500:  "#6B6A66",
          600:  "#4A4945",
          700:  "#2E2D2B",
          800:  "#1C1B1A",
          900:  "#111110",
          1000: "#000000",
        },

        // Accent — یه رنگ، همه جا (Framer-style)
        accent: {
          DEFAULT: "#E8FF59",   // lime sharp — روی dark خیلی خوبه
          hover:   "#D4EB45",
          muted:   "#C8DE30",
        },

        // Semantic
        success: { bg: "#EDFBF0", text: "#166534", dark: { bg: "#052E16", text: "#4ADE80" } },
        warning: { bg: "#FEFCE8", text: "#854D0E", dark: { bg: "#1C1400", text: "#FDE047" } },
        danger:  { bg: "#FFF1F2", text: "#9F1239", dark: { bg: "#1F0A0D", text: "#FB7185" } },
      },

      // ─── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans:  ["'DM Sans'", "sans-serif"],       // body — geometric, clean
        display: ["'Syne'", "sans-serif"],         // heading — editorial, bold
        mono:  ["'JetBrains Mono'", "monospace"], // code / price tags
      },

      fontSize: {
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.04em" }],
        xs:    ["12px", { lineHeight: "16px" }],
        sm:    ["13px", { lineHeight: "20px" }],
        base:  ["15px", { lineHeight: "24px" }],
        lg:    ["17px", { lineHeight: "26px" }],
        xl:    ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px", letterSpacing: "-0.02em" }],
        "4xl": ["38px", { lineHeight: "44px", letterSpacing: "-0.03em" }],
        "5xl": ["48px", { lineHeight: "54px", letterSpacing: "-0.04em" }],
      },

      fontWeight: {
        normal:   "400",
        medium:   "500",
        semibold: "600",
      },

      // ─── Spacing ───────────────────────────────────────────────────────────
      // 4px base grid — همه چیز ضربی از 4 باشه
      spacing: {
        px:   "1px",
        0:    "0",
        0.5:  "2px",
        1:    "4px",
        1.5:  "6px",
        2:    "8px",
        2.5:  "10px",
        3:    "12px",
        4:    "16px",
        5:    "20px",
        6:    "24px",
        7:    "28px",
        8:    "32px",
        9:    "36px",
        10:   "40px",
        12:   "48px",
        14:   "56px",
        16:   "64px",
        18:   "72px",
        20:   "80px",
        24:   "96px",
        28:   "112px",
        32:   "128px",
      },

      // ─── Border Radius ─────────────────────────────────────────────────────
      borderRadius: {
        none: "0",
        sm:   "4px",
        DEFAULT: "8px",
        md:   "10px",
        lg:   "12px",
        xl:   "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },

      // ─── Shadows ───────────────────────────────────────────────────────────
      boxShadow: {
        none: "none",
        sm:   "0 1px 2px 0 rgb(0 0 0 / 0.06)",
        DEFAULT: "0 1px 4px 0 rgb(0 0 0 / 0.08), 0 0 0 0.5px rgb(0 0 0 / 0.06)",
        md:   "0 4px 12px 0 rgb(0 0 0 / 0.10), 0 0 0 0.5px rgb(0 0 0 / 0.06)",
        lg:   "0 8px 24px 0 rgb(0 0 0 / 0.12), 0 0 0 0.5px rgb(0 0 0 / 0.06)",
        // dark mode shadows (opacity کمتر)
        "dark-sm":  "0 1px 2px 0 rgb(0 0 0 / 0.3)",
        "dark-md":  "0 4px 12px 0 rgb(0 0 0 / 0.4)",
        "dark-lg":  "0 8px 24px 0 rgb(0 0 0 / 0.5)",
      },

      // ─── Animation ─────────────────────────────────────────────────────────
      transitionDuration: {
        fast:    "100ms",
        DEFAULT: "150ms",
        slow:    "250ms",
      },

      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)", // snappy ease-out
        in:  "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
      },

      // ─── Layout ────────────────────────────────────────────────────────────
      maxWidth: {
        content: "1120px", // max width صفحه
        card:    "360px",
      },

      screens: {
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
      },
    },
  },

  plugins: [],
};
