import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import { Hero } from "@/components/sections/Hero"
import { Catalog } from "@/components/sections/Catalog"
import { Philosophy } from "@/components/sections/Philosophy"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"






export const metadata: Metadata = {
  title: "Yes and Cakes | Repostería artesanal en Madrid",
  description:
    "Tartas personalizadas, bizcochos y dulces artesanales hechos en Madrid. Pedidos por WhatsApp e Instagram.",
  alternates: {
    canonical: "https://yesandcakes.com/",
    languages: {
      "es-ES": "https://yesandcakes.com/",
      "en-US": "https://yesandcakes.com/en",
    },
  },
  openGraph: {
    title: "Yes and Cakes | Repostería artesanal en Madrid",
    description: "Tartas personalizadas y dulces artesanales hechos en Madrid.",
    locale: "es_ES",
    type: "website",
  },
}

export default function HomePage() {
  return (
       <div className="min-h-screen">

        <>
        <Header lang="es" />
        <Hero lang="es" />
        {/* other shared sections */}
        </>

        {/* Catalog Section */}

          <Catalog lang="es" />


      {/* Philosophy Section */}
        <Philosophy lang="es" />



     {/* Contact Section */}
    <Contact
      title="Hablemos de tu próximo dulce"
      description="Trabajamos por encargo. Contacta con nosotros por WhatsApp o Instagram para crear algo especial juntos."
    />



      {/* Footer */}
    <Footer text={`© ${new Date().getFullYear()} Yes and Cakes. Madrid, España.`} />

  </div>
  )
}
