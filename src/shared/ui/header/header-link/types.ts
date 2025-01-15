import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderLinkProps {
  label: string
  href: string
  icon: React.ReactNode
}

export interface HeaderLinksProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  headerLinksData: HeaderLinkProps[]
}

