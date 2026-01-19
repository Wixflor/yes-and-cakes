import { Button } from "@/components/ui/button"
import { content } from "@/lib/content"

export function Hero({ lang }: { lang: "es" | "en" }) {
  const t = content[lang].hero

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h1 className="text-balance">{t.title}</h1>

          <p className="max-w-xl mx-auto">
            {t.description}
          </p>

          <div className="flex justify-center pt-4">
            <Button size="lg">{t.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}





