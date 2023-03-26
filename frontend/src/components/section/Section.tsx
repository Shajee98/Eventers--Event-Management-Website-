import Category from '../cards/Category'
import category_1 from "../../assets/section/card/category_1.jpg"
import category_2 from "../../assets/section/card/category_2.jpg"
import category_3 from "../../assets/section/card/category_3.jpg"
import category_4 from "../../assets/section/card/category_4.jpg"
import category_5 from "../../assets/section/card/category_5.jpg"
import category_6 from "../../assets/section/card/category_6.jpg"
import category_7 from "../../assets/section/card/category_7.jpg"


const Section = (props: {title: string}) => {
    const categories: {title: string, image: string}[] = [{
        title: 'Weddings',
        image: category_1
    },{
        title: 'Birthdays',
        image: category_2
    },{
        title: 'Corporate',
        image: category_3
    },{
        title: 'Party',
        image: category_4
    },{
        title: 'Engagement',
        image: category_5
    },{
        title: 'Conferences',
        image: category_6
    },{
        title: 'VIP Events',
        image: category_7
    }]
  return (
    <div className='flex flex-col text-left my-10'>
        <h1 className='pl-[30px] font-bold text-xl text-slate-800'>{props.title}</h1>
        <div className='grid grid-cols-[10px,repeat(7,calc(25%-40px)),10px] before:content-[""] after:content-[""] gap-[20px] py-5 overflow-x-scroll scrollbar-hide'>
            {
                categories.map((category) => (
                    <Category image={category.image} title={category.title}/>
                ))
            }
        </div>
    </div>
  )
}

export default Section