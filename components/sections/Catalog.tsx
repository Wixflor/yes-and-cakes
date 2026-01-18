import { Card } from "@/components/ui/card"
import Image from "next/image"
import { catalogContent } from "@/lib/content"

export function Catalog({ lang }: { lang: "es" | "en" }) {
  const content = catalogContent[lang]

  return (
    <section id="catalog" className="w-full py-24">
      <div className="mx-auto max-w-5xl px-4 text-center space-y-4">
        <h2 className="text-balance">{content.title}</h2>
        <p className="text-muted-foreground">{content.subtitle}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="relative aspect-square bg-accent">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3>{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
