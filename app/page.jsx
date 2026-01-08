import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-hipopink to-hipopurple text-center p-10">
      <h1 className="text-6xl font-black mb-6">HIPOPÔ 💸</h1>
      <p className="text-xl mb-10">
        A plataforma que transforma Telegram em máquina de dinheiro.
      </p>

      <Link
        href="/login"
        className="bg-black px-10 py-4 rounded-2xl text-lg font-bold"
      >
        Entrar na Plataforma
      </Link>
    </main>
  );
}
