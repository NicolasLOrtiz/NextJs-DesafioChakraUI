import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

type TypeProps = {
  src: string
  text: string
}

export const Type: React.FC<TypeProps> = ({ src, text }) => {
  const isSmall = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex direction={['row', 'column']} align={'center'} justify={'center'}>
      {isSmall ? (
        <Image src={src} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  )
}
