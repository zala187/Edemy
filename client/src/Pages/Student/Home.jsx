import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CourseSection from '../../Components/Student/CourseSection'
import TestiMonialSection from '../../Components/Student/TestiMonialSection'
import CallToAction from '../../Components/Student/CallToAction'
import Footer from '../../Components/Student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-7'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestiMonialSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
