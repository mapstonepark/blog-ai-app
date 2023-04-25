import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between mx-auto gap-16 sm:flex'>
{/* FIRST Column */}
    <div className='mt-16 basis-1/2 sm:mt-0'>
        <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
        <p className='my-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum molestias eveniet repudiandae ducimus mollitia ipsa commodi quas magnam optio amet sequi, consequatur culpa minus libero! Eaque soluta possimus illo molestiae?
        </p>
        <p>© Blog of the future All Rights  Reserved.</p>
    </div>
        
        {/* SECOND Column */}
    <div className='mt-16 basis-1/4 sm:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Massa orci senectuus</p>
        <p className='my-5'> Some random link again</p>
        <p>Baracus tolamus vivamous</p>
    </div>
       {/* THIRD Column */}
       <div className='mt-16 basis-1/4 sm:mt-0'>
        <h4 className='font-bold'>Contact Us</h4>
        <p className='my-5'>No mas dinero</p>
        <p className='my-5'>Yo queiro nuevo abrigo</p>
        <p>(313)425-6825</p>
    </div>
        </div>
    </footer>
  )
}

export default Footer