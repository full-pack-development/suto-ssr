import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavLink = ({
  // required props
  href,

  // container props

  // optional props
  children = null,
  className = '',
  activeClassName = '',
}) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={classNames(
          className,
          {
            [activeClassName]: router.pathname === href,
          },
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
