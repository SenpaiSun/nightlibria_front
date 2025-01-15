'use client'
import { ActionIcon } from '@mantine/core'
import Image from 'next/image'
import { useMantineColorScheme } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import { HeaderLink } from './header-link/header-link'
import { HeaderProps } from './types'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

export const Header: React.FC<HeaderProps> = ({ headerLinksData, darkThemeIcon, lightThemeIcon, logo }) => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()
  const router = useRouter()

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
    <header className={clsx('flex justify-between p-2 align-center justify-center items-center', colorScheme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white border-b border-gray')}>
      <ActionIcon variant='light' color='gray' radius='lg' style={{ width: '50px', height: '100%' }} onClick={() => router.push('/')}>
        <Image src={logo} alt='Custom Icon' width={100} />
      </ActionIcon>
      <HeaderLink headerLinksData={headerLinksData} />
      <ActionIcon variant='filled' color='gray' radius='lg' h={'max-content'} onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? darkThemeIcon : lightThemeIcon}
      </ActionIcon>
    </header>
  )
}