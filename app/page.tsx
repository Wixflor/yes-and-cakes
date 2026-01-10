import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

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
      <section className="container px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance">
            Repostería artesanal con amor
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
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
      <section id="catalog" className="container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">Nuestro catálogo</h2>
          <p className="mt-4 text-center text-pretty text-muted-foreground">Cada dulce es una creación única</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Custom Cakes */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-accent">
                <img
                  src="/elegant-custom-birthday-cake-with-flowers.jpg"
                  alt="Tartas personalizadas"
                  className="h-full w-full object-cover"
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
              <div className="aspect-square bg-accent">
                <img
                  src="/homemade-sponge-cake-slices.jpg"
                  alt="Bizcochos artesanales"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Bizcochos artesanales</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Esponjosos y deliciosos, elaborados con recetas tradicionales y los mejores ingredientes naturales.
                </p>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-accent">
                <img
                  src="/artisan-cookies-assortment.jpg"
                  alt="Galletas artesanales"
                  className="h-full w-full object-cover"
                />
              </div>
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
      <section id="philosophy" className="bg-muted/30 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
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
      <section id="contact" className="container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Hablemos de tu próximo dulce</h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Trabajamos por encargo. Contacta con nosotros por WhatsApp o Instagram para hablar de tu pedido y crear algo
            especial juntos.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
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
