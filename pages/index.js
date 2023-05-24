import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between p-24`}>
      <div className="fixed top-0 left-0 w-full bg-black py-4">
        <nav className="flex justify-between items-center mx-auto px-8 ">
          <div className="text-white">🛝 Netlify Playground</div>
          <div className="space-x-4">
            {/* <a href="#" className="text-white">Link 1</a>
            <a href="#" className="text-white">Link 2</a> */}
          </div>
        </nav>
      </div>
      Hello
      <div className="flex justify-center items-center border border-gray-500 rounded-lg p-4 w-2/3">
        Hello World
      </div>
    </main>
  )
}
