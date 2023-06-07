import "./globals.css";
import { Poppins } from "next/font/google";

// Components
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import Modal from "@/ui/Modal";

const font = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "Nomad",
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
          <Modal isOpen title="Login modal" />
          <Navbar />
        </ClientOnly>
      </body>
    </html>
  );
}
