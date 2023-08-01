import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"
import { useEffect, useState } from 'react'
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import camiseta4 from '../assets/camisetas/4.png'
import { HomeConatiner, Product } from "../styles/pages/home"

export default function Home() {
  const [list, setList] = useState<number[]>([])

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setList([1, 2, 3])
    }, 2000)
  }, [])

  return (
    <HomeConatiner ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta4} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
    </HomeConatiner>
  )
}