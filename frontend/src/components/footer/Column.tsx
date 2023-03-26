import React from 'react'

const Columns = (props: {title: string, list: string[]}) => {
  return (
    <div className='flex flex-col gap-3 text-white'>
    <h1 className='font-semibold text-2xl'>{props.title}</h1>
    <ul className='flex flex-col gap-2'>
        {props.list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
   </div>
  )
}

export default Columns