import { Grid, Heading } from '@chakra-ui/react'
import { CityItem } from './CityItem'

export const Cities100: React.FC = () => {
  return (
    <>
      <Heading fontWeight={'500'} fontSize={['2xl', '4xl']} mb={'10'}>
        Cidades +100
      </Heading>
      <Grid
        templateColumns={[
          '1ft',
          'repeat(2fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={['20px', '45px']}
        alignItems={'center'}
        justifyContent={'center'}
        px={['30px', '0']}
      >
        <CityItem />
        <CityItem />
        <CityItem />
        <CityItem />
        <CityItem />
        <CityItem />
      </Grid>
    </>
  )
}
