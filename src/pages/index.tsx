import { stripe } from '@/lib/stripe'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'
import Image from "next/image"
import { useState } from 'react'
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import camiseta4 from '../assets/camisetas/4.png'
import { HomeConatiner, Product } from "../styles/pages/home"


export default function Home(props: { list: any }) {
  const [list, setList] = useState<number[]>([])

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeConatiner ref={sliderRef} className='keen-slider'>
      <pre>{JSON.stringify(props.list)}</pre>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list()

  const products = response.data.map(product => {
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}