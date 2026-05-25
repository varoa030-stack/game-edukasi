import { GraduationCap, Heart, Target, Users } from "lucide-react";

export function Tentang() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <GraduationCap className="w-5 h-5" />
          <span className="font-semibold">Tentang</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Game Edukasi Tubuhku
        </h1>
        <p className="text-gray-600">Platform pembelajaran interaktif untuk siswa SD</p>
      </div>

      {/* Main Description */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100 mb-8">
        <div className="flex items-start gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-2xl flex-shrink-0">
            <Heart className="w-12 h-12 text-purple-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apa itu Game Edukasi Tubuhku?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Game Edukasi Tubuhku adalah platform pembelajaran berbasis web yang dirancang khusus untuk membantu siswa Sekolah Dasar (SD) mempelajari bagian-bagian tubuh manusia dan fungsinya dengan cara yang menyenangkan dan interaktif.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Website ini menggabungkan materi pembelajaran yang mudah dipahami dengan kuis interaktif yang terdiri dari dua level berbeda, sehingga siswa dapat belajar sambil bermain dan menguji pemahaman mereka secara bertahap.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl shadow-xl p-8 border-2 border-blue-200">
          <div className="bg-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Tujuan</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">▸</span>
              <span>Membantu siswa mengenal bagian-bagian tubuh manusia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">▸</span>
              <span>Meningkatkan pemahaman tentang fungsi setiap bagian tubuh</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">▸</span>
              <span>Membuat proses belajar lebih menyenangkan dan interaktif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">▸</span>
              <span>Mengukur peningkatan pemahaman siswa</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl shadow-xl p-8 border-2 border-purple-200">
          <div className="bg-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Target Pengguna</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">▸</span>
              <span>Siswa Sekolah Dasar (SD) kelas 1-6</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">▸</span>
              <span>Guru sebagai alat bantu mengajar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">▸</span>
              <span>Orang tua yang ingin mendampingi belajar anak</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">▸</span>
              <span>Peneliti pendidikan untuk evaluasi pembelajaran</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Fitur Utama */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fitur Utama</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold text-blue-900 mb-2">Materi Interaktif</h3>
            <p className="text-sm text-blue-700">Gambar dan penjelasan lengkap untuk setiap bagian tubuh</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="font-bold text-purple-900 mb-2">2 Level Kuis</h3>
            <p className="text-sm text-purple-700">Tebak gambar dan kuis pemahaman</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-green-900 mb-2">Analisis Hasil</h3>
            <p className="text-sm text-green-700">Grafik perbandingan dan pesan motivasi</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-orange-900 mb-2">Peringkat</h3>
            <p className="text-sm text-orange-700">Papan peringkat untuk memotivasi siswa</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-pink-900 mb-2">Desain Ramah Anak</h3>
            <p className="text-sm text-pink-700">Warna cerah dan interface yang mudah digunakan</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl border border-teal-200">
            <div className="text-4xl mb-3">👨‍💼</div>
            <h3 className="font-bold text-teal-900 mb-2">Panel Admin</h3>
            <p className="text-sm text-teal-700">Dashboard untuk monitoring hasil belajar siswa</p>
          </div>
        </div>
      </div>

      {/* Research Context */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl shadow-xl p-8 border-2 border-orange-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <span className="text-3xl">🎓</span>
          Tentang Penelitian
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Website ini dikembangkan sebagai bagian dari penelitian skripsi yang bertujuan untuk mengkaji efektivitas media pembelajaran berbasis game edukasi dalam meningkatkan pemahaman siswa SD tentang anatomi tubuh manusia.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Penelitian ini menggunakan metode pretest dan posttest untuk mengukur peningkatan pemahaman siswa sebelum dan sesudah menggunakan platform game edukasi ini. Data yang dikumpulkan akan digunakan untuk keperluan akademis dan pengembangan pendidikan.
        </p>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
        <p className="text-gray-600">
          © 2026 Game Edukasi Tubuhku
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Dibuat dengan ❤️ untuk pendidikan yang lebih baik
        </p>
      </div>
    </div>
  );
}
