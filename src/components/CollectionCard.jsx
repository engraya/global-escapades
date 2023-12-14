import React from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { useContext } from 'react';
import FavouritesContext from '../contextStore/FavouriteContext';
import { FaHeartCircleXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function CollectionCard(props) {
  const favouritesCollectionContext = useContext(FavouritesContext);

  const collectionIsFavourite = favouritesCollectionContext.collectionIsFavourite(props.id)

  const toggleCollectionFavouriteStatusHandler = () => {
    if (collectionIsFavourite) {
      favouritesCollectionContext.removeFavourite(props.id);
    } else {
      favouritesCollectionContext.addFavourite({
        id : props.id,
        title : props.title,
        image : props.image,
        continent : props.continent,
        country : props.country,
        description : props.description
      });
    }

  }

  return (
    <div className='flex flex-wrap m-5 space-x-4 text-center'>
      <div className="max-w-sm border border-gray-200 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/collections/${props.id}`}><a>
          <img className="rounded-t-lg" src={props.image} alt="" />
        </a>
        </Link>
        <div className="p-5">
          <a href="#">
            <Link to={`/destinations/${props.id}`}><h6 className="mb-0 text-xl font-bold tracking-tight dark:text-white">{props.title}</h6></Link>
          </a>
         <i className="mb-font-normal dark:text-gray-400">{props.continent}</i><br />
         <small className="mb-0 font-normal dark:text-gray-400">{props.country}</small><br />
          <div className="flex items-center justify-center my-3">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          {/* <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-small rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><ImageDownloader imageUrl={props.image} filename={props.title}/></button> */}
          {collectionIsFavourite ? <button onClick={toggleCollectionFavouriteStatusHandler} type="button" class="text-white bg-gradient-to-r from-red-400 via-orange-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FaHeartCircleXmark /></button> : <button onClick={toggleCollectionFavouriteStatusHandler} type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><IoHeartSharp /></button>}
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
