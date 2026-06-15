import { useEffect, useState } from "react";
import { Trophy, Medal, Award, Crown } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
interface LeaderboardEntry {
  name: string;
  kelas: string;
  score: number;
  date: string;
}

export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
  const loadLeaderboard = async () => {
    const snapshot = await getDocs(
      collection(db, "leaderboard")
    );

    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as LeaderboardEntry[];

    data.sort((a, b) => b.score - a.score);

    setLeaderboard(data);
  };

  loadLeaderboard();
}, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-8 h-8 text-yellow-500" />;
      case 1:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 2:
        return <Award className="w-8 h-8 text-orange-600" />;
      default:
        return <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>;
    }
  };

  const getRankBadgeColor = (index: number) => {
    switch (index) {
      case 0:
        return "from-yellow-400 to-yellow-600";
      case 1:
        return "from-gray-300 to-gray-500";
      case 2:
        return "from-orange-400 to-orange-600";
      default:
        return "from-blue-400 to-purple-500";
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Peringkat</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Papan Peringkat
        </h1>
        <p className="text-gray-600">Lihat siswa dengan skor tertinggi!</p>
      </div>

      {/* Top 3 Podium */}
      {leaderboard.length >= 3 && (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* 2nd Place */}
          <div className="md:order-1 order-2">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-xl p-6 text-center border-2 border-gray-300 transform md:translate-y-8">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {getRankIcon(1)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{leaderboard[1].name}</h3>
              <p className="text-sm text-gray-600 mb-3">Kelas {leaderboard[1].kelas}</p>
              <div className="bg-white rounded-2xl p-4 shadow-inner">
                <p className="text-4xl font-bold text-gray-600">{leaderboard[1].score}</p>
                <p className="text-sm text-gray-500">poin</p>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="md:order-2 order-1">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl shadow-2xl p-8 text-center border-4 border-yellow-400 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-4 py-1 rounded-full shadow-lg">
                <span className="text-sm font-bold text-yellow-900">🏆 Juara 1</span>
              </div>
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl mt-2">
                {getRankIcon(0)}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{leaderboard[0].name}</h3>
              <p className="text-sm text-gray-600 mb-4">Kelas {leaderboard[0].kelas}</p>
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl p-6 shadow-lg">
                <p className="text-5xl font-bold text-yellow-900">{leaderboard[0].score}</p>
                <p className="text-sm text-yellow-800">poin</p>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="md:order-3 order-3">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl shadow-xl p-6 text-center border-2 border-orange-300 transform md:translate-y-8">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {getRankIcon(2)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{leaderboard[2].name}</h3>
              <p className="text-sm text-gray-600 mb-3">Kelas {leaderboard[2].kelas}</p>
              <div className="bg-white rounded-2xl p-4 shadow-inner">
                <p className="text-4xl font-bold text-orange-600">{leaderboard[2].score}</p>
                <p className="text-sm text-gray-500">poin</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Leaderboard Table */}
      <div className="bg-white rounded-3xl shadow-xl border-2 border-purple-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6">
          <h2 className="text-2xl font-bold text-white text-center">Semua Peringkat</h2>
        </div>

        {leaderboard.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <p className="text-gray-600 text-lg">Belum ada data peringkat.</p>
            <p className="text-gray-500 mt-2">Selesaikan kuis untuk masuk ke peringkat!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Peringkat</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Nama</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Kelas</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Skor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Tanggal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leaderboard.map((entry, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-purple-50 transition-colors ${
                      index < 3 ? "bg-gradient-to-r from-purple-50/50 to-transparent" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getRankBadgeColor(index)} shadow-md`}>
                        {index < 3 ? (
                          <div className="text-white">{getRankIcon(index)}</div>
                        ) : (
                          <span className="text-white font-bold text-lg">#{index + 1}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-800">{entry.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {entry.kelas}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-2xl font-bold text-purple-600">{entry.score}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-500">
                        {new Date(entry.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Stats */}
      {leaderboard.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-3xl shadow-lg border-2 border-blue-200 text-center">
            <div className="text-4xl mb-2">👥</div>
            <p className="text-gray-700 font-medium mb-1">Total Peserta</p>
            <p className="text-3xl font-bold text-blue-700">{leaderboard.length}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-3xl shadow-lg border-2 border-purple-200 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <p className="text-gray-700 font-medium mb-1">Skor Tertinggi</p>
            <p className="text-3xl font-bold text-purple-700">
              {Math.max(...leaderboard.map((e) => e.score))}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-3xl shadow-lg border-2 border-orange-200 text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-700 font-medium mb-1">Rata-rata Skor</p>
            <p className="text-3xl font-bold text-orange-700">
              {Math.round(leaderboard.reduce((sum, e) => sum + e.score, 0) / leaderboard.length)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
