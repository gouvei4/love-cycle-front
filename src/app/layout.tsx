import '../styles/globals.css';

export const metadata = {
  title: 'LoveCycle',
  description: 'Doações com impacto social',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
