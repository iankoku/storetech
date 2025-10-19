import './globals.css';

export const metadata = {
  title: 'StoreTech',
  description: 'Sistema de gestión de inventarios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}