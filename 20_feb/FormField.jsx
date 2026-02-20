import { colors, fonts } from "../styles/theme";

export default function FormField({ label, name, type = "text", textarea = false, value, onChange, disabled, error }) {
  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    border: `1.5px solid ${error ? colors.errorRed : colors.borderInput}`,
    borderRadius: 8,
    background: disabled ? colors.creamLight : "#fff",
    fontFamily: fonts.serif,
    fontSize: 14,
    color: colors.darkBrown,
    outline: "none",
    boxSizing: "border-box",
    resize: textarea ? "vertical" : undefined,
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: colors.mutedText,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={3}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(name, e.target.value)}
          style={inputStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(name, e.target.value)}
          style={inputStyle}
        />
      )}

      {error && (
        <span style={{ fontSize: 11, color: colors.errorRed, marginTop: 4, display: "block" }}>
          {error}
        </span>
      )}
    </div>
  );
}
