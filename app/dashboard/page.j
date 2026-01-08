"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black p-6">
        <h1 className="text-3xl font-black mb-10">HIPOPÔ</h1>
        <nav className="space-y-4">
          <Link href="/dashboard">📊 Dashboard</Link>
          <Link href="/bots">🤖 Bots</Link>
          <Link href="/plans">💳 Planos</Link>
          <Link href="/settings">⚙️ Configurações</Link>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h2 className="text-4xl font-black mb-6">Resumo Geral</h2>

        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="bg-gradient-to-r from-hipopink to-hipopurple p-10 rounded-3xl text-6xl font-black relative overflow-hidden"
        >
          R$ 12.497
          <div className="absolute inset-0 flex justify-around text-4xl opacity-30">
            💸 💸 💸 💸 💸
          </div>
        </motion.div>
      </main>
    </div>
  );
}
