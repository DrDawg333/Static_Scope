import { useState } from "react";
import { FaPaste } from "react-icons/fa";

function LanguageCard({ lang, onResult }) {
  const Icon = lang.icon;

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setCode(text);
    } catch {
      alert("Clipboard access denied");
    }
  };

  const analyzeCode = async () => {
    if (!code.trim()) {
      alert("Paste some code first");
      return;
    }

    try {
      setLoading(true);

      // Backend API call
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: lang.name,
          code: code,
        }),
      });

      const data = await response.json();

      // Send result to App.jsx
      onResult({
        language: lang.name,
        severity: data.severity,
      });

    } catch (error) {
      console.error(error);
      alert("Failed to analyze code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:-translate-y-2 transition-all">

      {/* Header */}
      <div className="flex justify-between items-start mb-4">

        <div className="flex items-center">
          <Icon className={`text-2xl mr-3 ${lang.color}`} />

          <h3 className="text-xl font-bold text-white">
            {lang.name}
          </h3>
        </div>

        <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
          Beta
        </span>

      </div>

      <p className="text-gray-400 mb-4">
        Analyze {lang.name} code for complexity and bugs.
      </p>

      {/* Paste Button */}
      <div className="mb-4">

        <button
          onClick={handlePaste}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-gray-300 hover:bg-gray-800/80"
        >
          <FaPaste className="inline mr-2" />
          Paste Code
        </button>

      </div>

      {/* Textarea */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-32 bg-[#0f172a] border border-gray-700 rounded-lg p-3 mb-4 text-gray-200"
        placeholder={`Paste ${lang.name} code here...`}
      />

      {/* Analyze Button */}
      <button
        onClick={analyzeCode}
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-2 rounded-lg text-white hover:opacity-90"
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>

    </div>
  );
}

export default LanguageCard;