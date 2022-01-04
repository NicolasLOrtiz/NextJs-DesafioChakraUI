import { Flex, Grid, Icon, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RiArrowLeftSLine } from 'react-icons/ri'

export const Header: React.FC = () => {
  const { asPath } = useRouter()
  const isNotHomePage = asPath !== '/'

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['50px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isNotHomePage && (
          <Link href={'/'}>
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf={'start'}
              />
            </a>
          </Link>
        )}

        <Image
          src="/Logo.svg"
          alt="Logo da marca WorldTrip"
          justifySelf="center"
          gridColumn="2"
          w={['81px', '184px']}
        />
      </Grid>
    </Flex>
  )
}
