import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { Catalog } from "@/components/sections/Catalog"
import { Philosophy } from "@/components/sections/Philosophy"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"




export const metadata: Metadata = {
  title: "Yes and Cakes | Artisan bakery in Madrid",
  description: "Custom cakes, sponge cakes, and handmade desserts in Madrid. Orders via WhatsApp and Instagram.",
  alternates: {
    canonical: "https://yesandcakes.com/en",
    languages: {
      "es-ES": "https://yesandcakes.com/",
      "en-US": "https://yesandcakes.com/en",
    },
  },
  openGraph: {
    title: "Yes and Cakes | Artisan bakery in Madrid",
    description: "Custom cakes and handmade desserts in Madrid.",
    locale: "en_US",
    type: "website",
  },
}

export default function HomePageEN() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* <Header lang="en" /> */}
      <Hero lang="en" />
      

      {/* Catalog Section */}
      
        <Catalog lang="en" />

            

      {/* Philosophy Section */}
     <Philosophy lang="en" />


      {/* Contact Section */}

      <Contact
        title="Let's talk about your next treat"
        description="We work by order. Contact us via WhatsApp or Instagram to create something special together."
      />

      {/* Footer */}
      <Footer text={`© ${new Date().getFullYear()} Yes and Cakes. Madrid, Spain.`} />

    </main>
  )
}
