import React from 'react'
import { useContext } from 'react'
import FavouritesContext from '../contextStore/FavouriteContext'
import CollectionList from '../components/CollectionList'


function Favourites() {
  const favouritesCollectionsContext = useContext(FavouritesContext);

  let favouritePageContent;

  if (favouritesCollectionsContext.totalFavouritesCollections === 0) {
    favouritePageContent =     <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">No Available Favourites Collections.....!!!!</p> 
  } else {
    favouritePageContent =     <CollectionList collections={favouritesCollectionsContext.favouritesCollections}/>
  }


  return (
    <div>
    <section className=" dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-8">
    <h6 className="mb-4 text-2xl font-extrabold text-cyan-600 tracking-tight leading-none md:text-3xl lg:text-3xl dark:text-white">Favourites Collections</h6>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"> 
      {favouritePageContent}
    </div>
  </div>
  </section>
    </div>
  )
}

export default Favourites
