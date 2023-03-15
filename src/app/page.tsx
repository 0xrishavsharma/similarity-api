import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from './components/ui/Paragraph'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-purple-600'>
      Hey hey
      <Paragraph />
    </main>
  )
}
