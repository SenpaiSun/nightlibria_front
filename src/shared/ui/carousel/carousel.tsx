'use client'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { Container, Flex, Title, useMantineColorScheme } from '@mantine/core'
import { CarouselProps } from './types'

export const CarouselComponent: React.FC<CarouselProps> = ({children}) => {
    const { colorScheme } = useMantineColorScheme()
  return (
    <Flex m={0} pt={'20px'} ml={'15vw'} mr={'15vw'} direction={'column'} align={'center'}>
      <Title className='text-center' order={1}>Последние релизы:</Title>
      <Carousel
        withIndicators
        draggable={true}
        height={'max-content'}
        slideSize={{ base: '100%', xs: '50%', sm: '33.33333333%', md: '25%' }}
        slideGap='0px'
        styles={{
          indicators: {
            color: 'black',
            maxWidth: '260px',
            margin: 'auto',
          },
          indicator: {
            backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
          },
        }}
        style={{ padding: '10px 40px 20px', width: '100%' }}
        loop
        align='center'
        slidesToScroll="auto"
      >
        {children}
      </Carousel>
    </Flex>
  )
}