import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

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
    <div className="min-h-screen">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="container px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Artisan pastries made with love
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Custom cakes, artisan sponge cakes, and handmade cookies in Madrid. Every treat is crafted with quality
            ingredients and dedication.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="text-base">
              View catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">Our catalog</h2>
          <p className="mt-4 text-center text-pretty text-muted-foreground">Each treat is a unique creation</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Custom Cakes */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-accent">
                <img
                  src="/elegant-custom-birthday-cake-with-flowers.jpg"
                  alt="Custom cakes"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Custom cakes</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Unique designs for special celebrations. We work with you to create the perfect cake that reflects
                  your style and taste.
                </p>
              </div>
            </Card>

            {/* Artisan Sponge Cakes */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-accent">
                <img
                  src="/homemade-sponge-cake-slices.jpg"
                  alt="Artisan sponge cakes"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Artisan sponge cakes</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Fluffy and delicious, made with traditional recipes and the finest natural ingredients.
                </p>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-accent">
                <img
                  src="/artisan-cookies-assortment.jpg"
                  alt="Artisan cookies"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Cookies</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Crispy and full of flavor, perfect to accompany a coffee or to gift.
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
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our philosophy</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              At Yes and Cakes we believe in pastry made with calm and dedication. Each treat is handcrafted with the
              finest ingredients, without haste, with the time each creation deserves. We are inspired by artisan
              tradition and the desire to create sweet moments that linger in memory.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let's talk about your next treat
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            We work by order. Contact us via WhatsApp or Instagram to discuss your order and create something special
            together.
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
          <p>&copy; {new Date().getFullYear()} Yes and Cakes. Madrid, Spain.</p>
        </div>
      </footer>
    </div>
  )
}
