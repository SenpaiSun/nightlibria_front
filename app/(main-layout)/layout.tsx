import { Header } from '@/src/shared/ui/header/header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
