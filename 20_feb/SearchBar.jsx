import { useState } from "react";
import { colors, fonts, actionBtnStyle } from "../styles/theme";

export default function SearchBar({ onFind, onView, onEdit }) {
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setResult(null);
    setError("");
    if (!searchId.trim()) {
      setError("Enter a user ID");
      return;
    }
    const found = onFind(searchId);
    if (found) setResult(found);
    else setError(`No user found with ID: ${searchId}`);
  };

  const handleClear = () => {
    setResult(null);
    setError("");
    setSearchId("");
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "24px 28px",
        marginBottom: 28,
        border: `1px solid ${colors.border}`,
        boxShadow: "0 2px 12px rgba(44,24,16,0.06)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.15em",
          color: colors.mutedText,
          textTransform: "uppercase",
          fontWeight: 700,
          marginBottom: 14,
        }}
      >
        Search by User ID
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <input
          type="number"
          placeholder="Enter user ID..."
          value={searchId}
          onChange={(e) => {
            setSearchId(e.target.value);
            setResult(null);
            setError("");
          }}
          style={{
            flex: 1,
            padding: "10px 16px",
            border: `1.5px solid ${colors.borderInput}`,
            borderRadius: 8,
            fontFamily: fonts.serif,
            fontSize: 14,
            color: colors.darkBrown,
            outline: "none",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            background: colors.darkBrown,
            color: colors.cream,
            border: "none",
            padding: "11px 24px",
            borderRadius: 8,
            fontSize: 13,
            cursor: "pointer",
            fontFamily: fonts.serif,
          }}
        >
          Search
        </button>
        {(result || error) && (
          <button
            onClick={handleClear}
            style={{
              background: "transparent",
              color: colors.mutedText,
              border: `1.5px solid ${colors.borderInput}`,
              padding: "10px 16px",
              borderRadius: 8,
              fontSize: 13,
              cursor: "pointer",
              fontFamily: fonts.serif,
            }}
          >
            Clear
          </button>
        )}
      </div>

      {error && (
        <div style={{ marginTop: 12, color: colors.errorRed, fontSize: 13 }}>
          {error}
        </div>
      )}

      {result && (
        <div
          style={{
            marginTop: 16,
            background: colors.creamLight,
            borderRadius: 10,
            padding: "16px 20px",
            border: `1px solid ${colors.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: colors.darkBrown, fontSize: 16 }}>
              {result.name}
            </div>
            <div style={{ color: colors.mutedText, fontSize: 13, marginTop: 2 }}>
              {result.designation} — {result.company}
            </div>
            <div style={{ color: "#6b6b6b", fontSize: 12, marginTop: 4 }}>
              ID: {result.id} · {result.email}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => onView(result)}
              style={actionBtnStyle(colors.greenLight, colors.greenDark)}
            >
              View
            </button>
            <button
              onClick={() => onEdit(result)}
              style={actionBtnStyle(colors.blueLight, colors.blueDark)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
