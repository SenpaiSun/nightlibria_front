'use client'
import { Carousel } from '@mantine/carousel'
import { Button, Container } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'
import { Text } from '@mantine/core'

export const CarouselSlide = ({ data }: { data: any }) => {
  console.log(data)
  return (
    <>
      {data.map((item: any, index: number) => (
        <Carousel.Slide key={index} style={{ width: 'max-content', height: 'max-content', minWidth: 'max-content', minHeight: 'max-content' }}>
          <Container style={{ paddingBottom: '17px', paddingTop: '12px', height: 'max-content', width: 'max-content' }}>
            <Image priority alt='poster' className={clsx(`rounded-xl shadow-slider hover:opacity-10 hover:cursor-pointer`)} src={`https://api.anilibria.app${item.poster.src}`} width={180} height={375} />
            <Container pos={'absolute'} top={20} left={'0%'} m={4} >
              <Text ta="center">{item.name.main}</Text>
              <Button>Смотреть</Button>
            </Container>
          </Container>
        </Carousel.Slide>
      ))}
    </>
  )
}
