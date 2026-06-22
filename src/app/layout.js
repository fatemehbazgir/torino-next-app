import "./globals.css";
import Providers from "./providers/Providers";
import { vazir } from "./utils/fonts";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
