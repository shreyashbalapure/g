import React from 'react'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/globals.css";

function Header() {
  return (
    <div className='d-flex justify-content-around bg-slate-300 '>
        <Image
      src="/logomcg.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
       
      <ul className='d-flex mt-3 justify-center px-'>
        <li>Our Company</li>
        <li>Our Services</li>
        <li>Our Project</li>
        <li>Certification </li>
      </ul>

      <Image
       src="/contacus.png"
       width={100}
       height={100}
       alt="Picture of the author"
      />
    </div>
  )
}

export default Header
