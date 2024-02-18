import React from 'react'

function SubmitForm() {
  return (
    <div className='d-flex p-5 '>
      <section className='bg-amber-300 d-flex justify-between mt-2' >
        <form action="" className='p-2 m-2' >
            <input type="text" placeholder='enter here' className='  '/>
            <input type="text" placeholder='enter here' className='  '/>
            <input type="text" placeholder='enter here' className='  '/>
            <input type="text" placeholder='enter here' className='  '/>
            <input type="Submit"  className='  '/>
            
        
        </form>
      </section>
      <section className='p-4'>
        <h1 className='text-black'>Building Trust Through</h1>
        <h2 className='text-yellow-300'>Exceptional Services</h2>
        <p>Choosing to collaborate with us means gaining a trusted partner throughout the entire project process. We work side by side with you, keeping you fully informed to ensure your vision becomes a reality. Additionally, we provide detailed proposals tailored to meet your specific project needs. Contact us at (512) 902-1943 to speak with a professional now.</p>
      </section>
    </div>
  )
}

export default SubmitForm
