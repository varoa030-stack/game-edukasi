import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Trophy, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { level1Questions } from "../data/quizQuestions";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function QuizLevel1() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = level1Questions[currentQuestion];
  const progress = ((currentQuestion + 1) / level1Questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer
    
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setScore(score + 20);
    }

    // Auto advance after 1 second
    setTimeout(() => {
      if (currentQuestion < level1Questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleNextLevel = () => {
    // Save Level 1 score
    const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    localStorage.setItem("quizScores", JSON.stringify({
      ...existingScores,
      level1: score
    }));

    navigate("/quiz/level-3");
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  if (showResult) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-2 border-purple-100">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Trophy className="w-16 h-16 text-orange-500" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Level 1 Selesai! 🎉
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8 border-2 border-purple-100">
            <p className="text-gray-600 mb-2">Skor Kamu:</p>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              {score}
            </p>
            <p className="text-gray-500 mt-2">dari 100 poin</p>
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
              onClick={handleNextLevel}
              className="h-12 px-8 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white shadow-md"
            >
              Lanjut Level 3
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Level 1 - Tebak Gambar</span>
        </div>
        <p className="text-gray-600">
          Soal {currentQuestion + 1} dari {level1Questions.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <Progress value={progress} className="h-3 bg-gray-200" />
        <p className="text-sm text-gray-500 mt-2 text-center">{Math.round(progress)}% selesai</p>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-100">
        {/* Question */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {question.question}
        </h2>

        {/* Image */}
        {question.image && (
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl blur-xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl">
                <ImageWithFallback
                  src={question.image}
                  alt="Soal"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
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
                className={`p-6 rounded-2xl text-lg font-semibold transition-all border-2 ${
                  showCorrect
                    ? "bg-green-100 border-green-400 text-green-700"
                    : showWrong
                    ? "bg-red-100 border-red-400 text-red-700"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border-purple-200 text-gray-700 hover:border-purple-400 hover:shadow-lg"
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showCorrect && <span className="text-2xl">✓</span>}
                  {showWrong && <span className="text-2xl">✗</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Score Display */}
      <div className="mt-6 text-center">
        <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-lg border-2 border-purple-100">
          <p className="text-gray-600 text-sm mb-1">Skor Saat Ini</p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}
