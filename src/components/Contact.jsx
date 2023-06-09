import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1e1e1e] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/438225d2-a80d-4c93-bc73-65d7ec20c825" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#77DD77] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or send me an email: s.g.totten@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder="Message"></textarea>
            <button className='text-white border-2 hover:bg-[#77DD77] hover:border-[#77DD77] hover:text-[#1e1e1e] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
        
    </div>
  )
}

export default Contact