export const colors = {
  darkBrown: "#2c1810",
  gold: "#c9a96e",
  goldLight: "#e8c07d",
  cream: "#f5f0e8",
  creamLight: "#f9f5ef",
  border: "#e0d5c0",
  borderInput: "#d4c5a9",
  mutedText: "#8b7355",
  bodyText: "#3a3a3a",
  subText: "#5a5a5a",
  blueLight: "#e8f0f8",
  blueDark: "#2d4d8a",
  greenLight: "#e8f4e8",
  greenDark: "#2d6a2d",
  redLight: "#fce8e8",
  redDark: "#9b2020",
  errorRed: "#e05252",
};

export const fonts = {
  serif: "'Georgia', serif",
};

export const tdStyle = {
  padding: "13px 16px",
  fontSize: 13,
  color: colors.bodyText,
  verticalAlign: "middle",
};

export const actionBtnStyle = (bg, color) => ({
  background: bg,
  color,
  border: "none",
  padding: "6px 14px",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  fontFamily: fonts.serif,
});

export const modalOverlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(44,24,16,0.55)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: 20,
};
