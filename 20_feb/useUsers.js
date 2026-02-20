import { useState } from "react";
import initialUsers from "../data/initialUsers";
import { EMPTY_FORM } from "../data/constants";
import { validateUserForm, isFormValid } from "../utils/validation";

export function useUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setEditId(null);
  };

  const loadForm = (user) => {
    setForm({ ...user });
  };

  const addUser = () => {
    const errs = validateUserForm(form);
    setErrors(errs);
    if (!isFormValid(errs)) return false;
    setUsers((prev) => [...prev, { ...form, id: Date.now() }]);
    resetForm();
    return true;
  };

  const updateUser = () => {
    const errs = validateUserForm(form);
    setErrors(errs);
    if (!isFormValid(errs)) return false;
    setUsers((prev) =>
      prev.map((u) => (u.id === editId ? { ...form, id: editId } : u))
    );
    resetForm();
    return true;
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const findById = (id) => users.find((u) => u.id === parseInt(id)) || null;

  const uniqueCompanies = [...new Set(users.map((u) => u.company))].length;
  const uniqueDesignations = [...new Set(users.map((u) => u.designation))].length;

  return {
    users,
    form,
    editId,
    errors,
    setEditId,
    setErrors,
    updateField,
    loadForm,
    resetForm,
    addUser,
    updateUser,
    deleteUser,
    findById,
    stats: {
      total: users.length,
      companies: uniqueCompanies,
      designations: uniqueDesignations,
    },
  };
}
