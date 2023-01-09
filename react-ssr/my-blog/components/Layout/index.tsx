import type { NextPage } from 'next'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { ReactNode } from 'react';

export interface LoyoutProps {
  children?: ReactNode
}

const Layout: NextPage<LoyoutProps> = ({children}:LoyoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout