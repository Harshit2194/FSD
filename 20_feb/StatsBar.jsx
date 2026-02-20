import { colors, fonts } from "../styles/theme";

export default function StatsBar({ stats }) {
  const items = [
    { label: "Total Users", val: stats.total },
    { label: "Companies", val: stats.companies },
    { label: "Designations", val: stats.designations },
  ];

  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
      {items.map((s) => (
        <div
          key={s.label}
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: 10,
            padding: "18px 22px",
            border: `1px solid ${colors.border}`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: colors.darkBrown,
              fontFamily: fonts.serif,
            }}
          >
            {s.val}
          </div>
          <div
            style={{
              fontSize: 11,
              color: colors.mutedText,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginTop: 4,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
