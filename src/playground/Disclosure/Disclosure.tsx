import { useState } from "react";
import "./Disclosure.css";

export default function Disclosure() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <h2>Disclosure Component</h2>

      <button
        className="disclosure-trigger"
        aria-expanded={open}
        aria-controls="disclosure-panel"
        onClick={() => setOpen((prev) => !prev)}
      >
        What is accessibility?
      </button>

      {open && (
        <div
          id="disclosure-panel"
          className="disclosure-panel"
        >
          Accessibility ensures websites and applications
          can be used by everyone, including keyboard and
          screen-reader users.
        </div>
      )}
    </section>
  );
}