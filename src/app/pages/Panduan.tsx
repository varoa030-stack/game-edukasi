import { BookOpen, Trophy, Award, Target, HelpCircle } from "lucide-react";

export function Panduan() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <HelpCircle className="w-5 h-5" />
          <span className="font-semibold">Panduan</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Cara Menggunakan Website
        </h1>
        <p className="text-gray-600">Ikuti panduan ini untuk pengalaman belajar yang maksimal!</p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {/* Step 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Masukkan Nama dan Kelas</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Di halaman beranda, isi nama lengkap dan kelas kamu. Data ini akan digunakan untuk menyimpan hasil belajar dan kuis kamu.
              </p>
              <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-100">
                <p className="text-blue-700 font-medium">💡 Tips: Pastikan nama dan kelas sudah benar sebelum memulai!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Pelajari Materi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Klik tombol "Mulai Belajar" untuk mempelajari bagian-bagian tubuh manusia. Setiap bagian dilengkapi dengan gambar dan penjelasan fungsinya.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Gunakan tombol "Selanjutnya" dan "Sebelumnya" untuk navigasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Baca dengan teliti fungsi dari setiap bagian tubuh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Kamu bisa langsung ke halaman tertentu dengan klik titik navigasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Ikuti Kuis 2 Level</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Setelah mempelajari materi, uji pemahamanmu dengan kuis yang terdiri dari 2 level berbeda:
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-400 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-blue-900">Level 1: Tebak Gambar</h3>
                  </div>
                  <p className="text-blue-700">Pilih jawaban yang tepat dari 4 pilihan untuk setiap gambar bagian tubuh.</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-400 w-10 h-10 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-green-900">Level 3: Kuis Pemahaman</h3>
                  </div>
                  <p className="text-green-700">Jawab pertanyaan tentang fungsi bagian tubuh dengan pilihan ganda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-green-100">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Lihat Hasil dan Peringkat</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Setelah menyelesaikan semua level kuis, kamu akan melihat:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Skor untuk setiap level dan total skor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Perbandingan skor awal (pretest) dan akhir (posttest)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Grafik peningkatan dan pesan motivasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Peringkat kamu dibandingkan dengan siswa lain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl shadow-xl p-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Tips Sukses
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 p-4 rounded-2xl">
              <p className="font-semibold text-orange-800 mb-1">Pelajari dengan teliti</p>
              <p className="text-gray-600 text-sm">Baca semua materi sebelum mengerjakan kuis</p>
            </div>
            <div className="bg-white/80 p-4 rounded-2xl">
              <p className="font-semibold text-orange-800 mb-1">Jangan terburu-buru</p>
              <p className="text-gray-600 text-sm">Pikirkan jawaban dengan baik sebelum memilih</p>
            </div>
            <div className="bg-white/80 p-4 rounded-2xl">
              <p className="font-semibold text-orange-800 mb-1">Coba lagi jika perlu</p>
              <p className="text-gray-600 text-sm">Kamu bisa mengulang kuis untuk skor lebih baik</p>
            </div>
            <div className="bg-white/80 p-4 rounded-2xl">
              <p className="font-semibold text-orange-800 mb-1">Nikmati prosesnya</p>
              <p className="text-gray-600 text-sm">Belajar itu menyenangkan, tetap semangat!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
