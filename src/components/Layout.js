import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <header>
                this is heading
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                this is footer
            </footer>
        </div>
    )
}

export default Layout