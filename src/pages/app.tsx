import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

import Image from 'next/image'
import logoImg from '../assets/logo.svg'


export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={400} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}