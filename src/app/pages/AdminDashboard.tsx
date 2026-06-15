import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  LogOut,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  ArrowLeft,
  BookOpen,
  FileQuestion
} from "lucide-react";
import { Button } from "../components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface LeaderboardEntry {
  name: string;
  kelas: string;
  score: number;
  date: string;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [stats, setStats] = useState({
    totalStudents: 0,
    averageScore: 0,
    highestScore: 0,
    lowestScore: 0,
  });

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      navigate("/admin/login");
      return;
    }

    // Load data
    const data = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    setLeaderboard(data);

    // Calculate stats
    if (data.length > 0) {
      const scores = data.map((e: LeaderboardEntry) => e.score);
      setStats({
        totalStudents: data.length,
        averageScore: Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length),
        highestScore: Math.max(...scores),
        lowestScore: Math.min(...scores),
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  // Score distribution data
  const getScoreDistribution = () => {
    const ranges = [
      { name: "0-50", count: 0, color: "#ef4444" },
      { name: "51-100", count: 0, color: "#f97316" },
      { name: "101-150", count: 0, color: "#eab308" },
      { name: "151-200", count: 0, color: "#22c55e" },
      { name: "201-250", count: 0, color: "#3b82f6" },
      { name: "251-300", count: 0, color: "#8b5cf6" },
    ];

    leaderboard.forEach((entry) => {
      const score = entry.score;
      if (score <= 50) ranges[0].count++;
      else if (score <= 100) ranges[1].count++;
      else if (score <= 150) ranges[2].count++;
      else if (score <= 200) ranges[3].count++;
      else if (score <= 250) ranges[4].count++;
      else ranges[5].count++;
    });

    return ranges.filter((r) => r.count > 0);
  };

  // Class distribution
  const getClassDistribution = () => {
    const classMap: { [key: string]: number } = {};
    leaderboard.forEach((entry) => {
      classMap[entry.kelas] = (classMap[entry.kelas] || 0) + 1;
    });

    return Object.entries(classMap).map(([name, count]) => ({
      name,
      count,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/")}
                className="bg-purple-100 text-purple-600 hover:bg-purple-200 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Beranda
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin</h1>
                <p className="text-sm text-gray-600">Monitoring Hasil Belajar Siswa</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white rounded-xl"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
       <div className="grid md:grid-cols-2 gap-6 mb-8">

  <div
    onClick={() => navigate("/admin/materi")}
    className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all"
  >
    <BookOpen className="w-10 h-10 mb-3" />
    <h2 className="text-2xl font-bold">
      Kelola Materi
    </h2>
    <p>
      Tambah, edit, dan hapus materi pembelajaran
    </p>
  </div>

  <div
    onClick={() => navigate("/admin/soal")}
    className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all"
  >
    <FileQuestion className="w-10 h-10 mb-3" />
    <h2 className="text-2xl font-bold">
      Kelola Soal
    </h2>
    <p>
      Tambah dan edit soal kuis pilihan ganda
    </p>
  </div>

</div> {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Siswa</p>
            <p className="text-3xl font-bold text-blue-600">{stats.totalStudents}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-purple-100">
            <div className="bg-purple-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Rata-rata Skor</p>
            <p className="text-3xl font-bold text-purple-600">{stats.averageScore}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-green-100">
            <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Skor Tertinggi</p>
            <p className="text-3xl font-bold text-green-600">{stats.highestScore}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-orange-100">
            <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-3">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Skor Terendah</p>
            <p className="text-3xl font-bold text-orange-600">{stats.lowestScore}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Score Distribution */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-purple-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Distribusi Skor</h2>
            {leaderboard.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getScoreDistribution()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                    {getScoreDistribution().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center py-12 text-gray-500">Belum ada data</div>
            )}
          </div>

          {/* Class Distribution */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-purple-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Distribusi per Kelas</h2>
            {leaderboard.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={getClassDistribution()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, count }) => `${name}: ${count}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {getClassDistribution().map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#6366f1"][index % 6]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center py-12 text-gray-500">Belum ada data</div>
            )}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6">
            <h2 className="text-2xl font-bold text-white">Data Siswa</h2>
          </div>

          {leaderboard.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600 text-lg">Belum ada data siswa</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">No</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Nama</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Kelas</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Skor</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Tanggal</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leaderboard.map((entry, index) => {
                    const percentage = (entry.score / 300) * 100;
                    let status = "Kurang";
                    let statusColor = "bg-red-100 text-red-700";

                    if (percentage >= 80) {
                      status = "Sangat Baik";
                      statusColor = "bg-green-100 text-green-700";
                    } else if (percentage >= 60) {
                      status = "Baik";
                      statusColor = "bg-blue-100 text-blue-700";
                    } else if (percentage >= 40) {
                      status = "Cukup";
                      statusColor = "bg-yellow-100 text-yellow-700";
                    }

                    return (
                      <tr key={index} className="hover:bg-purple-50 transition-colors">
                        <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{entry.name}</td>
                        <td className="px-6 py-4">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {entry.kelas}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xl font-bold text-purple-600">{entry.score}</span>
                          <span className="text-sm text-gray-500 ml-1">/300</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(entry.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
