import {HeaderLinkProps} from './header-link/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  headerLinksData: HeaderLinkProps[]
  logo: string
  darkThemeIcon: React.ReactNode
  lightThemeIcon: React.ReactNode
}