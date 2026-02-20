import { useState } from "react";

export function useModal() {
  const [modal, setModal] = useState(null); // null | 'add' | 'edit' | 'view'

  const openAdd = () => setModal("add");
  const openEdit = () => setModal("edit");
  const openView = () => setModal("view");
  const closeModal = () => setModal(null);

  return { modal, openAdd, openEdit, openView, closeModal };
}
