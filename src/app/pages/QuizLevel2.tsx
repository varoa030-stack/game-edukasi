import { useState } from "react";
import { useNavigate } from "react-router";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Trophy, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { level2Pairs, MatchingPair } from "../data/quizQuestions";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const ItemType = "NAME_CARD";

interface DragItem {
  id: number;
  name: string;
}

function NameCard({ pair }: { pair: MatchingPair }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: pair.id, name: pair.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-center cursor-move shadow-lg hover:shadow-xl transition-all ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {pair.name}
    </div>
  );
}

function ImageDropZone({
  pair,
  droppedName,
  onDrop,
}: {
  pair: MatchingPair;
  droppedName: string | null;
  onDrop: (item: DragItem, targetId: number) => void;
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item: DragItem) => onDrop(item, pair.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const isCorrect = droppedName === pair.name;
  const hasDropped = droppedName !== null;

  return (
    <div
      ref={drop}
      className={`relative rounded-2xl border-4 border-dashed p-4 transition-all ${
        isOver
          ? "border-purple-500 bg-purple-50"
          : hasDropped
          ? isCorrect
            ? "border-green-400 bg-green-50"
            : "border-red-400 bg-red-50"
          : "border-gray-300 bg-white"
      }`}
    >
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-2 mb-3">
        <ImageWithFallback
          src={pair.image}
          alt="Body part"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>

      <div
        className={`min-h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
          hasDropped
            ? isCorrect
              ? "bg-green-400 text-white"
              : "bg-red-400 text-white"
            : "bg-gray-100 text-gray-400"
        }`}
      >
        {hasDropped ? (
          <div className="flex items-center gap-2">
            <span>{droppedName}</span>
            <span className="text-xl">{isCorrect ? "✓" : "✗"}</span>
          </div>
        ) : (
          <span className="text-sm">Tarik nama ke sini</span>
        )}
      </div>
    </div>
  );
}

function QuizLevel2Content() {
  const navigate = useNavigate();
  const [matches, setMatches] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const shuffledNames = [...level2Pairs].sort(() => Math.random() - 0.5);
  const usedNames = Object.values(matches);
  const availableNames = shuffledNames.filter((pair) => !usedNames.includes(pair.name));

  const handleDrop = (item: DragItem, targetId: number) => {
    // Remove the name from any previous match
    const newMatches = { ...matches };
    Object.keys(newMatches).forEach((key) => {
      if (newMatches[parseInt(key)] === item.name) {
        delete newMatches[parseInt(key)];
      }
    });

    // Add new match
    newMatches[targetId] = item.name;
    setMatches(newMatches);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    level2Pairs.forEach((pair) => {
      if (matches[pair.id] === pair.name) {
        correctCount++;
      }
    });

    const calculatedScore = (correctCount / level2Pairs.length) * 100;
    setScore(calculatedScore);
    setShowResult(true);
  };

  const handleNextLevel = () => {
    const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    localStorage.setItem("quizScores", JSON.stringify({
      ...existingScores,
      level2: score,
    }));

    navigate("/quiz/level-3");
  };

  const handleRetry = () => {
    setMatches({});
    setShowResult(false);
    setScore(0);
  };

  const allMatched = Object.keys(matches).length === level2Pairs.length;

  if (showResult) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-2 border-purple-100">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Trophy className="w-16 h-16 text-orange-500" />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Level 2 Selesai! 🎉</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8 border-2 border-purple-100">
            <p className="text-gray-600 mb-2">Skor Kamu:</p>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              {score}
            </p>
            <p className="text-gray-500 mt-2">dari 100 poin</p>
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
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Level 2 - Mencocokkan</span>
        </div>
        <p className="text-gray-600">Tarik nama bagian tubuh ke gambar yang sesuai</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Available Names */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Nama Bagian Tubuh:</h3>
          <div className="space-y-3">
            {availableNames.map((pair) => (
              <NameCard key={pair.id} pair={pair} />
            ))}
          </div>
          {availableNames.length === 0 && (
            <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-200">
              <p className="text-green-700 font-medium">✓ Semua nama sudah dipasangkan!</p>
            </div>
          )}
        </div>

        {/* Right: Image Drop Zones */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Gambar Bagian Tubuh:</h3>
          <div className="grid grid-cols-2 gap-4">
            {level2Pairs.map((pair) => (
              <ImageDropZone
                key={pair.id}
                pair={pair}
                droppedName={matches[pair.id] || null}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <Button
          onClick={handleSubmit}
          disabled={!allMatched}
          className="h-14 px-12 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Selesai & Lihat Skor
        </Button>
      </div>
    </div>
  );
}

export function QuizLevel2() {
  return (
    <DndProvider backend={HTML5Backend}>
      <QuizLevel2Content />
    </DndProvider>
  );
}
