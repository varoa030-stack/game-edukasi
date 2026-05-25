import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Homepage } from "./pages/Homepage";
import { Materi } from "./pages/Materi";
import { QuizLevel1 } from "./pages/QuizLevel1";
import { QuizLevel3 } from "./pages/QuizLevel3";
import { Results } from "./pages/Results";
import { Leaderboard } from "./pages/Leaderboard";
import { Panduan } from "./pages/Panduan";
import { Tentang } from "./pages/Tentang";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      { path: "materi", Component: Materi },
      { path: "quiz/level-1", Component: QuizLevel1 },
      { path: "quiz/level-3", Component: QuizLevel3 },
      { path: "hasil", Component: Results },
      { path: "peringkat", Component: Leaderboard },
      { path: "panduan", Component: Panduan },
      { path: "tentang", Component: Tentang },
      { path: "admin/login", Component: AdminLogin },
      { path: "admin/dashboard", Component: AdminDashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
