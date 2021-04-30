import "./styles.css";
import UseStateHook from "./hooks/useStateHook";

export default function App() {
  return (
    <div className="App">
      <h1>List of hooks</h1>
      <div className="state-hook">
        <UseStateHook />
      </div>
    </div>
  );
}
