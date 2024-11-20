import './globals.css'

export const metadata = {
  title: 'Todo App',
  description: 'A simple todo app built with Next.js, react components like useState and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}