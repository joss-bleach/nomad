import "./globals.css";
import { Poppins } from "next/font/google";

// Actions
import getCurrentUser from "@/actions/getCurrentUser";

// Components
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import RegistrationModal from "@/components/modals/RegistrationModal";
import LoginModal from "@/components/modals/LoginModal";
import ListHomeModal from "@/components/modals/ListHomeModal";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Nomad | Work from anywhere",
  description:
    "Find your perfect home with Nomad's online housing marketplace for professionals who love adventure and exploration.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <ClientOnly>
          <ToasterProvider />
          <RegistrationModal />
          <LoginModal />
          <ListHomeModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
      </body>
    </html>
  );
}
