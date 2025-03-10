import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CarouselProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  title: string
}