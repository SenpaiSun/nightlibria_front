'use client'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { Container, useMantineColorScheme } from '@mantine/core'
import { CarouselProps } from './types'

export const CarouselComponent: React.FC<CarouselProps> = ({children}) => {
    const { colorScheme } = useMantineColorScheme()
  return (
    <Container>
      <Carousel
        withIndicators
        draggable={true}
        height={'max-content'}
        slideSize='25%'
        slideGap='0px'
        styles={{
          indicators: {
            color: 'black',
          },
          indicator: {
            backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
          },
        }}
        style={{ padding: '30px 40px 20px' }}
        loop
        align='start'
        slidesToScroll={4}
      >
        {children}
      </Carousel>
    </Container>
  )
}