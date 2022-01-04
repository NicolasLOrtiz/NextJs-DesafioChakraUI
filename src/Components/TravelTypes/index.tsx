import { Grid, GridItem } from '@chakra-ui/react'
import { Type } from './Types'

export const TravelTypes: React.FC = () => {
  return (
    <Grid
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(5, 1fr)',
      ]}
      w="100%"
      justifyContent="space-between"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Type src={'/travel-types/cocktail.svg'} text={'vida noturna'} />
      </GridItem>

      <GridItem>
        <Type src={'/travel-types/surf.svg'} text={'praia'} />
      </GridItem>

      <GridItem>
        <Type src={'/travel-types/building.svg'} text={'moderno'} />
      </GridItem>

      <GridItem>
        <Type src={'/travel-types/museum.svg'} text={'clássico'} />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type src={'/travel-types/earth.svg'} text={'e mais...'} />
      </GridItem>
    </Grid>
  )
}
