import React from 'react'
import { Container, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500 text-white'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <span className='font-bold text-xl text-white'>Logo</span>
            </Link>
          </div>
          <ul className='flex items-center space-x-2 list-none m-0 p-0'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='list-none'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full font-medium'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='list-none'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header