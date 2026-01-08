export default function Plans() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-black mb-10">Planos Hipopô</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="mt-4">R$ 49/mês</p>
        </div>

        <div className="bg-hipopink p-6 rounded-2xl scale-105">
          <h2 className="text-2xl font-bold">Pro 💸</h2>
          <p className="mt-4">R$ 97/mês</p>
        </div>

        <div className="bg-hipopurple p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Premium 👑</h2>
          <p className="mt-4">R$ 197/mês</p>
        </div>
      </div>
    </div>
  );
}
