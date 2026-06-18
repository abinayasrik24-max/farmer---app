'use client'
import Link from 'next/link'
import { useAuth } from './useAuth'

export default function Navbar() {
  const { isLoggedIn, farmerName } = useAuth()
  // rest of code...
}