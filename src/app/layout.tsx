import type { Metadata } from 'next'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

export const metadata: Metadata = {
  title: 'Restart.',
  description: 'Is it easy building a business?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: '0px'}}>
        <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-between', height: '100vh', width: '100vw'}}>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  )
}
