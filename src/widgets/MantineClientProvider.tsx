'use client'

import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export const MantineClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}><MantineProvider defaultColorScheme='dark' theme={DEFAULT_THEME}>{children}</MantineProvider></Provider>;
};
