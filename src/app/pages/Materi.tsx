import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import { bodyParts } from "../data/bodyParts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Materi() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPart = bodyParts[currentIndex];


const materiAdmin = JSON.parse(
  localStorage.getItem("materi") || "[]"
);
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < bodyParts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleStartQuiz = () => {
    navigate("/quiz/level-1");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <BookOpen className="w-5 h-5" />
          <span className="font-semibold">Materi Pembelajaran</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Kenali Bagian Tubuhmu
        </h1>
        <p className="text-gray-600">
          Halaman {currentIndex + 1} dari {bodyParts.length}
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-purple-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl blur-xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl">
              <ImageWithFallback
                src={currentPart.image}
                alt={currentPart.name}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            {/* Category Badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-purple-600">{currentPart.category}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                {currentPart.name}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-purple-100">
              <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Fungsi:
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {currentPart.function}
              </p>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-2xl border-2 border-orange-200">
              <p className="text-orange-700 font-medium flex items-center gap-2">
                <span className="text-xl">💡</span>
                Tahukah kamu? {currentPart.name} adalah bagian yang sangat penting untuk tubuh kita!
              </p>
            </div>
          </div>
        </div>
      </div>
{materiAdmin.length > 0 && (
  <div className="mb-10">
    <h2 className="text-3xl font-bold mb-6">
      Materi Tambahan dari Guru
    </h2>

    {materiAdmin.map((item: any) => (
      <div
        key={item.id}
        className="bg-white rounded-2xl shadow-lg p-6 mb-4 border"
      >
        <h3 className="text-xl font-bold mb-2">
          {item.judul}
        </h3>

        <p>
          {item.isi}
        </p>
      </div>
    ))}
  </div>
)}
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="h-12 px-6 rounded-2xl bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Sebelumnya
        </Button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {bodyParts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-blue-400 to-purple-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={currentIndex === bodyParts.length - 1}
          className="h-12 px-6 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Selanjutnya
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* CTA to Quiz */}
      const materiAdmin = JSON.parse(
  localStorage.getItem("materi") || "[]"
);{currentIndex === bodyParts.length - 1 && (
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-3xl border-2 border-orange-200 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            🎉 Selamat! Kamu sudah belajar semua materi!
          </h3>
          <p className="text-gray-700 mb-6">
            Sekarang saatnya uji pemahamanmu dengan kuis yang seru!
          </p>
          <Button
            onClick={handleStartQuiz}
            className="h-14 px-8 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white text-lg shadow-lg"
          >
            🏆 Lanjut ke Kuis
          </Button>
        </div>
      )}
    </div>
  );
}
