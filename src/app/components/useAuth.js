'use client'
import { useState, useEffect } from 'react'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [farmerName, setFarmerName] = useState('')

  useEffect(() => {
    const farmer = localStorage.getItem('farmer')
    if (farmer) {
      const data = JSON.parse(farmer)
      setIsLoggedIn(true)
      setFarmerName(data.name)
    }
  }, [])

  return { isLoggedIn, farmerName }
}