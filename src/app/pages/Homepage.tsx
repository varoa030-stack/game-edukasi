import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BookOpen, Trophy, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Homepage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    // Load saved user data
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const user = JSON.parse(savedUser);
      setName(user.name || "");
    }
  }, []);

  const handleStart = (type: "materi" | "quiz") => {
    // Cek nama
    if (!name.trim()) {
      alert("Mohon isi nama terlebih dahulu!");
      return;
    }

    // Simpan data user
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name.trim(),
      })
    );

    // Navigasi
    if (type === "materi") {
      navigate("/materi");
    } else {
      navigate("/quiz/level-1");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Admin Button */}
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => navigate("/admin/login")}
          className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl"
        >
          <Shield className="w-4 h-4 mr-2" />
          Admin
        </Button>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

        {/* Left Content */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-block">
            <span className="bg-gradient-to-r from-yellow-200 to-orange-200 px-4 py-2 rounded-full text-sm font-medium text-orange-700">
              ✨ Belajar Sambil Bermain
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Kenali{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Tubuhmu
            </span>{" "}
            dengan Cara Menyenangkan!
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600">
            Belajar tentang bagian-bagian tubuh manusia melalui materi
            interaktif dan soal yang seru. Cocok untuk siswa SD!
          </p>

          {/* Input Form */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg space-y-4 border-2 border-purple-100">

            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Nama Lengkap
              </Label>

              <Input
                id="name"
                placeholder="Masukkan nama kamu..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl border-2 border-purple-200 focus:border-purple-400 h-12"
              />
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">

            {/* Mulai Belajar */}
            <Button
              onClick={() => handleStart("materi")}
              className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all text-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Mulai Belajar
            </Button>

            {/* Mulai Soal */}
            <Button
              onClick={() => handleStart("quiz")}
              className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all text-lg"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Mulai Soal
            </Button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30"></div>

          <div className="relative bg-white/50 backdrop-blur-sm p-4 rounded-3xl shadow-2xl">

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1714938944745-ccc002c73974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpZHMlMjBsZWFybmluZyUyMGFuYXRvbXl8ZW58MXx8fHwxNzcxNzM5MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Anak belajar anatomi"
              className="rounded-2xl w-full h-auto object-cover"
            />

          </div>
        </div>

      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Materi */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-3xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform">

          <div className="bg-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <BookOpen className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Materi Lengkap
          </h3>

          <p className="text-blue-700">
            Belajar tentang mata, telinga, tangan, kaki, dan bagian tubuh
            lainnya
          </p>

        </div>

        {/* Soal */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-3xl shadow-lg border-2 border-purple-200 hover:scale-105 transition-transform">

          <div className="bg-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <Trophy className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl font-bold text-purple-900 mb-2">
            2 Level Soal
          </h3>

          <p className="text-purple-700">
            Tebak gambar dan soal pemahaman yang seru!
          </p>

        </div>

        {/* Peringkat */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-3xl shadow-lg border-2 border-orange-200 hover:scale-105 transition-transform">

          <div className="bg-orange-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <span className="text-3xl">🏆</span>
          </div>

          <h3 className="text-xl font-bold text-orange-900 mb-2">
            Peringkat
          </h3>

          <p className="text-orange-700">
            Lihat skormu dan bandingkan dengan teman-teman!
          </p>

        </div>

      </div>

    </div>
  );
}
