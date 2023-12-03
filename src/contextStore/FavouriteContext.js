import { createContext, useState } from "react";

const contextObject = {
    favouritesCollectons: [],
    totalFavouritesCollections : 0.
}

const FavouritesContext = createContext(contextObject);

function FavouritesContextProvider(props) {

    const [userFavourites, setUserFvaourites] = useState([]);

    const addFavouritesHandler = () => {

    }

    const removeFavouritesHandler = () => {

    }

    const collectionIsFvaouriteHandler = () => {
        
    }


    const collectionsContext = {
        favouritesCollectons : userFavourites,
        totalFavouritesCollections : userFavourites.length,
    }

    return <FavouritesContext.Provider value={collectionsContext}>
        {props.children}
    </FavouritesContext.Provider>
}