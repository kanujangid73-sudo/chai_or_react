import React from 'react';
import Container from './container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { logout } from '../store/authSlice';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  const navItems = [
    { name: 'Home', slug: "/", active: true }, 
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className='py-3 shadow bg-gray-900 border-b border-gray-800 text-white'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/' className='font-bold text-xl text-indigo-400'>
              MetaBlog
            </Link>
          </div>
          <ul className='flex ml-auto items-center gap-4'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-4 py-2 duration-200 hover:bg-gray-800 rounded-full font-medium'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <button
                  onClick={logoutHandler}
                  className='inline-block px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full font-medium text-white'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;