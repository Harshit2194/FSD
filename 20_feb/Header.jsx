import { colors, fonts } from "../styles/theme";

export default function Header({ onAddUser }) {
  return (
    <div
      style={{
        background: colors.darkBrown,
        padding: "28px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.25em",
            color: colors.gold,
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Enterprise Suite
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 28,
            color: colors.cream,
            fontWeight: 400,
            letterSpacing: "0.02em",
            fontFamily: fonts.serif,
          }}
        >
          User Management
        </h1>
      </div>
      <button
        onClick={onAddUser}
        onMouseEnter={(e) => (e.target.style.background = colors.goldLight)}
        onMouseLeave={(e) => (e.target.style.background = colors.gold)}
        style={{
          background: colors.gold,
          color: colors.darkBrown,
          border: "none",
          padding: "12px 28px",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.08em",
          cursor: "pointer",
          textTransform: "uppercase",
          fontFamily: fonts.serif,
          transition: "all 0.2s",
        }}
      >
        + Add User
      </button>
    </div>
  );
}
