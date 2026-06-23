import Layout from "./components/layout/layout";
import "./globals.css";
import Providers from "./providers/Providers";
import { vazir, yekan } from "./utils/fonts";

export const metadata = {
  title: "رزرو تور در ایران و سراسر جهان | تورینو",
  icons: {
    icon: '/favicon.png',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${yekan.variable}`}>
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
