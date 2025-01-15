import { Header } from '@/src/shared/ui/header/header'
import { linksData } from '@/src/entities/for-header-links/linksData'
import { IconMoon, IconSun } from '@tabler/icons-react'
import Logo from '../../src/shared/image/for-header-logo/logo.svg'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header logo={Logo} headerLinksData={linksData} darkThemeIcon={<IconMoon style={{ width: '100%', height: '100%' }} stroke={1.5} />} lightThemeIcon={<IconSun style={{ width: '100%', height: '100%' }} stroke={1.5} />} />
      {children}
    </div>
  )
}

export default MainLayout
