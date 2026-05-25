import { useState } from "react";
import { useNavigate } from "react-router";
import { Trophy, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { level3Questions } from "../data/quizQuestions";

export function QuizLevel3() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = level3Questions[currentQuestion];
  const progress = ((currentQuestion + 1) / level3Questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;

    setAnswers([...answers, isCorrect]);

    if (isCorrect) {
      setScore(score + 20);
    }

    setTimeout(() => {
      if (currentQuestion < level3Questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleFinish = () => {
    // Calculate total score from all levels
    const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    const totalScore = (existingScores.level1 || 0) + score;

    // Save Level 3 score and total
    localStorage.setItem("quizScores", JSON.stringify({
      ...existingScores,
      level3: score,
      total: totalScore,
    }));

    // Save to leaderboard
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    
    leaderboard.push({
      name: user.name || "Anonim",
      kelas: user.kelas || "-",
      score: totalScore,
      date: new Date().toISOString(),
    });

    // Sort by score descending
    leaderboard.sort((a: any, b: any) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    navigate("/hasil");
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  if (showResult) {
    const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    const totalScore = (existingScores.level1 || 0) + score;

    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-2 border-purple-100">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Trophy className="w-16 h-16 text-orange-500" />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Level 3 Selesai! 🎊</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-purple-100">
              <p className="text-gray-600 mb-2">Skor Level 3:</p>
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                {score}
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-orange-200">
              <p className="text-gray-600 mb-2">Total Skor Semua Level:</p>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                {totalScore}
              </p>
              <p className="text-gray-500 mt-2">dari 200 poin</p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3 mb-8">
            {answers.map((isCorrect, index) => (
              <div
                key={index}
                className={`h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-md ${
                  isCorrect ? "bg-green-400" : "bg-red-400"
                }`}
              >
                {isCorrect ? "✓" : "✗"}
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleRetry}
              className="h-12 px-8 rounded-2xl bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50 shadow-md"
            >
              Coba Lagi
            </Button>
            <Button
              onClick={handleFinish}
              className="h-12 px-8 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white shadow-md"
            >
              Lihat Hasil Lengkap
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Level 3 - Kuis Pemahaman</span>
        </div>
        <p className="text-gray-600">
          Soal {currentQuestion + 1} dari {level3Questions.length}
        </p>
      </div>

      <div className="mb-8">
        <Progress value={progress} className="h-3 bg-gray-200" />
        <p className="text-sm text-gray-500 mt-2 text-center">{Math.round(progress)}% selesai</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === question.correctAnswer;
            const showCorrect = selectedAnswer && isCorrect;
            const showWrong = isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={!!selectedAnswer}
                className={`w-full p-6 rounded-2xl text-lg font-semibold transition-all border-2 text-left ${
                  showCorrect
                    ? "bg-green-100 border-green-400 text-green-700"
                    : showWrong
                    ? "bg-red-100 border-red-400 text-red-700"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border-purple-200 text-gray-700 hover:border-purple-400 hover:shadow-lg"
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-start gap-3">
                    <span className="bg-white/50 px-3 py-1 rounded-lg text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {showCorrect && <span className="text-2xl">✓</span>}
                  {showWrong && <span className="text-2xl">✗</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-lg border-2 border-purple-100">
          <p className="text-gray-600 text-sm mb-1">Skor Level 3</p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}
