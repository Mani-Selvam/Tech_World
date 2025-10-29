// ✅ Safe PWA check — avoids InvalidStateError in iframes
if (window === window.top) {
    navigator
        .getInstalledRelatedApps?.()
        .then((apps) => console.log("Installed related apps:", apps))
        .catch((err) => console.warn("Not supported:", err));
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
