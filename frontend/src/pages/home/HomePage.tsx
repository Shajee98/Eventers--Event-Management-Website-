import React from 'react'
import CallToAction from '../../components/cta/CallToAction'
import Header from '../../components/header/Header'
import Section from '../../components/section/Section'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <Section title="Our Events"/>
      <CallToAction />
      <Section title='Popular Venues'/>
    </div>
  )
}

export default HomePage