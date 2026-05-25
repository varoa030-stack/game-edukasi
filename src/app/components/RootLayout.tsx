import { Outlet, Link, useLocation } from "react-router";
import { GraduationCap } from "lucide-react";

export function RootLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Don't show navbar/footer on admin routes
  if (isAdminRoute) {
    return <Outlet />;
  }

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Materi", path: "/materi" },
    { name: "Kuis", path: "/quiz/level-1" },
    { name: "Peringkat", path: "/peringkat" },
    { name: "Panduan", path: "/panduan" },
    { name: "Tentang", path: "/tentang" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-purple-700">Game Edukasi</h1>
                <p className="text-sm text-purple-500">Tubuhku</p>
              </div>
            </Link>

            {/* Menu */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || 
                  (item.path === "/quiz/level-1" && location.pathname.startsWith("/quiz"));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-xl transition-all font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-purple-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-md border-t border-purple-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Game Edukasi Tubuhku. Dibuat untuk penelitian pendidikan.
          </p>
        </div>
      </footer>
    </div>
  );
}
