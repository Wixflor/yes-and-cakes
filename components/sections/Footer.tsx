type FooterProps = {
  text: string
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-2xl px-4 text-center text-sm text-muted-foreground">
        <p>{text}</p>
      </div>
    </footer>
  )
}
