import { useRef, useState } from "react";
import "./Tabs.css";

const tabs = [
  {
    label: "Overview",
    content:
      "Overview content describing the component playground.",
  },
  {
    label: "Features",
    content:
      "Keyboard navigation, ARIA support, and focus management.",
  },
  {
    label: "Accessibility",
    content:
      "Built according to ARIA Authoring Practices fundamentals.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    setActiveTab(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    switch (event.key) {
      case "ArrowRight":
        focusTab((activeTab + 1) % tabs.length);
        break;

      case "ArrowLeft":
        focusTab(
          (activeTab - 1 + tabs.length) % tabs.length
        );
        break;

      case "Home":
        focusTab(0);
        break;

      case "End":
        focusTab(tabs.length - 1);
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <h2>Tabs Component</h2>

      <div
        role="tablist"
        aria-label="Accessibility Tabs"
        className="tab-list"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className={`tab ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="tab-panel"
      >
        {tabs[activeTab].content}
      </div>
    </section>
  );
}