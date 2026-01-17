import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"


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
      <Header lang="es" />

      {/* Hero Section */}
      <section className="container px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
        <section className="container px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
         <h1 className="text-balance">
            Repostería artesanal con amor
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Tartas personalizadas, bizcochos artesanales y galletas hechas a mano en Madrid. Cada dulce está elaborado
            con ingredientes de calidad y dedicación.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="text-base">
              Ver catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="container px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">Nuestro catálogo</h2>
          <p className="mt-4 text-center text-pretty text-muted-foreground">Cada dulce es una creación única</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Custom Cakes */}
            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-accent">
                <Image
                  src="/images/catalog/custom-cakes.jpg"
                  alt="Tartas personalizadas"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={false}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Tartas personalizadas</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Diseños únicos para celebraciones especiales. Trabajamos contigo para crear la tarta perfecta que
                  refleje tu estilo y gusto.
                </p>
              </div>
            </Card>

            {/* Artisan Sponge Cakes */}
            <Card className="overflow-hidden">
              <Image
                src="/images/catalog/sponge-cakes.jpg"
                alt="Bizcochos artesanales"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Bizcochos artesanales</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Esponjosos y deliciosos, elaborados con recetas tradicionales y los mejores ingredientes naturales.
                </p>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="overflow-hidden">
                <Image
                  src="/images/catalog/cookies.jpg"
                  alt="Galletas artesanales"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Galletas</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Crujientes y llenas de sabor, perfectas para acompañar un café o para regalar.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="bg-muted/30 py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Nuestra filosofía</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              En Yes and Cakes creemos en la repostería hecha con calma y dedicación. Cada dulce es elaborado a mano con
              ingredientes de primera calidad, sin prisas, con el tiempo que merece cada creación. Nos inspira la
              tradición artesanal y el deseo de crear momentos dulces que perduren en la memoria.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Hablemos de tu próximo dulce</h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Trabajamos por encargo. Contacta con nosotros por WhatsApp o Instagram para hablar de tu pedido y crear algo
            especial juntos.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-base">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base">
              <Instagram className="h-5 w-5" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Yes and Cakes. Madrid, España.</p>
        </div>
      </footer>
    </div>
  )
}
