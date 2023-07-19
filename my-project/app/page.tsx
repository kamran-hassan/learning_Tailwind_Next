import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className="bg-green-600 text-white border-8">
      Hello World
    </h1>
    <h1 className="text-yellow-300 border-8">
      Hello World
    </h1>
    <h1 className="text-mygreen border-mygreen border-8">
      Hello World
    </h1>
    <h1 className="text-xs text-mygreen border-mygreen border-8 lg:text-lg sm:text-base">
      Hello World
    </h1>

    <h1 className='ml-10 mt-10'>
      Hello this is a sentence !
    </h1>

    <h1 className='mx-5'>
      Hello this is another sentence !
    </h1>

    <h1 className='text-9xl'> Title 1 </h1>
    </div>
  ) 
}
