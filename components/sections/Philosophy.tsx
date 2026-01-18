//<section id="philosophy" className="w-full bg-muted/30 py-28">
 // <div className="mx-auto max-w-2xl px-4 text-center space-y-6">
 //   <h2 className="text-balance">Nuestra filosofía</h2>
 //    <p>
  //     En Yes and Cakes creemos en la repostería hecha con calma y dedicación.
  //     Cada dulce es elaborado a mano con ingredientes de primera calidad,
  //     sin prisas, con el tiempo que merece cada creación.
 //    </p>
//   </div>
// </section> 

import { philosophyContent } from "@/lib/content"

export function Philosophy({ lang }: { lang: "es" | "en" }) {
  const content = philosophyContent[lang]

  return (
    <section
      id="philosophy"
      className="bg-muted/30 py-28"
    >
      <div className="mx-auto max-w-2xl text-center space-y-6 px-4">
        <h2 className="text-balance">{content.title}</h2>
        <p>{content.text}</p>
      </div>
    </section>
  )
}
