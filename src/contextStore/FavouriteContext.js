import { createContext, useState } from "react";

const contextObject = {
    favouritesCollections: [],
    totalFavouritesCollections : 0,
    addFavourite : (favouriteCollection) => {},
    removeFavourite : (collectionId) => {},
    collectionIsFavourite : (collectionId) => {}
}

const FavouritesContext = createContext(contextObject);

export function FavouritesContextProvider(props) {

    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouritesHandler = (favouriteCollection) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteCollection)
        });
    }

    const removeFavouritesHandler = (collectionId) => {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(collection => collection.id !== collectionId);
        })

    }

    const collectionIsFvaouriteHandler = (collectionId) => {
        return userFavourites.some(collection => collection.id === collectionId)
    }

    const collectionsContext = {
        favouritesCollectons : userFavourites,
        totalFavouritesCollections : userFavourites.length,
        addFavourite : addFavouritesHandler,
        removeFavourite : removeFavouritesHandler,
        collectionIsFavourite : collectionIsFvaouriteHandler,
    }

    return <FavouritesContext.Provider value={collectionsContext}>
        {props.children}
    </FavouritesContext.Provider>
}


export default FavouritesContext;