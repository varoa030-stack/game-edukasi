import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Trophy, TrendingUp, Award, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function Results() {
  const navigate = useNavigate();
  const [quizScores, setQuizScores] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [pretest, setPretest] = useState(0);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    
    // Simulate pretest (in real app, this would be stored separately)
    // For demo, we'll use a random lower score or stored value
    const storedPretest = localStorage.getItem("pretestScore");
    const pretestScore = storedPretest ? parseInt(storedPretest) : Math.floor(Math.random() * 100) + 50;
    
    if (!storedPretest) {
      localStorage.setItem("pretestScore", pretestScore.toString());
    }

    setQuizScores(scores);
    setUser(userData);
    setPretest(pretestScore);
  }, []);

  if (!quizScores) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-600">Memuat hasil...</p>
      </div>
    );
  }

  const posttest = quizScores.total || 0;
  const improvement = posttest - pretest;
  const improvementPercent = pretest > 0 ? ((improvement / pretest) * 100).toFixed(1) : 0;

  const chartData = [
    {
      name: "Pretest",
      skor: pretest,
    },
    {
      name: "Posttest",
      skor: posttest,
    },
  ];

  const getMotivationMessage = () => {
    if (improvement > 50) {
      return {
        emoji: "🌟",
        title: "Luar Biasa!",
        message: "Peningkatan skormu sangat fantastis! Kamu benar-benar memahami materi dengan baik!",
        color: "from-green-400 to-emerald-500",
      };
    } else if (improvement > 20) {
      return {
        emoji: "🎉",
        title: "Hebat!",
        message: "Skormu meningkat dengan baik! Terus semangat belajar!",
        color: "from-blue-400 to-cyan-500",
      };
    } else if (improvement > 0) {
      return {
        emoji: "👍",
        title: "Bagus!",
        message: "Ada peningkatan! Terus berlatih dan kamu pasti bisa lebih baik lagi!",
        color: "from-yellow-400 to-orange-500",
      };
    } else {
      return {
        emoji: "💪",
        title: "Tetap Semangat!",
        message: "Jangan menyerah! Coba pelajari materi lagi dan ulangi kuisnya ya!",
        color: "from-purple-400 to-pink-500",
      };
    }
  };

  const motivation = getMotivationMessage();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${motivation.color} text-white px-6 py-3 rounded-full shadow-lg mb-4`}>
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Hasil Kuis</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Selamat, {user?.name || "Siswa"}! 🎊
        </h1>
        <p className="text-gray-600">Kelas: {user?.kelas || "-"}</p>
      </div>

      {/* Score Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Pretest */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <span className="text-3xl">📝</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Skor Awal (Pretest)</h3>
          <p className="text-5xl font-bold text-blue-500 text-center">{pretest}</p>
        </div>

        {/* Posttest */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-green-100">
          <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <Trophy className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Skor Akhir (Posttest)</h3>
          <p className="text-5xl font-bold text-green-500 text-center">{posttest}</p>
        </div>

        {/* Improvement */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100">
          <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Peningkatan</h3>
          <p className={`text-5xl font-bold text-center ${improvement >= 0 ? "text-purple-500" : "text-red-500"}`}>
            {improvement >= 0 ? "+" : ""}{improvement}
          </p>
          <p className="text-sm text-gray-500 text-center mt-2">({improvementPercent}%)</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Grafik Perbandingan Skor
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 300]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="skor" fill="url(#colorGradient)" radius={[10, 10, 0, 0]} />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Motivation Message */}
      <div className={`bg-gradient-to-r ${motivation.color} rounded-3xl shadow-xl p-10 text-white text-center mb-8`}>
        <div className="text-6xl mb-4">{motivation.emoji}</div>
        <h2 className="text-3xl font-bold mb-3">{motivation.title}</h2>
        <p className="text-xl opacity-95">{motivation.message}</p>
      </div>

      {/* Detail Scores */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Detail Skor Per Level</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-gray-600 mb-1">Level 1</p>
            <p className="text-3xl font-bold text-blue-600">{quizScores.level1 || 0}</p>
            <p className="text-sm text-gray-500">Tebak Gambar</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-gray-600 mb-1">Level 3</p>
            <p className="text-3xl font-bold text-green-600">{quizScores.level3 || 0}</p>
            <p className="text-sm text-gray-500">Pemahaman</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 justify-center">
        <Button
          onClick={() => navigate("/peringkat")}
          className="h-14 px-8 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg"
        >
          <Award className="w-5 h-5 mr-2" />
          Lihat Peringkat
        </Button>
        <Button
          onClick={() => navigate("/")}
          className="h-14 px-8 rounded-2xl bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50 shadow-md"
        >
          <Home className="w-5 h-5 mr-2" />
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
