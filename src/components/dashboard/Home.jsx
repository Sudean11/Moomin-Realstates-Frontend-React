import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'


function Home() {



  return (
    <main className='home'>
      
        <div className='main-title'>
          <h1>MY DASHBOARD</h1>
          </div>
          <div className="table table-bordered">
          <table className="table table-hover ">
            <thead  class="table-dark ">
              <tr>
                <th scope="col">Properties</th>
                <th scope="col">Location</th>
                <th scope="col">Owner</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>aaaa</td>
                <td>aaaaa</td>
                <td>aaaaa</td>
                <td>state</td>

              {/*   {properties.map((property) => (
              <tr key={property.id}>
                <td>{property.property}</td>
                <td>{property.location}</td>
                <td>{property.owner}</td>
                <td>{property.status}</td>
              </tr>
                ))} */}
              </tr>
            </tbody>
          </table>

          </div>
          

          {/*    <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1> */}
        
      

    </main>
  )
}

export default Home;