import { colors, fonts, modalOverlayStyle } from "../styles/theme";
import { MODAL_TITLES } from "../data/constants";
import FormField from "./FormField";

export default function UserModal({ modal, form, errors, onFieldChange, onAdd, onUpdate, onClose, onSwitchToEdit }) {
  if (!modal) return null;

  const titles = MODAL_TITLES[modal];
  const isView = modal === "view";
  const isEdit = modal === "edit";
  const isAdd = modal === "add";

  return (
    <div style={modalOverlayStyle}>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          width: "100%",
          maxWidth: 560,
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            background: colors.darkBrown,
            padding: "22px 28px",
            borderRadius: "16px 16px 0 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", color: colors.gold, textTransform: "uppercase" }}>
              {titles.sub}
            </div>
            <div style={{ fontSize: 20, color: colors.cream, marginTop: 2, fontFamily: fonts.serif }}>
              {isView ? form.name : titles.main}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: colors.cream,
              width: 34,
              height: 34,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: "28px 28px 8px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            <FormField label="Full Name" name="name" value={form.name} onChange={onFieldChange} disabled={isView} error={errors.name} />
            <FormField label="Contact" name="contact" value={form.contact} onChange={onFieldChange} disabled={isView} error={errors.contact} />
            <FormField label="Email Address" name="email" type="email" value={form.email} onChange={onFieldChange} disabled={isView} error={errors.email} />
            <FormField label="Designation" name="designation" value={form.designation} onChange={onFieldChange} disabled={isView} error={errors.designation} />
            <FormField label="Company" name="company" value={form.company} onChange={onFieldChange} disabled={isView} error={errors.company} />
            <div />
          </div>
          <FormField label="Address" name="address" textarea value={form.address} onChange={onFieldChange} disabled={isView} error={errors.address} />
        </div>

        {/* Footer Buttons */}
        <div style={{ padding: "8px 28px 28px", display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button
            onClick={onClose}
            style={{
              padding: "11px 24px",
              border: `1.5px solid ${colors.borderInput}`,
              background: "transparent",
              color: colors.mutedText,
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: fonts.serif,
              fontSize: 14,
            }}
          >
            {isView ? "Close" : "Cancel"}
          </button>

          {isView && (
            <button
              onClick={onSwitchToEdit}
              style={{
                padding: "11px 24px",
                background: colors.darkBrown,
                color: colors.cream,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: fonts.serif,
                fontSize: 14,
              }}
            >
              Edit
            </button>
          )}

          {(isAdd || isEdit) && (
            <button
              onClick={isAdd ? onAdd : onUpdate}
              style={{
                padding: "11px 28px",
                background: colors.darkBrown,
                color: colors.cream,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: fonts.serif,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {isAdd ? "Add User" : "Save Changes"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
