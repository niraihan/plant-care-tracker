import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex dark:bg-gray-900">
      {/* Sticky Sidebar */}
      <aside className="w-64 p-6 space-y-4 h-screen sticky top-0 overflow-y-auto
                        bg-green-100 text-green-700
                        dark:bg-gray-800 dark:text-green-300">
        <h2 className="text-2xl font-bold mb-6">🌿 Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink
            to="/dashboard/add-plant"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? "btn-success" : "btn-outline"} dark:text-green-300`
            }
          >
            Add Plant
          </NavLink>
          <NavLink
            to="/dashboard/my-plants"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? "btn-success" : "btn-outline"} dark:text-green-300`
            }
          >
            My Plants
          </NavLink>
          <NavLink
            to="/dashboard/newsletter"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? "btn-success" : "btn-outline"} dark:text-green-300`
            }
          >
            Newsletter Subscribers
          </NavLink>
        </nav>
      </aside>

      {/* Main Content (Scrollable) */}
      <main className="flex-1 h-screen overflow-y-auto p-6 bg-white dark:bg-gray-900 dark:text-gray-200">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
