import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.func} className='px-8 py-4 rounded-lg bg-slate-950 border-[2px] border-blue-300 border-solid blueShadow mx-auto'><p>{props.text}</p></button>
    )
}

export default Button
