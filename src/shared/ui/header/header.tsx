'use client'
import { ActionIcon } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useMantineColorScheme } from '@mantine/core'
import Logo from '../../image/for-header-logo/logo.svg'

export const Header: React.FC = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()

  return (
    <header>
      <ActionIcon variant='filled' color='gray' radius='lg' aria-label='Settings' onClick={() => toggleColorScheme()}>
        <Image src={Logo} alt='Custom Icon'  />
      </ActionIcon>
      <ActionIcon variant='filled' color='gray' radius='lg' aria-label='Settings' onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? <IconMoon style={{ width: '100%', height: '100%' }} stroke={1.5} /> : <IconSun style={{ width: '100%', height: '100%' }} stroke={1.5} />}
      </ActionIcon>
    </header>
  )
}
