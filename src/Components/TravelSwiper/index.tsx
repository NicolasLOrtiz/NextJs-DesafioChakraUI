import { Flex, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

export const TravelSwiper: React.FC = () => {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      h={['250px', '450px']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h={'100%'}
            align={'center'}
            justify={'center'}
            direction={'column'}
            bgImage={'url(/banners/europe.png)'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            textAlign={'center'}
            bgPosition={'center'}
          >
            <Link href="/travels/europe">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color={'gray.100'}
                  fontWeight={'bold'}
                >
                  Europa
                </Heading>
                <Text
                  fontWeight={'bold'}
                  color={'gray.300'}
                  fontSize={['0.8rem', '1xl', '2xl']}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h={'100%'}
            align={'center'}
            justify={'center'}
            direction={'column'}
            bgImage={'url(/banners/europe.png)'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            textAlign={'center'}
            bgPosition={'center'}
          >
            <Link href="/travels/europe">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color={'gray.100'}
                  fontWeight={'bold'}
                >
                  Europa
                </Heading>
                <Text
                  fontWeight={'bold'}
                  color={'gray.300'}
                  fontSize={['0.8rem', '1xl', '2xl']}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
