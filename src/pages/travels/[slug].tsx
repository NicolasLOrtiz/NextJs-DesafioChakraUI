import { NextPage } from 'next'
import { Header } from '../../Components/Header'
import { Flex, Grid } from '@chakra-ui/react'
import { TravelBanner } from '../../Components/TravelBanner'
import { Bio } from '../../Components/Bio'
import { Info } from '../../Components/Info'
import { Cities100 } from '../../Components/Cities100'

const Travels: NextPage = () => {
  return (
    <Flex direction={'column'}>
      <Header />
      <TravelBanner />

      <Flex
        direction={'column'}
        maxW={'1160px'}
        mx={'auto'}
        mb={'10'}
        px={'1rem'}
      >
        <Grid
          templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
          gap={[5, 10, 16, 20]}
          my={['8', '20']}
        >
          <Bio />
          <Info />
        </Grid>

        <Cities100 />
      </Flex>
    </Flex>
  )
}

export default Travels
