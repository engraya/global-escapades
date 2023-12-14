import React from 'react'
import CollectionCard from './CollectionCard'

function CollectionList(props) {
  return (
    <div className='items-center justify-center grid grid-cols-2 md:grid-cols-4 gap-4'>
    {props.collections && props.collections.map(collection => (
        <CollectionCard 
        key={collection.id}
        id={collection.id} 
        title={collection.title} 
        image={collection.image}
        continent={collection.continent}
        country={collection.country}
        description={collection.description}
        />
    ))}

    </div>
  )
}

export default CollectionList
