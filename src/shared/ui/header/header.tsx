'use client'
import { ActionIcon } from '@mantine/core'
import Image from 'next/image'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useMantineColorScheme } from '@mantine/core'
import Logo from '../../image/for-header-logo/logo.svg'
import React, { useState, useEffect } from 'react'

export const Header: React.FC = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()

  // Cостояние, чтобы отслеживать, был ли компонент смонтирован на клиенте
  const [mounted, setMounted] = useState(false)

  // Этот эффект запускается только на клиенте, когда компонент будет смонтирован
  useEffect(() => {
    setMounted(true)
  }, [])

  // Пока компонент не смонтирован, возвращаем null, чтобы избежать гидрационной ошибки
  if (!mounted) {
    return null
  }

  return (
    <header>
      <ActionIcon variant='filled' color='gray' radius='lg' style={{ width: '50px', height: '100%' }} onClick={() => toggleColorScheme()}>
        <Image src={Logo} alt='Custom Icon' width={100} />
      </ActionIcon>
      <ActionIcon variant='filled' color='gray' radius='lg' onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? <IconMoon style={{ width: '100%', height: '100%' }} stroke={1.5} /> : <IconSun style={{ width: '100%', height: '100%' }} stroke={1.5} />}
      </ActionIcon>
    </header>
  )
}