import React from 'react'
import CollectionList from '../components/CollectionList'
import { useState, useEffect } from 'react'

function AllCollections(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCollections, setLoadedCollections] = useState([])


  useEffect(() => {
    setIsLoading(true)
    const realTimeDbUrl = 'https://react-collections-66c79-default-rtdb.firebaseio.com/collections.json'

    fetch(realTimeDbUrl).then(response => {
      return response.json();
    }).then((data) => {
      const collections = [];

      for(const key in data) {
        const collection ={
          id : key,
          ...data[key]
        };
        collections.push(collection)
      }
      setIsLoading(false)
      setLoadedCollections(collections)
    });
  }, []);

  if (isLoading) {
    return (
      <div className='flex m-5 py-4 space-x-4 text-center'>

      <p>Loading Data................!</p>

    </div>
    )
  }
  return (
    <div className='flex m-5 py-4 space-x-4 text-center'>

      <CollectionList collection={loadedCollections}/>

    </div>
  )
}

export default AllCollections
