import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import Offers from './owner/Offers'
import PropertiesTable from './admin/PropertiesTable'


function Home({role}) {
role="admin";

  return (
   
    <main className='main-container'>
         {role === 'admin' && (
      <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PROPERTIES</h3>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>OFFERS</h3>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>clients</h3>
                </div>
                <h1>42</h1>
            </div>
            
        </div>
         )}
    
    {role === 'owner' && ( 
        <div><Offers/></div>
       
    )}
   </main>
  )
}

export default Home