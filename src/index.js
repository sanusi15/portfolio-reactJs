import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"

// ReactDOM.render(<App />, document.querySelector("#root"))
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)