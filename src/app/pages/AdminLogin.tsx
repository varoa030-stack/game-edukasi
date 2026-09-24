import { useState } from "react";
import { useNavigate } from "react-router";
import { Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple authentication (in real app, this should be server-side)
    if (username === "adminsd" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          className="mb-6 bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-2xl"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Button>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Login Admin
            </h1>

            <p className="text-gray-600">
              Masuk untuk mengakses dashboard admin
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
                <p className="text-red-700 text-sm font-medium">
                  {error}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700">
                Username
              </Label>

              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 border-purple-200 focus:border-purple-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 border-purple-200 focus:border-purple-400"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white shadow-lg text-lg"
            >
              Masuk
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

