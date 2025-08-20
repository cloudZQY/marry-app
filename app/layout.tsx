import { Inter } from 'next/font/google';
import './globals.css';

const title = '周青云❤️田柳的婚礼邀请';
const description = '2025.10.3南县滨江大酒店富贵厅，诚挚邀请您参加我们的婚礼';
const image = 'https://marry-app-ruddy.vercel.app/assets/img/1.webp';

export const metadata = {
  title,
  description,
  image,
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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
