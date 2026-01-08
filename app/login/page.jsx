"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-hipodark">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black p-10 rounded-3xl w-full max-w-sm shadow-2xl"
      >
        <h1 className="text-3xl font-black mb-6 text-center text-hipopink">
          HIPOPÔ
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-gray-800"
          placeholder="Email"
        />
        <input
          className="w-full p-3 mb-6 rounded bg-gray-800"
          placeholder="Senha"
          type="password"
        />

        <Link
          href="/dashboard"
          className="block text-center bg-gradient-to-r from-hipopink to-hipopurple py-3 rounded-xl font-bold"
        >
          Entrar
        </Link>
      </motion.div>
    </div>
  );
}
