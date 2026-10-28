# Accessibility Notes

## Dialog Comparison

### My Implementation

Implemented manually using React and TypeScript.

Accessibility features:

- Escape key closes the dialog
- Focus moves into the dialog when opened
- Focus is trapped inside the dialog
- Focus returns to the trigger button on close
- Uses ARIA dialog attributes

### shadcn Dialog

Additional features handled automatically:

- Portal rendering outside the normal DOM tree
- More robust focus guards
- Better handling of accessibility edge cases
- Production-ready accessibility primitives
- More scalable architecture

### Gap Analysis

The biggest difference was focus management. My implementation uses a basic focus trap, while shadcn provides a more resilient and reusable solution that works better in complex applications.

---

## Tabs Comparison

### My Implementation

Accessibility features:

- ArrowLeft navigation
- ArrowRight navigation
- Home key support
- End key support
- ARIA tablist, tab, and tabpanel roles
- Keyboard focus management

### shadcn Tabs

Additional features handled automatically:

- More refined focus management
- Better abstraction and reusability
- Cleaner developer experience
- Production-tested accessibility patterns

### Gap Analysis

My implementation follows the ARIA Authoring Practices requirements, but shadcn simplifies maintenance and handles additional edge cases that would otherwise need custom implementations.

---

## Lessons Learned

Building components manually improved my understanding of:

- ARIA roles and relationships
- Keyboard accessibility
- Focus management
- Accessible component design
- Evaluating AI-generated UI code

Comparing my implementation to shadcn demonstrated the value of component libraries while reinforcing the importance of understanding underlying accessibility requirements.