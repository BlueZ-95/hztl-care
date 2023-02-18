import Image from "next/image";
import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function CampaignDetail() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}
