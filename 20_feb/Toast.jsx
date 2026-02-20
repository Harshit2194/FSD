import { colors, fonts } from "../styles/theme";

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          background: toast.type === "error" ? colors.redDark : colors.greenDark,
          color: "#fff",
          padding: "14px 22px",
          borderRadius: 10,
          fontSize: 14,
          fontFamily: fonts.serif,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          zIndex: 2000,
          animation: "fadeInUp 0.3s ease",
        }}
      >
        {toast.msg}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
