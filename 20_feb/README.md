# User Management App

A clean, production-grade React UI for managing users.

## Project Structure

```
src/
├── App.jsx                          ← Root component, wires everything together
│
├── data/
│   ├── initialUsers.js              ← Seed user records
│   └── constants.js                 ← EMPTY_FORM, TABLE_HEADERS, MODAL_TITLES
│
├── utils/
│   └── validation.js               ← Form validation logic
│
├── styles/
│   └── theme.js                    ← Colors, fonts, shared style objects
│
├── hooks/
│   ├── useUsers.js                 ← All user CRUD state & logic
│   ├── useModal.js                 ← Modal open/close state
│   └── useToast.js                 ← Toast notification state
│
└── components/
    ├── Header.jsx                  ← Top bar with title & Add button
    ├── StatsBar.jsx                ← Total users / companies / designations
    ├── SearchBar.jsx               ← Search by ID with result card
    ├── UserTable.jsx               ← Table of all users
    ├── FormField.jsx               ← Reusable input / textarea field
    ├── UserModal.jsx               ← Add / Edit / View modal
    ├── DeleteConfirmDialog.jsx     ← Delete confirmation overlay
    └── Toast.jsx                   ← Success / error toast notification
```

## Features
- **Add** user with Name, Contact, Email, Designation, Company, Address
- **Edit** any user via table or search result
- **Delete** with confirmation dialog
- **View** read-only user details
- **Search by ID** with instant result card

## Setup

```bash
npm create vite@latest user-mgmt -- --template react
cd user-mgmt
# Replace src/ with the files in this project
npm run dev
```
