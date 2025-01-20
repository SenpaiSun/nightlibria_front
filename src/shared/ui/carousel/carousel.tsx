'use client'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { Flex, Title, useMantineColorScheme } from '@mantine/core'
import { CarouselProps } from './types'
import { DEFAULT_THEME } from '@mantine/core'

export const CarouselComponent: React.FC<CarouselProps> = ({ children, title }) => {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Flex m={0} pt={'20px'} ml={'15vw'} mr={'15vw'} direction={'column'} align={'start'}>
      <Title c={colorScheme === 'dark' ? 'white' : 'black'} td={'underline'} pl={'2vw'} pr={'2vw'} order={1}>{title}</Title>
      <Carousel
        withIndicators
        draggable={true}
        height={'max-content'}
        slideSize={{ base: '100%', xs: '50%', sm: '33.33333333%', md: '20%' }}
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
        style={{ padding: '10px 40px 20px', width: '100%'}}
        loop
        align='center'
        slidesToScroll='auto'
      >
        {children}
      </Carousel>
    </Flex>
  )
}
