import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <>
     <header className='flex justify-between items-center mb-4'>
          <div className='flex items-center'>
            <BsFillBellFill className='text-3xl mr-4' />
            <BsFillEnvelopeFill className='text-3xl' />
          </div>
        </header>
    </>
  )
}

export default Header