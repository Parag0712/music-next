import { Card } from '@/components/Card'
import HeroSection from '@/components/HeroSection'
import React from 'react'


function page() {

  return (
    
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] '>
      <HeroSection />
      <Card/>            
    </main>
  )
}

export default page