import { Carousel } from '@mantine/carousel'
import { Container } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

export const CarouselSlide = ({data}: {data: any}) => {
  console.log(data)
  return (
    <>
      {data.map((item: any, index: number) => (
        <Carousel.Slide key={index}>
          <Container style={{ paddingBottom: '17px', paddingTop: '12px', height: 'max-content' }}>
            <Image priority alt='poster' style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 4px 15px' }} src={`https://api.anilibria.app${item.poster.src}`} width={180} height={275} />
          </Container>
        </Carousel.Slide>
      ))}
    </>
  )
}
