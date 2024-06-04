import { Footer } from '@/components/Footer';
import React from 'react'

const services = [
  {
    title: "SAAS Development",
    description: "Crafting robust Software as a Service (SAAS) solutions tailored to your unique business needs."
  },
  {
    title: "Landing Page",
    description: "Creating captivating and conversion-focused landing pages that drive results."
  },
  {
    title: "Custom Website",
    description: "Combines creativity with technical expertise to deliver tailor-made solutions that meet your specific requirements."
  }
];


export default function Services() {
  return (
    <>
    <div className='mt-navbar container space-y-20'>
      <div className='text-center max-w-screen-md mx-auto text-balance py-4'>
        <div className='flex justify-center text-yellow-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
          </svg>

        </div>
        <h1 className='font-special text-4xl my-4'>Services</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quis! Recusandae, animi deleniti. Asperiores minus impedit et officiis reprehenderit, quae soluta minima odit vero voluptatum nobis inventore assumenda perferendis in.</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-8'>
        {services.map((service, index) =>
          <section key={index} className='border bg-primary border-slate-500 rounded shadow-sm px-12 py-8 grid relative after:absolute after:aspect-square after:right-0 after:rounded-full after:translate-x-1/2 after:scale-150 hover:after:scale-[10] after:transition-all after:duration-1000 after:-translate-y-1/2 hover:after:bg-background  group overflow-hidden after:w-32'>
            <div className='relative z-10 grid content-start'>
              <h2 className='font-bold text-2xl group-hover:text-slate-50 transition-colors font-special tracking-wider my-4'>{service.title}</h2>
              <p className=' group-hover:text-slate-300 transition-colors'>{service.description}</p>
            </div>
          </section>
        )}
      </div>
    </div>
    </>
  )
}
