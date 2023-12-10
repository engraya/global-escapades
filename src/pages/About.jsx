import React from 'react'
import { IoHeartSharp } from "react-icons/io5";
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


function About() {
  return (
    <div>
        <section className=" dark:bg-gray-900">
          <section className="dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
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
        </div>
            </div>
          </div>
        </section>
  </section>
    </div>

  )
}

export default About
