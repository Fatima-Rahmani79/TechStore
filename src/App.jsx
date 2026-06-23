import AppRoutes from "./routes/AppRoutes";

import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  useDarkMode(); // ← فقط همین کافیه، بقیه hook کارش رو می‌کنه
  return <AppRoutes />;
}
