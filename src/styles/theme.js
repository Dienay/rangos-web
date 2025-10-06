export const theme = {
  colors: {
    primary: "#e86e5a",
    secondary: "#1db954",

    text: "#202728",
    textGrey: "#a9a9a9",
    textLight: "#8d8686",
    borderLight: "#e0e0e0",
    background: "#f0f2f5",
    white: "#ffffff",

    error: "#e02020",
    transparent: "transparent",
  },

  font: {
    family: "'Roboto', sans-serif",
    size: {
      label: "0.75rem", // 12px
      small: "0.875rem", // 14px
      base: "1rem", // 16px
      h3: "1.125rem", // 18px
      h2: "1.25rem", // 20px
      h1: "1.5rem", // 24px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  radius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    full: "9999px", // ideal para botões arredondados/pills
  },

  spacing: (factor) => `${0.25 * factor}rem`, // ex: spacing(4) = 1rem

  borders: {
    none: "none",
    thin: "1px solid",
    medium: "2px solid",
    thick: "3px solid",
  },

  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
  },

  layout: {
    containerMaxWidth: "1200px",
    gutter: "16px",
  },
};
