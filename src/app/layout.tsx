export const metadata = {
  title: 'Rebobinagem do motor',
  description: 'A plataforma desenvolvida para facilitar a gestão de estoque e serviços na oficina de rebobinagem de motores elétricos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
