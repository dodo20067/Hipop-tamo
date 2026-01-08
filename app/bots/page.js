import Link from "next/link";

export default function Bots() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-black mb-6">Meus Bots</h1>

      <div className="bg-gray-900 p-6 rounded-2xl mb-4">
        🤖 Hipopô Sales Bot
        <p className="text-green-400 mt-2">Status: ATIVO</p>
      </div>

      <Link
        href="/dashboard"
        className="inline-block mt-6 bg-hipopink px-6 py-3 rounded-xl font-bold"
      >
        Voltar
      </Link>
    </div>
  );
}
