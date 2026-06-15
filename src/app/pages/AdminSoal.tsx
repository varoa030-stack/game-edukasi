import { useState } from "react";

export function AdminSoal() {
  const [pertanyaan, setPertanyaan] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [jawaban, setJawaban] = useState("");

  const simpanSoal = () => {
    const soal = JSON.parse(
      localStorage.getItem("soal") || "[]"
    );

    soal.push({
      id: Date.now(),
      pertanyaan,
      pilihan: [a, b, c, d],
      jawaban,
    });

    localStorage.setItem(
      "soal",
      JSON.stringify(soal)
    );

    alert("Soal berhasil disimpan");

    setPertanyaan("");
    setA("");
    setB("");
    setC("");
    setD("");
    setJawaban("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Kelola Soal
      </h1>

      <input
        className="border p-3 w-full mb-3"
        placeholder="Pertanyaan"
        value={pertanyaan}
        onChange={(e) => setPertanyaan(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-3"
        placeholder="Pilihan A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-3"
        placeholder="Pilihan B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-3"
        placeholder="Pilihan C"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-3"
        placeholder="Pilihan D"
        value={d}
        onChange={(e) => setD(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-4"
        placeholder="Jawaban Benar"
        value={jawaban}
        onChange={(e) => setJawaban(e.target.value)}
      />

      <button
        onClick={simpanSoal}
        className="bg-purple-500 text-white px-6 py-3 rounded"
      >
        Simpan Soal
      </button>

</div>
  );
}