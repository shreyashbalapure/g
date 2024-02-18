import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-gray-600 h-100 d-flex justify-around'>
      
      <section className='mt-3'>
      <Image
      src="/logomcg.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
      </section>

      <section>
        <ul>
            <li className='text-white fs-5'>Quick Link</li>
            <li>Our Services</li>
            <li>Our Services</li>
            <li>Our Services</li>
        </ul>
      </section>

      <section>
        <ul>
            <li className='text-white fs-5'>Quick Link</li>
            <li>Our Services</li>
            <li>Our Services</li>
            <li>Our Services</li>
        </ul>
      </section>
    </div>
  )
}

export default Footer
