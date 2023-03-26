import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img_1 from "../../assets/header/header_image_1.jpg"
import img_2 from "../../assets/header/header_image_2.jpg"
import img_3 from "../../assets/header/header_image_3.jpg"
import img_4 from "../../assets/header/header_image_4.jpg"


const Header = () => {
  return (
    <CCarousel controls indicators dark transition='slide' interval={3000} className="w-full">
    <CCarouselItem>
      <CImage className="h-96 w-full" src={img_1} alt="slide 1" />
      <CCarouselCaption className="">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="h-96 w-full" src={img_2} alt="slide 2" />
      <CCarouselCaption className="">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="h-96 w-full" src={img_3} alt="slide 3" />
      <CCarouselCaption className="">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="h-96 w-full" src={img_4} alt="slide 5" />
      <CCarouselCaption className="">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
  )
}

export default Header