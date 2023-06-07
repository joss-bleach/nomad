import "./globals.css";
import { Poppins } from "next/font/google";

// Components
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import RegistrationModal from "@/components/modals/RegistrationModal";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Nomad | Work from anywhere",
  description:
    "Find your perfect home with Nomad's online housing marketplace for professionals who love adventure and exploration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <ClientOnly>
          <ToasterProvider />
          <RegistrationModal />
          <Navbar />
        </ClientOnly>
      </body>
    </html>
  );
}
