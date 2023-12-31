import React from 'react'
import { useContext } from 'react'
import FavouritesContext from '../contextStore/FavouriteContext'
import CollectionList from '../components/CollectionList'


function Favourites() {
  const favouritesCollectionsContext = useContext(FavouritesContext);

  let favouritePageContent;

  if (favouritesCollectionsContext.totalFavouritesCollections === 0) {
    favouritePageContent = <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">No Available Favourites Destinations.....!!!!</p> 
  } else {
    favouritePageContent = <CollectionList collections={favouritesCollectionsContext.favouritesCollections}/>
  }


  return (
    <div>

      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-8 m-20">
      <div className="dark:bg-gray-800 py-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold dark:text-white mb-4">Favourite Destinations</h3>
      </div>
    </div>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"> 
      {favouritePageContent}
    </div>
  </div>
    </div>
  )
}

export default Favourites
