
import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export function Header () {
    return <>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='movie'>Movies</NavLink>
        </div>
        <Suspense>
            <Outlet />
        </Suspense>
            
        
    </>
}