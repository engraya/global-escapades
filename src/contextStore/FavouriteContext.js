import { createContext, useState, useEffect } from "react";

const contextObject = {
    favouritesCollections: [],
    totalFavouritesCollections : 0,
    addFavourite : (favouriteCollection) => {},
    removeFavourite : (collectionId) => {},
    collectionIsFavourite : (collectionId) => {}
}

const FavouritesContext = createContext(contextObject);

export function FavouritesContextProvider(props) {
    const LOCAL_STOTAGE_KEY = "userFavourites"
    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouritesHandler = (favouriteCollection) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteCollection)
        });
    }

    useEffect(() => {
        const retrievedFavourites = JSON.parse(localStorage.getItem(LOCAL_STOTAGE_KEY));
        if (retrievedFavourites) setUserFavourites(retrievedFavourites)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STOTAGE_KEY, JSON.stringify(userFavourites))
    }, [userFavourites])

    const removeFavouritesHandler = (collectionId) => {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(collection => collection.id !== collectionId);
        })

    }

    const collectionIsFavouriteHandler = (collectionId) => {
        return userFavourites.some(collection => collection.id === collectionId)
    }

    const collectionsContext = {
        favouritesCollections : userFavourites,
        totalFavouritesCollections : userFavourites.length,
        addFavourite : addFavouritesHandler,
        removeFavourite : removeFavouritesHandler,
        collectionIsFavourite : collectionIsFavouriteHandler,
    }

    return <FavouritesContext.Provider value={collectionsContext}>
        {props.children}
    </FavouritesContext.Provider>
}


export default FavouritesContext;