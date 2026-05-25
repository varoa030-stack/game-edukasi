import { useNavigate } from "react-router";
import { Home, Search } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-none">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Search className="w-16 h-16 text-purple-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sepertinya halaman yang kamu cari tidak ada atau telah dipindahkan.
        </p>

        {/* Suggestions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border-2 border-purple-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mungkin kamu mencari:</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/materi")}
              className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all text-left"
            >
              <p className="font-semibold text-blue-900">📚 Materi Pembelajaran</p>
              <p className="text-sm text-blue-700 mt-1">Belajar tentang tubuh manusia</p>
            </button>

            <button
              onClick={() => navigate("/quiz/level-1")}
              className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all text-left"
            >
              <p className="font-semibold text-purple-900">🎮 Mulai Kuis</p>
              <p className="text-sm text-purple-700 mt-1">Uji pemahamanmu dengan kuis</p>
            </button>

            <button
              onClick={() => navigate("/peringkat")}
              className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-lg transition-all text-left"
            >
              <p className="font-semibold text-orange-900">🏆 Peringkat</p>
              <p className="text-sm text-orange-700 mt-1">Lihat papan peringkat</p>
            </button>

            <button
              onClick={() => navigate("/panduan")}
              className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all text-left"
            >
              <p className="font-semibold text-green-900">📖 Panduan</p>
              <p className="text-sm text-green-700 mt-1">Cara menggunakan website</p>
            </button>
          </div>
        </div>

        {/* Back to Home Button */}
        <Button
          onClick={() => navigate("/")}
          className="h-14 px-8 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white shadow-lg text-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
