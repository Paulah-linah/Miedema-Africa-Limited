import '../styles/globals.css';

export const metadata = {
  title: 'Miedema Africa',
  description: 'Leading the way in innovative solutions for a better tomorrow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-light font-sans antialiased">{children}</body>
    </html>
  );
}