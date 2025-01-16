'use client'
import { Carousel } from '@mantine/carousel'
import { Button, Container, Flex } from '@mantine/core'
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
          <Container className='group' style={{ paddingBottom: '17px', paddingTop: '12px', height: 'max-content', width: 'max-content' }}>
            <Image priority alt='poster' className={clsx(`rounded-xl group-hover:opacity-10 shadow-slider hover:cursor-pointer`)} src={`https://api.anilibria.app${item.poster.src}`} width={180} height={375} />
            <Container className='hidden group-hover:flex group-hover:cursor-pointer '>
              <Flex className='' pos={'absolute'} gap={0} direction={'column'} h={'80%'} mah={'100%'} justify={'space-between'} top={20} left={'50%'} style={{ transform: 'translateX(-50%)', maxWidth: '150%', padding: '0px' }}>
                <Text lineClamp={4} maw={'160px'} w={'160px'} ta='center' fw={700} size={'md'}>
                  <Text span lineClamp={4} maw={'160px'} w={'160px'} ta='center' fw={400} size={'xs'}>
                    {item.latest_episode.updated_at.split('T')[0]}
                  </Text>
                  {item.name.main}
                </Text>
                <Flex direction={'column'} gap={'15px'} justify={'space-between'}>
                  <Text lineClamp={2} maw={'160px'} w={'160px'} ta='center' fw={700} size={'xs'}>
                    <Text opacity={0.6} span lineClamp={2} maw={'160px'} w={'160px'} ta='center' fw={700} size={'xs'}>
                      {item.genres.map((genre: any) => genre.name).join(' ⋅ ')}
                    </Text>
                    Вышла {item.latest_episode.ordinal} серия из {item.episodes_total ? item.episodes_total : '?'}
                  </Text>

                  <Button color='gray'>Смотреть</Button>
                </Flex>
              </Flex>
            </Container>
          </Container>
        </Carousel.Slide>
      ))}
    </>
  )
}
