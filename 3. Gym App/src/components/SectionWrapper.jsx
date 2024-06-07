import React from 'react'

const SectionWrapper = (props) => {
    const { children, header, title, id } = props;
    return (
        <section id={id} className='min-h-screen flex flex-col gap-10'>
            <div className='bg-slate-950 py-10 flex flex-col justify-center items-center gap-2 p-4'>
                <p className='uppercase font-medium lg:text-2xl sm:text-1xl'>{header}</p>
                <h2 className='font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-blue-500'>{title[1]}</span> {title[2]}</h2>
            </div>

            <div className='max-w-[800px] flex flex-col mx-auto gap-10 p-4'>
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper
