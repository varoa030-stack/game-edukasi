import { useState } from "react";

export function AdminMateri() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const simpanMateri = () => {
    const data = JSON.parse(
      localStorage.getItem("materi") || "[]"
    );

    data.push({
      id: Date.now(),
      judul,
      isi,
    });

    localStorage.setItem(
      "materi",
      JSON.stringify(data)
    );

    alert("Materi berhasil disimpan");

    setJudul("");
    setIsi("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Kelola Materi
      </h1>

      <input
        className="border p-3 w-full mb-4"
        placeholder="Judul Materi"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />

      <textarea
        className="border p-3 w-full mb-4 h-40"
        placeholder="Isi Materi"
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
      />

      <button
        onClick={simpanMateri}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Simpan Materi
      </button>
    </div>
  );
}