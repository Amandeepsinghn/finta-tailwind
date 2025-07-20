import './index.css'

function App() {
  return (
    <div className=' relative h-[100vh] bg-linear-to-b from-[#eff6ff] from-10% via-[#bfdbfe] via-30%  to-white to-90% space-y-7'>
      <div className="h-full w-0.5 bg-linear-to-b from-[#d4d4d4] to-[#f5f5f5] absolute left-30 opacity-50">
      </div>
      <div className="h-full w-0.5 bg-linear-to-b from-[#d4d4d4] to-[#f5f5f5] absolute right-30 opacity-50">
      </div>
      <div className='w-[600px] mx-auto h-auto p-2'>
        <div className='flex justify-between items-center'>
          <div className='font-semibold text-2xl'>
            Finta
          </div>
          <div className='flex justify-center space-x-3 items-center'>
            <div className='cursor-pointer'>Guide</div>
            <div className='cursor-pointer'>Pricing</div>
            <div className='cursor-pointer'>Log In</div>
            <div className='cursor-pointer bg-blue-500 rounded-md p-2 shadow-2xl hover:bg-blue-400'>
                <p className='text-white text-shadow-2xl'>Start free trail</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[600px] mx-auto mt-10'>
          <div className='flex justify-center'>
            <div className='rounded-xl bg-gray-200 border-slate-300 border-1 border-opacity-60 p-1 px-2 cursor-pointer'>
            Thinking about incorporating
            </div>
          </div>
      </div>
      <div className='w-[600px] mx-auto text-center'>
        <h1 className='text-5xl font-semibold'>
            Magically simplify accounting and taxes
        </h1>
      </div>
      <div className='w-[600px] mx-auto text-center'>
        <h1 className='text-1xl font-semibold text-gray-700'>
            Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 8:05pm.
        </h1>
      </div>
      <div className='w-[600px] mx-auto'>
        <div className='flex justify-center space-x-2.5'>
            <div className='bg-blue-500 rounded-md p-2 cursor-pointer'>
              <p className='text-white text-shadow-2xs'>
                  Start free trail
              </p>
            </div>
            <div className='bg-transparent rounded-md p-2 cursor-pointer hover:bg-slate-400'>
              <p className='text-black'>
                  Pricing
              </p>
            </div>
        </div>
      </div>
      <div className='w-[600px] mx-auto'>
        <div className='flex justify-center text-gray-700 text-sm'>
          Currently for Us-based Delaware C-Corps
          </div>
      </div>
      <div className="w-screen h-0.5 bg-linear-to-b from-[#d4d4d4] to-[#f5f5f5] absolute opacity-50">
      </div>
      <div className='relative flex justify-center'>
      <div className='w-[600px] h-[300px] m-auto shadow-2xl mt-1'>
        <img
        src="https://a-us.storyblok.com/f/1023015/4032x2292/d37c4804b4/hero-ui-v5.png"
        alt="Hero UI"
        className="
          rounded-[10px] 
        "
      />
      </div>
      </div>
    </div>
  )
}

export default App
