import React from 'react'

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='[t-3 pb-10'>
        <div className='flex items-center gap-3'>
            <div className='bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold'>
                Trending
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas dolorum fugiat libero quam delectus temporibus! Architecto, ratione recusandae exercitationem porro et aperiam ut possimus culpa, labore aspernatur iure repellat?</p>
        </div>
        <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
            <div className='col-span-2 row-span-2 bg-wh-500'></div>
            <div className='col-span-2 row-span-1 bg-wh-500'></div>
            <div className='col-span-1 row-span-1 bg-wh-500'></div>
            <div className='col-span-1 row-span-1 bg-wh-500'></div>
        </div>
    </section>
  )
}

export default Trending