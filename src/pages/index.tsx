import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import { Header } from '../Components/Header'
import { Banner } from '../Components/Banner'
import { TravelTypes } from '../Components/TravelTypes'
import { Divider } from '../Components/Divider'
import { TravelSwiper } from '../Components/TravelSwiper'

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />

      <Heading
        textAlign={'center'}
        fontSize={['lg', '3xl', '4xl']}
        mb={['5', '14']}
        fontWeight={'500'}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <TravelSwiper />
    </Flex>
  )
}

export default Home
