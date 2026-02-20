import { colors, fonts, tdStyle, actionBtnStyle } from "../styles/theme";
import { TABLE_HEADERS } from "../data/constants";

export default function UserTable({ users, onView, onEdit, onDelete }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(44,24,16,0.06)",
      }}
    >
      {/* Table Header Bar */}
      <div
        style={{
          padding: "20px 28px",
          borderBottom: `1px solid ${colors.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 15, color: colors.darkBrown, fontWeight: 600, fontFamily: fonts.serif }}>
          All Users
        </span>
        <span style={{ fontSize: 12, color: colors.mutedText }}>
          {users.length} records
        </span>
      </div>

      {users.length === 0 ? (
        <div style={{ padding: 60, textAlign: "center", color: colors.mutedText, fontFamily: fonts.serif }}>
          No users found. Add one to get started.
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: colors.creamLight }}>
                {TABLE_HEADERS.map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: colors.mutedText,
                      textTransform: "uppercase",
                      borderBottom: `1px solid ${colors.border}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <UserRow
                  key={u.id}
                  user={u}
                  index={i}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function UserRow({ user, index, onView, onEdit, onDelete }) {
  const evenBg = "#fff";
  const oddBg = "#fdfaf5";

  return (
    <tr
      style={{ borderBottom: `1px solid #f0e8d8`, background: index % 2 === 0 ? evenBg : oddBg, transition: "background 0.15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = colors.cream)}
      onMouseLeave={(e) => (e.currentTarget.style.background = index % 2 === 0 ? evenBg : oddBg)}
    >
      <td style={tdStyle}>
        <span
          style={{
            background: colors.darkBrown,
            color: colors.gold,
            fontSize: 11,
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: 4,
          }}
        >
          {user.id}
        </span>
      </td>
      <td style={{ ...tdStyle, fontWeight: 600, color: colors.darkBrown }}>{user.name}</td>
      <td style={{ ...tdStyle, color: colors.subText }}>{user.contact}</td>
      <td style={{ ...tdStyle, color: colors.subText }}>{user.email}</td>
      <td style={tdStyle}>
        <span
          style={{
            background: colors.blueLight,
            color: colors.blueDark,
            fontSize: 12,
            padding: "3px 10px",
            borderRadius: 20,
          }}
        >
          {user.designation}
        </span>
      </td>
      <td style={{ ...tdStyle, color: colors.subText }}>{user.company}</td>
      <td style={tdStyle}>
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={() => onView(user)} style={actionBtnStyle(colors.greenLight, colors.greenDark)}>View</button>
          <button onClick={() => onEdit(user)} style={actionBtnStyle(colors.blueLight, colors.blueDark)}>Edit</button>
          <button onClick={() => onDelete(user)} style={actionBtnStyle(colors.redLight, colors.redDark)}>Delete</button>
        </div>
      </td>
    </tr>
  );
}
