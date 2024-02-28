import { Card } from '@/components/Card'
import HeroSection from '@/components/HeroSection'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import {CardMove}  from '@/components/CardMove'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import React from 'react'
import FeaturedWebinar from '@/components/FeaturedWebinar'
import Instructor from '@/components/Instructor'



function page() {

  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] '>
          <HeroSection />
          <Card/>        
          <WhyChooseUs />
          <CardMove />
          <FeaturedWebinar />
          <Instructor />
    </main>
  )
}

export default page