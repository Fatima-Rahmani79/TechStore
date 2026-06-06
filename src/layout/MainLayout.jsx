import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <h2>Navbar</h2>

      <main>
        <Outlet />
      </main>

      <h2>Footer</h2>
    </>
  );
}
