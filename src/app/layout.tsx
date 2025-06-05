import '../styles/globals.css';
import Navbar from './components/NavBar/NavBar';

export const metadata = {
  title: 'LoveCycle',
  description: 'Doações com impacto social',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
       <Navbar />
      <body>{children}</body>
    </html>
  );
}
