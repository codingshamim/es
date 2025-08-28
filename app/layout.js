import "./globals.css";
import CommonProviders from "@/app/src/providers/CommonProviders";

export const metadata = {
  title: "Esvibes",
  description:
    "Esvibes - Find stylish, high-quality T-shirts with unique designs to elevate your style. Shop now for comfort, originality, and everyday vibes!",
  openGraph: {
    images: [
      {
        url: `https://i.ibb.co.com/LtjVBLq/image.png`,
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CommonProviders>
          {children}
        </CommonProviders>
      </body>
    </html>
  );
}