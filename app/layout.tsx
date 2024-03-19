import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* <audio controls autoPlay className="mt-4">
          <source src="/shrek-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
      </body>
    </html>
  );
}
