
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

type ContactProps = {
  title: string
  description: string
}

export function Contact({ title, description }: ContactProps) {
  return (
    <section id="contact" className="w-full py-24">
      <div className="mx-auto max-w-2xl px-4 text-center space-y-6">
        <h2 className="text-balance">{title}</h2>
        <p className="text-muted-foreground">{description}</p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" className="px-8 py-6 text-base gap-2">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>

          <Button size="lg" variant="outline" className="px-8 py-6 text-base gap-2">
            <Instagram className="h-5 w-5" />
            Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}
