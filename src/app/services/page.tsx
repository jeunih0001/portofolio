import React from 'react'

const services = [
  {
    title: "SAAS Development",
    description: "Crafting robust Software as a Service (SAAS) solutions tailored to your unique business needs. From conceptualization to deployment, we guide you through every step of the development process."
  },
  {
    title: "Landing Page",
    description: "Creating captivating and conversion-focused landing pages that drive results. Whether you're launching a new product, promoting a service, or running a marketing campaign, we design landing pages that engage visitors and compel them to take action."
  },
  {
    title: "Custom Website",
    description: "Combines creativity with technical expertise to deliver tailor-made solutions that meet your specific requirements. Whether you need an e-commerce platform, a corporate website, or a portfolio showcase, we leverage the latest technologies to bring your vision to life."
  }
];


export default function Services() {
  return (
    <>
    <div className='mt-navbar container space-y-20  py-16'>
      <div className='text-center max-w-lg mx-auto text-balance'>
        <div className='flex justify-center text-yellow-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
          </svg>

        </div>
        <h1 className='font-special text-4xl my-4'>Services</h1>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quis! Recusandae, animi deleniti. Asperiores minus impedit et officiis reprehenderit, quae soluta minima odit vero voluptatum nobis inventore assumenda perferendis in.</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-8'>
        {services.map((service, index) =>
          <section key={index} className='border border-slate-200 shadow-sm px-12 py-16 grid relative before:pointer-events-none before:border-[inherit] before:inset-4 before:z-10 before:content-[""] before:absolute before:border after:absolute after:aspect-square after:right-0 after:rounded-full after:translate-x-1/2 after:scale-150 hover:after:scale-[10] after:transition-all after:duration-1000 after:-translate-y-1/2 hover:after:bg-slate-50 overflow-hidden after:w-32'>
            <div className='relative z-10 grid'>
              <h2 className='font-bold text-2xl font-special tracking-wider my-4'>{service.title}</h2>
              <p className='text-slate-500'>{service.description}</p>

              <div className='flex items-center justify-end mt-8'>
                <button className='inline-flex border-black bg-yellow-300 font-medium px-4 gap-2 items-center hover:px-6 py-3 border transition-all hover:shadow-xl rounded-lg'>
                
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </span>
                </button>

              </div>
            </div>
          </section>
        )}
      </div>
    </div>
    <footer className='mt-20 border-t'>
        <div className='font-special text-lg text-center py-6'>Jeunih</div>
    </footer>
    </>
  )
}
