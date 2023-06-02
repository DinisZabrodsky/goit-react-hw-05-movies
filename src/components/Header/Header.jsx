import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import cssHeader from './Header.module.css'

export function Header () {
    return <>
        <div className={cssHeader.header}>
            <div className={cssHeader.hedderConteiner}>
                <NavLink className={cssHeader.headerNavLink} to='/'>Home</NavLink>
                <NavLink className={cssHeader.headerNavLink} to='movie'>Movies</NavLink>
            </div>
        </div>
        <Suspense>
            <Outlet />
        </Suspense>
            
        
    </>
}