import logo from '../../assets/logo.jpg'
import {Facebook,Instagram,Twitter} from "react-feather"
import Column from './Column'

const Footer = () => {
  return (
    <div className='w-full h-80 pt-10 grid grid-flow-col grid-cols-[20px,repeat(5,calc(18%)),20px] before:content-[""] after:content-[""] bg-slate-800'>
      <div className='flex flex-col h-full justify-start items-center gap-10'>
        <div className="w-12 rounded-full h-12">
          <img className="w-full h-full object-cover rounded-full" src={logo} alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl text-white'>Social Media</h1>
          <div className='flex items-center justify-center gap-3'>
            <Facebook color='white'/>
            <Instagram color='white'/>
            <Twitter color='white'/>
          </div>
        </div>
      </div>
      <Column title='Venues' list={['Karachi', 'Islamabad', 'Lahore', 'Multan', 'Gujranwala']}/>
      <Column title='Suppliers' list={['Photographers', 'Decorators', 'Venues Planner', 'Choreographers', 'Designers', 'Makeup Artist']}/>
      <Column title='Quick Links' list={['About Us', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms & Conditions']}/>
      <div className='flex flex-col gap-10 text-white'>
        <h1 className='font-semibold text-2xl'>Newsletter</h1>
        <p className=''>Subscribe to get latest updates</p>
        <button className='bg-white text-slate-800 font-semibold p-1 w-3/4 rounded-lg'>Live Chat</button>
      </div>
    </div>
  )
}

export default Footer