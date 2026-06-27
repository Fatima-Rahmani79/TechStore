import AppRoutes from "./routes/AppRoutes";

import { useDarkMode } from "./hooks/useDarkMode";
import AiChatWidget from "./features/ai/components/AiChatWidget";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  useDarkMode(); // ← فقط همین کافیه، بقیه hook کارش رو می‌کنه
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <AiChatWidget />
    </>
  );
}
