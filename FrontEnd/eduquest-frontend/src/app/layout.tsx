// app/layout.tsx
import "../globals.css"; // ✅ works because layout.tsx is in src/app/

export const metadata = {
  title: "EduQuest",
  description: "Smart education platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        {children}

        </body>
    </html>
  );
}
