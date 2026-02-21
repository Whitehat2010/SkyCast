import React from 'react'

const LodingScreen = () => {
  return (
    <div className='h-screen w-screen fixed top-0 left-0 bg-[#ffffff00] z-50 flex justify-center items-center'>
          <div className='h-[80px] w-[80px] bg-[#4a484800]'>
              <div className='h-full w-full border-8 border-[#ffffff] rounded-full animate-spin border-t-transparent'></div>
                  
              </div>
       </div>
    
  )
}

export default LodingScreen
