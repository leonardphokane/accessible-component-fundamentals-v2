# Accessible Component Fundamentals

Frontend AI Engineering · Week 4 · FE-05

Build three accessible interactive components from scratch using React and TypeScript, following the W3C ARIA Authoring Practices Guide.

## Assignment Objectives

- Build a Modal Dialog without a component library
- Build an accessible Tabs component
- Build an accessible Disclosure component
- Implement proper ARIA roles and attributes
- Implement keyboard interaction patterns
- Compare custom implementations with shadcn/ui components
- Document accessibility findings in NOTES.md

---

## Components

### Modal Dialog

Features:

- Keyboard accessible
- Escape key closes dialog
- Focus moves into dialog when opened
- Focus is trapped within the dialog
- Focus returns to the trigger button when closed

### Tabs

Features:

- ARIA-compliant tab pattern
- Arrow Left navigation
- Arrow Right navigation
- Home key support
- End key support
- Roving focus behavior

### Disclosure

Features:

- aria-expanded support
- aria-controls association
- Keyboard accessibility
- Accessible content reveal pattern

---

## Technology Stack

- React
- TypeScript
- Vite
- CSS
- WAI-ARIA Authoring Practices

---

## Project Structure

```text
src/
│
├── playground/
│   ├── Modal/
│   ├── Tabs/
│   └── Disclosure/
│
├── styles/
│   └── globals.css
│
├── App.tsx
└── main.tsx
```

## Accessibility Features

### Keyboard Support

| Component | Supported Keys |
|------------|----------------|
| Modal | Tab, Shift+Tab, Escape |
| Tabs | ArrowLeft, ArrowRight, Home, End |
| Disclosure | Enter, Space |

### ARIA Support

- role="dialog"
- aria-modal="true"
- role="tablist"
- role="tab"
- role="tabpanel"
- aria-expanded
- aria-controls

---

## shadcn/ui Comparison

The project includes a comparison between custom-built accessible components and shadcn/ui implementations.

Documented findings are available in:

```text
NOTES.md
```

---

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Learning Outcomes

This project demonstrates:

- Accessibility-first development
- Keyboard navigation patterns
- Focus management
- ARIA implementation
- Evaluating AI-generated UI code
- Reviewing component library source code critically

---

## Screenshots

Screenshots are stored in:

```text
docs/screenshots/
```

---

## Author

Leonard Phokane

Frontend AI Engineering Program