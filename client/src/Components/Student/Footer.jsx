import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 md:px-16 lg:px-1 py-10 w-full">
      <div className="max-w-7xl mx-auto md:grid-cols-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
       
        <div>
          <div className="flex items-center  mb-4">
            
             
              <img src={assets.logo} className='text-white' alt="" />
           

          </div>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <hr className="border-gray-700 my-6" />

      
      <p className="text-gray-500 text-sm text-center">
        Copyright 2024 © GreatStack. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
