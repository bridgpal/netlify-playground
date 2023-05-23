import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex  flex-col items-center justify-between p-24 ${inter.className}`}>
      Edge Function Example
      <div class="flex justify-center items-center border border-gray-500 rounded-lg p-4 w-2/3">
            Hello World
      </div>
      
    </main>
  )
}
