import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
         <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
                Subscribe and Follow
            </h4>
            <div className='my-5 mx-5'>
                <SocialLinks isDark/>
            </div>
            <Subscribe />
            <div className='bg-wh-900 my-8'>advert image</div>
            <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
                About the Blog        
            </h4>
            <div className='bg-wh-900 my-8'>profile image</div>
            <h4 className='py-3 px-5 text-wh-500 font-bold text-center'>
                Geoffrey Baratheon       
            </h4>
            <p className='text-wh-500 text-center text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur est laudantium id dolorem esse harum dolor, vel perspiciatis aut cupiditate! Adipisci cum optio magnam molestiae fuga labore aut eveniet praesentium.
            </p>
    </section>
  )
}

export default Sidebar