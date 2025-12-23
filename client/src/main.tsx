// ✅ Safe PWA check — avoids InvalidStateError in iframes
// Only run in production to avoid console spam in development
if (process.env.NODE_ENV === 'production' && window === window.top) {
    (navigator as any)
        .getInstalledRelatedApps?.()
        .catch(() => {}); // Silent fail in production
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
