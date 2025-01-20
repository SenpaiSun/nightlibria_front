'use client'
import { Button, Container, Flex } from '@mantine/core'
import React from 'react'
import { Text } from '@mantine/core'

interface GenresInfoProps {
  nameRealeses: string
}

export const GenresInfo: React.FC<GenresInfoProps> = ({ nameRealeses }) => {
  return (
    <>
    <Container className=' group-hover:hidden group-hover:cursor-pointer '>
      <Flex c={'white'} bg={'gray.8'}  bd={'1px solid white'} p={'2px 4px'} pos={'absolute'} gap={0} direction={'column'} h={'max-content'} mah={'100%'} justify={'space-between'} top={20} left={'50%'} style={{ width: 'max-content', height: 'max-content', transform: 'translateX(-50%)', maxWidth: '150%', padding: '0px', borderRadius: '10px' }}>
        <Text  lineClamp={4} maw={'160px'} w={'max-content'} ta='center' fw={700} size={'md'}>
          {nameRealeses}
        </Text>
      </Flex>
    </Container>

      <Container className='hidden group-hover:flex group-hover:cursor-pointer '>
        <Flex  pos={'absolute'} gap={0} direction={'column'} h={'80%'} mah={'100%'} justify={'space-between'} top={23} left={'50%'} style={{ transform: 'translateX(-50%)', maxWidth: '150%', padding: '0px' }}>
          <Text lineClamp={4} maw={'160px'} w={'160px'} ta='center' fw={700} size={'md'}>
            {nameRealeses}
          </Text>
          <Button color='gray'>Перейти</Button>
        </Flex>
      </Container>
    </>
  )
}
