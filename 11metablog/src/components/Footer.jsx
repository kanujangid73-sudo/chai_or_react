import React from 'react'

function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-gray-400 text-center border-t border-gray-700 text-sm">
      <p>© {new Date().getFullYear()} MetaBlog Extended. All rights reserved.</p>
    </footer>
  )
}

export default Footer