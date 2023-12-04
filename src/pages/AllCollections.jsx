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
      <div>
    <section className=" dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-8">
    <h6 className="mb-4 text-2xl font-extrabold text-cyan-600 tracking-tight leading-none md:text-3xl lg:text-3xl dark:text-white">Collections</h6>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"> 
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Loading Collections.....!!!!</p> 
    </div>
  </div>
  </section>

    </div>
    )
  }
  return (
    <div>
      <section className=" dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-8">
    <h6 className="mb-4 text-2xl font-extrabold text-cyan-600 tracking-tight leading-none md:text-3xl lg:text-3xl dark:text-white">Collections</h6>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"> 
    <CollectionList collection={loadedCollections}/>
    </div>
  </div>
  </section>

    </div>
  )
}

export default AllCollections
















