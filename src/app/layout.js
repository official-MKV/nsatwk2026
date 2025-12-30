import './globals.css';

export const metadata = {
  title: 'NSATWK2026 - Nigerian Satellite Week 2026',
  description: 'Harnessing AI & Space Technologies for Nigeria\'s Digital Economy. Join us February 27-28, 2026 in Abuja.',
  keywords: ['satellite', 'space', 'technology', 'Nigeria', 'conference', 'startups'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}