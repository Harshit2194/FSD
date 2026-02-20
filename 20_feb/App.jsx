import { useState } from "react";

// Hooks
import { useUsers } from "./hooks/useUsers";
import { useModal } from "./hooks/useModal";
import { useToast } from "./hooks/useToast";

// Components
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import DeleteConfirmDialog from "./components/DeleteConfirmDialog";
import Toast from "./components/Toast";

export default function App() {
  const {
    users, form, editId, errors,
    setEditId, setErrors,
    updateField, loadForm, resetForm,
    addUser, updateUser, deleteUser,
    findById, stats,
  } = useUsers();

  const { modal, openAdd, openEdit, openView, closeModal } = useModal();
  const { toast, showToast } = useToast();
  const [deleteTarget, setDeleteTarget] = useState(null);

  // --- Handlers ---

  const handleOpenAdd = () => {
    resetForm();
    openAdd();
  };

  const handleOpenEdit = (user) => {
    loadForm(user);
    setEditId(user.id);
    setErrors({});
    openEdit();
  };

  const handleOpenView = (user) => {
    loadForm(user);
    openView();
  };

  const handleClose = () => {
    resetForm();
    closeModal();
  };

  const handleAdd = () => {
    const success = addUser();
    if (success) {
      closeModal();
      showToast("User added successfully!");
    }
  };

  const handleUpdate = () => {
    const success = updateUser();
    if (success) {
      closeModal();
      showToast("User updated successfully!");
    }
  };

  const handleDeleteConfirm = (id) => {
    deleteUser(id);
    setDeleteTarget(null);
    showToast("User deleted.", "error");
  };

  const handleSwitchToEdit = () => {
    setErrors({});
    setEditId(form.id);
    openEdit();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", fontFamily: "'Georgia', serif" }}>
      <Header onAddUser={handleOpenAdd} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        <SearchBar
          onFind={findById}
          onView={handleOpenView}
          onEdit={handleOpenEdit}
        />

        <StatsBar stats={stats} />

        <UserTable
          users={users}
          onView={handleOpenView}
          onEdit={handleOpenEdit}
          onDelete={(user) => setDeleteTarget(user)}
        />
      </div>

      <UserModal
        modal={modal}
        form={form}
        errors={errors}
        onFieldChange={updateField}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onClose={handleClose}
        onSwitchToEdit={handleSwitchToEdit}
      />

      <DeleteConfirmDialog
        user={deleteTarget}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />

      <Toast toast={toast} />
    </div>
  );
}
