import { Text } from '@chakra-ui/react'

export const Bio: React.FC = () => {
  return (
    <Text
      fontSize={['lg', 'xl', 'xl', '2xl']}
      color={'gray.700'}
      textAlign={'justify'}
    >
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo
      a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a
      leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
      o Cáucaso, e o mar Negro a sudeste
    </Text>
  )
}
