import { NavLink } from '@mantine/core';
import React from 'react';
import { HeaderLinksProps } from './types';

export const HeaderLink: React.FC<HeaderLinksProps> = ({ headerLinksData }) => {
  return (
    <nav className='flex flex-row '>
      {headerLinksData.map((link, index) => (
        <NavLink key={index} w={'max-content'} label={link.label} href={link.href} leftSection={link.icon} />
      ))}
    </nav>
  );
};
