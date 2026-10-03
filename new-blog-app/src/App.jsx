import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import conf from './conf/conf.js'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#111', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
        🎉 Appwrite Auth & Redux Toolkit Linked!
      </h1>
      <p style={{ fontSize: '18px', color: '#ccc' }}>
        CMD 2 Active: Auth Service Initialized & Redux Store Ready.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '1.8', marginTop: '20px' }}>
        <li>Database ID: <strong>{conf.appwriteDatabaseId}</strong></li>
        <li>Collection ID: <strong>{conf.appwriteCollectionId}</strong></li>
        <li>Bucket ID: <strong>{conf.appwriteBucketId}</strong></li>
      </ul>
    </div>
  ) : (
    <div style={{ padding: '30px', color: '#fff', backgroundColor: '#111', minHeight: '100vh', textAlign: 'center' }}>
      <h2 style={{ color: '#ffffff' }}>Loading Auth State...</h2>
    </div>
  )
}

export default App;