const sizes = {
  small: "480px",
  medium: "768px",
  large: "1024px",
  xlarge: "1200px",
};

const media = {
  small: `(max-width: ${sizes.small})`,
  medium: `(max-width: ${sizes.medium})`,
  large: `(max-width: ${sizes.large})`,
  xlarge: `(max-width: ${sizes.xlarge})`,
};

export { sizes, media };
