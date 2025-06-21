import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='pt-10 px-[10%] w-[100%] h-[100%] text-black font-thin overflow-x-hidden '>
      <Navbar />
      <div className='mt-8'>
        <MainRoutes />
      </div>
    </div>
  )
}

export default App