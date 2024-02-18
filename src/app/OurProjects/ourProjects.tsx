import React from 'react'
import Image from 'next/image'


function OurProjects() {
  return (
    <div className='py-5 px-5 m-9 w-50%'>
      <section>
      <h1>Our </h1>
      <h1 className='text-yellow-400'>Projects</h1>
      </section>

      <section>
        <p>
        With over 30 years of expertise in the commercial construction industry, our veteran-owned company proudly showcases a diverse portfolio of successful projects. From hotels to industrial buildings, commercial structures to office remodeling, and vibrant restaurants to sprawling shopping malls, our extensive range of undertakings reflects our versatility. Our commitment to meticulous precision ensures each project is executed with excellence, earning the trust of our clients and solidifying our position as a seasoned leader in the construction realm.
        </p>
      </section>
     
      <section className='d-flex justify-evenly p-5'>

      <Image
      src="/hotelCard.png"
      width={300}
      height={100}
      alt="Picture of the author"
    />
    <Image
      src="/indus.png"
      width={300}
      height={100}
      alt="Picture of the author"
    />
    <Image
      src="/buildingCard.png"
      width={300}
      height={100}
      alt="Picture of the author"
    />
    
   
      </section>

      <section className='d-flex justify-evenly p-5'>
      <Image
      src="/office.png"
      width={300}
      height={100}
      alt="Picture of the author"
    />
    <Image
      src="/restauCard.png"
      width={300}
      height={100}
      alt="Picture of the author"
    />
    <Image
      src="/shopingMall.png"
      width={300}
      height={100}
      alt="Picture of the author"
    />
      </section>
    </div>
  )
}

export default OurProjects
