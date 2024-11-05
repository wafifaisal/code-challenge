import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
