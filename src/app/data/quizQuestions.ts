export interface QuizQuestion {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: string;
  level: 1 | 2 | 3;
}

export const level1Questions: QuizQuestion[] = [
  {
    id: 1,
    level: 1,
    question: "Bagian tubuh apakah ini?",
    image: "https://images.unsplash.com/photo-1714939926476-3a24d04197bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGV5ZSUyMGFuYXRvbXklMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzcxNzM5MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    options: ["Mata", "Telinga", "Hidung", "Mulut"],
    correctAnswer: "Mata"
  },
  {
    id: 2,
    level: 1,
    question: "Bagian tubuh apakah ini?",
    image: "https://images.unsplash.com/photo-1714940051243-1ab9e9985af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGVhciUyMGFuYXRvbXl8ZW58MXx8fHwxNzcxNzM5MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    options: ["Mata", "Telinga", "Hidung", "Mulut"],
    correctAnswer: "Telinga"
  },
  {
    id: 3,
    level: 1,
    question: "Bagian tubuh apakah ini?",
    image: "https://images.unsplash.com/photo-1716996642059-25102d521412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGhhbmQlMjBhbmF0b215fGVufDF8fHx8MTc3MTczOTAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    options: ["Kaki", "Tangan", "Jari", "Siku"],
    correctAnswer: "Tangan"
  },
  {
    id: 4,
    level: 1,
    question: "Bagian tubuh apakah ini?",
    image: "https://images.unsplash.com/photo-1716930138682-d51c20f195d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGxlZyUyMGFuYXRvbXl8ZW58MXx8fHwxNzcxNzM5MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    options: ["Tangan", "Kaki", "Jari", "Lutut"],
    correctAnswer: "Kaki"
  },
  {
    id: 5,
    level: 1,
    question: "Bagian tubuh apakah ini?",
    image: "https://images.unsplash.com/photo-1715529408008-879e34fc432a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGhlYXJ0JTIwb3JnYW58ZW58MXx8fHwxNzcxNzM5MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    options: ["Paru-paru", "Jantung", "Hati", "Ginjal"],
    correctAnswer: "Jantung"
  }
];

export interface MatchingPair {
  id: number;
  name: string;
  image: string;
}

export const level2Pairs: MatchingPair[] = [
  { id: 1, name: "Mata", image: "https://images.unsplash.com/photo-1714939926476-3a24d04197bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGV5ZSUyMGFuYXRvbXklMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzcxNzM5MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 2, name: "Telinga", image: "https://images.unsplash.com/photo-1714940051243-1ab9e9985af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGVhciUyMGFuYXRvbXl8ZW58MXx8fHwxNzcxNzM5MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, name: "Tangan", image: "https://images.unsplash.com/photo-1716996642059-25102d521412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGhhbmQlMjBhbmF0b215fGVufDF8fHx8MTc3MTczOTAwNHww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, name: "Kaki", image: "https://images.unsplash.com/photo-1716930138682-d51c20f195d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGxlZyUyMGFuYXRvbXl8ZW58MXx8fHwxNzcxNzM5MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

export const level3Questions: QuizQuestion[] = [
  {
    id: 1,
    level: 3,
    question: "Apa fungsi utama dari mata?",
    options: [
      "Untuk melihat",
      "Untuk mendengar",
      "Untuk mencium bau",
      "Untuk merasakan makanan"
    ],
    correctAnswer: "Untuk melihat"
  },
  {
    id: 2,
    level: 3,
    question: "Bagian tubuh yang berfungsi untuk memompa darah adalah?",
    options: ["Paru-paru", "Jantung", "Hati", "Ginjal"],
    correctAnswer: "Jantung"
  },
  {
    id: 3,
    level: 3,
    question: "Apa fungsi dari telinga?",
    options: [
      "Untuk melihat",
      "Untuk mendengar dan menjaga keseimbangan",
      "Untuk bernafas",
      "Untuk mencerna makanan"
    ],
    correctAnswer: "Untuk mendengar dan menjaga keseimbangan"
  },
  {
    id: 4,
    level: 3,
    question: "Bagian tubuh yang digunakan untuk memegang dan menulis adalah?",
    options: ["Kaki", "Tangan", "Mulut", "Hidung"],
    correctAnswer: "Tangan"
  },
  {
    id: 5,
    level: 3,
    question: "Fungsi kulit adalah untuk?",
    options: [
      "Memompa darah",
      "Mencerna makanan",
      "Melindungi tubuh dan merasakan sentuhan",
      "Bernafas"
    ],
    correctAnswer: "Melindungi tubuh dan merasakan sentuhan"
  }
];
