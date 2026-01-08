import "./globals.css";

export const metadata = {
  title: "Hipopô Platform",
  description: "Hipopô SaaS Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-hipodark text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
