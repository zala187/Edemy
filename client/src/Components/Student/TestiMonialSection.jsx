import React from 'react'
import { dummyTestimonial, assets } from '../../assets/assets'

const TestiMonialSection = () => {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
        <p className="text-gray-500 mt-3 max-w-3xl">
          Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {dummyTestimonial.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Avatar */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 rounded-full object-cover mb-4"
              />

              {/* Name + role */}
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 mt-1">{item.role}</p>

              {/* Stars */}
              <div className="flex mt-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={assets.star} alt="star" className="w-4 h-4" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 mt-3 leading-relaxed">{item.feedback}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TestiMonialSection
