import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoHeartSharp } from "react-icons/io5";
import { useContext } from 'react';
import FavouritesContext from '../contextStore/FavouriteContext';
import { FaHeartCircleXmark } from "react-icons/fa6";
import ImageDownloader from './ImageDownloader';


function CollectionDetail(props) {

    const { collectionId } = useParams()

  return (
    <div>
    <section className=" dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-1">
    <h6 className="mb-4 text-2xl font-extrabold text-cyan-600 tracking-tight py-3 leading-none md:text-3xl lg:text-3xl dark:text-white">Collection Detail</h6>
   <div> Colllection - {collectionId}</div>
  </div>

  </section>

    </div>
  )
}

export default CollectionDetail
