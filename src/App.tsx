import "./styles/globals.css";

import Modal from "./playground/Modal/Modal";
import Tabs from "./playground/Tabs/Tabs";
import Disclosure from "./playground/Disclosure/Disclosure";

function App() {
  return (
    <main className="container">
      <h1>Accessible Component Fundamentals</h1>

      <Modal />
      <Tabs />
      <Disclosure />
    </main>
  );
}

export default App;