'use client'
import { Button, Container, Flex } from '@mantine/core'
import React from 'react'
import { Text } from '@mantine/core'

interface RealesesInfoProps {
  updatedAtRealeses: string
  nameRealeses: string
  genresRealeses: Array<string>
  currentSeriesRealeses: number
  totalSeriesRealeses: number
}

export const RealesesInfo: React.FC<RealesesInfoProps> = ({ updatedAtRealeses, nameRealeses, genresRealeses, currentSeriesRealeses, totalSeriesRealeses }) => {

  return (
    <>
      <Container className='hidden group-hover:flex group-hover:cursor-pointer '>
        <Flex className='' pos={'absolute'} gap={0} direction={'column'} h={'80%'} mah={'100%'} justify={'space-between'} top={20} left={'50%'} style={{ transform: 'translateX(-50%)', maxWidth: '150%', padding: '0px' }}>
          <Text lineClamp={4} maw={'160px'} w={'160px'} ta='center' fw={700} size={'md'}>
            <Text span lineClamp={4} maw={'160px'} w={'160px'} ta='center' fw={400} size={'xs'}>
              {updatedAtRealeses.split('T')[0]}
            </Text>
            {nameRealeses}
          </Text>
          <Flex direction={'column'} gap={'15px'} justify={'space-between'}>
            <Text lineClamp={2} maw={'160px'} w={'160px'} ta='center' fw={700} size={'xs'}>
              <Text opacity={0.6} span lineClamp={2} maw={'160px'} w={'160px'} ta='center' fw={700} size={'xs'}>
                {genresRealeses.map((genre: any) => genre.name).join(' ⋅ ')}
              </Text>
              Вышла {currentSeriesRealeses} серия из {totalSeriesRealeses ? totalSeriesRealeses : '?'}
            </Text>

            <Button color='gray'>Смотреть</Button>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
