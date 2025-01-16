'use client'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { Container, useMantineColorScheme } from '@mantine/core'
import { CarouselProps } from './types'

export const CarouselComponent: React.FC<CarouselProps> = ({children}) => {
    const { colorScheme } = useMantineColorScheme()
  return (
    <Container className='m-0'>
      <Carousel
        withIndicators
        draggable={true}
        height={'max-content'}
        slideSize={{ base: '100%', xs: '50%', sm: '33.33333333%', md: '20%' }}
        slideGap='0px'
        styles={{
          indicators: {
            color: 'black',
          },
          indicator: {
            backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
          },
        }}
        style={{ padding: '30px 40px 20px', width: '100%' }}
        loop
        align='center'
        slidesToScroll="auto"
      >
        {children}
      </Carousel>
    </Container>
  )
}