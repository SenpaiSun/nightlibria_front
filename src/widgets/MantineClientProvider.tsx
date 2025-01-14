'use client'

import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

export const MantineClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider theme={DEFAULT_THEME}>{children}</MantineProvider>;
};
