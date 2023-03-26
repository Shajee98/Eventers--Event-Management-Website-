import { FaLeaf, FaCamera, FaGift, FaMicrophone, FaGlassCheers} from "react-icons/fa";
import {Coffee} from 'react-feather'

const CallToAction = () => {
  return (
    <div className='h-[420px] w-[80%] flex flex-col gap-5 items-center justify-start p-5 rounded-lg bg-slate-800 text-white'>
        <h1 className='font-bold text-2xl'>What We Offer</h1>
        <div className='grid grid-cols-3 grid-rows-2 gap-5'>
            <div className='flex justify-center items-center gap-3'>
              <FaLeaf color="white" size={70}/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Floral Services</h1>
                <p>With Smile, you can get any type of floral composition.</p>
              </div>
            </div>  
            <div className='flex justify-center items-center gap-3'>
              <FaCamera color="white" size={70}/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Photos & Videos</h1>
                <p>Capture the best moments with our photography & videography.</p>
              </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <FaGift color="white" size={70}/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Invitation Cards</h1>
                <p>Get any amount of impressive invitation cards for your event.</p>
              </div>
            </div>  
            <div className='flex justify-center items-center gap-3'>
              <FaMicrophone color="white" size={45}/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Entertainment</h1>
                <p>Our entertainment services are limited only by your needs.</p>
              </div>
            </div>  
            <div className='flex justify-center items-center gap-3'>
              <FaGlassCheers color="white" size={70}/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Venue Selection</h1>
                <p>We offer a wide variety of venues for consideration.</p>
              </div>
            </div>  
            <div className='flex justify-center items-center gap-3'>
              <Coffee color="white" size={70} fill="white"/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Catering and Décor</h1>
                <p>We provide high-quality event décor and catering services.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CallToAction