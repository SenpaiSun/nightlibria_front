'use client'
import { Carousel } from '@mantine/carousel'
import { Container, Flex } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'
import { RealesesInfo } from './realesesInfo/RealesesInfo'
import { GenresInfo } from './genresInfo/GenresInfo'

interface CarouselSlideProps {
  data: any
  path: string
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ data, path }) => {
  console.log(data)
  const dataPathFromSlide = (item: any) => {
    switch (path) {
      case 'lastRealeses':
        return item.poster.optimized.src
      case 'genres':
        return item.image.optimized.preview
    }
  }
  return (
    <>
      {data.map((item: any, index: number) => (
        <Carousel.Slide key={index} style={{ width: 'max-content', height: 'max-content', minWidth: 'max-content', minHeight: 'max-content' }}>
          <Container className='group' style={{ paddingBottom: '17px', paddingTop: '12px', height: 'max-content', width: 'max-content' }}>
            <Flex className={clsx(`rounded-xl shadow-slider`)} pos={'relative'} w={'180px'} h={'257px'} mah={'257px'} maw={'180px'} style={{overflow: 'hidden'}} >
              <Image objectFit='cover' priority alt='poster' className={clsx(`group-hover:opacity-10 hover:cursor-pointer`)} src={`https://api.anilibria.app${dataPathFromSlide(item)}`} fill />
            </Flex>
            {path === 'lastRealeses' && (
              <RealesesInfo updatedAtRealeses={item.latest_episode.updated_at} nameRealeses={item.name.main} genresRealeses={item.genres} currentSeriesRealeses={item.latest_episode.ordinal} totalSeriesRealeses={item.episodes_total} />
            )}
            {path === 'genres' && (
              <GenresInfo nameRealeses={item.name}/>
            )}
          </Container>
        </Carousel.Slide>
      ))}
    </>
  )
}
