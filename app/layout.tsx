import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Vercel Blob Starter',
  description: 'A simple Next.js app with Vercel Blob for image uploads',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="周青云❤️田柳的婚礼邀请" />
        <meta property="og:description" content="2025.10.3南县滨江大酒店富贵厅，诚挚邀请您参加我们的婚礼" />
        <meta property="og:image" content="https://marry-app-ruddy.vercel.app/assets/img/1.webp" />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
