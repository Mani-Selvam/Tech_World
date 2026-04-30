// Safe PWA check — avoids InvalidStateError in iframes
// (Vite uses import.meta.env.* on the client)
if (import.meta.env.PROD && window.self === window.top) {
    (navigator as any).getInstalledRelatedApps?.().catch(() => {});
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
