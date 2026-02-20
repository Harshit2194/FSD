import { colors, fonts, modalOverlayStyle } from "../styles/theme";

export default function DeleteConfirmDialog({ user, onConfirm, onCancel }) {
  if (!user) return null;

  return (
    <div style={{ ...modalOverlayStyle, zIndex: 1100 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: 32,
          maxWidth: 400,
          width: "90%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: colors.darkBrown,
            marginBottom: 8,
            fontFamily: fonts.serif,
          }}
        >
          Delete User?
        </div>
        <div
          style={{
            color: colors.mutedText,
            fontSize: 14,
            marginBottom: 24,
            fontFamily: fonts.serif,
            lineHeight: 1.6,
          }}
        >
          Are you sure you want to delete <strong>{user.name}</strong>?{" "}
          This action cannot be undone.
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={onCancel}
            style={{
              padding: "10px 24px",
              border: `1.5px solid ${colors.borderInput}`,
              background: "transparent",
              color: colors.mutedText,
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
              fontFamily: fonts.serif,
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(user.id)}
            style={{
              padding: "10px 24px",
              background: colors.redDark,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: fonts.serif,
            }}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
