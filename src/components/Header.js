import { useState } from 'react'
import { useEffect } from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

function Header() {
    let [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    })
    return (
      <header className="header">
        {width >= 699 ? <DesktopNav /> : <MobileNav />}
      </header>
    );
}

export default Header