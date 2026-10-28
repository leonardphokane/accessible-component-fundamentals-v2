import {
  useEffect,
  useRef,
  useState,
} from "react";
import "./Modal.css";

export default function Modal() {
  const [open, setOpen] = useState(false);

  const triggerRef =
    useRef<HTMLButtonElement>(null);

  const modalRef =
    useRef<HTMLDivElement>(null);

  const closeRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    const focusableElements =
      modalRef.current.querySelectorAll<
        HTMLButtonElement
      >("button");

    const firstElement =
      focusableElements[0];

    const lastElement =
      focusableElements[
        focusableElements.length - 1
      ];

    const handleTab = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Tab") {
        return;
      }

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleTab
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleTab
      );
    };
  }, [open]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <section>
      <h2>Modal Dialog</h2>

      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      {open && (
        <div
          className="modal-overlay"
          onKeyDown={handleKeyDown}
        >
          <div
            ref={modalRef}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            <h3 id="dialog-title">
              Accessible Modal
            </h3>

            <p>
              Focus is trapped within this
              dialog. Press Escape to close.
            </p>

            <button>
              Secondary Action
            </button>

            <button
              ref={closeRef}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}