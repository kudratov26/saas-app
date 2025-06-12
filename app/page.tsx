import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Pupular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='science'
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id='423'
          name='Counsty the number Wizard'
          topic='Derivatives & Integrals'
          subject='math'
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id='243'
          name='Verba the Vocabulary Builder'
          topic='language'
          subject='English Literature'
          duration={30}
          color="#bde7f5"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page