import React from 'react'
import { Link } from 'react-router-dom';
import paris from '../images/eiffel tower.jpg'
import giza from '../images/giza.jpg'
import kaaba from '../images/kaaba.jpg'
import medina from '../images/medina.jpg'
import mekka from '../images/mekkah.jpg'
import tajmahal from '../images/taj mahal.jpg'
import timbuktu from '../images/timbuktu.jpg'
import venice from '../images/venice.jpg'
import zanzibar from '../images/zanzibar.jpg'
import ayasofya from '../images/ayasofya.jpg'


function HomePage() {
  return (
    <div>
    <section className=" dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
      <div className='m-8'>
      <h3 className="mb-4 text-xl font-extrabold text-cyan-600 tracking-tight leading-none md:text-2xl lg:text-5xl dark:text-white">Explore our world’s potentials with <br /><span className='self-center text-4xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400 underline underline-offset-1 decoration-8 decoration-blue-400 dark:decoration-blue-600'>"Global Escapades" <br /></span>Your Passport to Beauty</h3>
    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">"Embark on a journey of discovery with Global Escapades, your passport to the world's most breathtaking destinations. Immerse yourself in the beauty, culture, and wonders of global landscapes—all from the comfort of your screen."</p>
      </div>
    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-y-3 m-3">
      <Link to="/collections"><button type="button" className="text-white inline-flex justify-center items-center py-3 px-8 text-base font-medium bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-center me-3">Get started
      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg></button></Link>  
        
    </div>
  </div>
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-1">
    <div className=" dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-4">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <img className="h-auto max-w-full rounded-lg" src={zanzibar} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={giza} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={kaaba} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={medina} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={mekka} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={tajmahal} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={timbuktu} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={venice} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={paris} alt="" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={ayasofya} alt="" />
  </div>
</div>

    </div>
    <div className="grid md:grid-cols-2 gap-8">
  <div className="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
      <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
      </svg>
      Explore
    </a>
    <h2 className="dark:text-white text-3xl font-extrabold mb-2">Embark on a Journey with Global Escapades</h2>
    <p className="text-lg font-normal dark:text-gray-400 mb-4">Discover the most enchanting places around the world and plan your next adventure with Global Escapades. Our platform is your passport to beauty, culture, and unforgettable experiences.</p>
  </div>
  <div className="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
      <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
      </svg>
      Discover
    </a>
    <h2 className="dark:text-white text-3xl font-extrabold mb-2">Uncover Hidden Gems with Global Escapades</h2>
    <p className="text-lg font-normal dark:text-gray-400 mb-4">Dive into the world's best-kept secrets and immerse yourself in the beauty of diverse cultures. Global Escapades curates the finest destinations and experiences for your exploration.</p>
  </div>
</div>

  </div>
</section>


    </div>
  )
}

export default HomePage
