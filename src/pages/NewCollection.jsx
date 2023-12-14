import React from 'react'
import CollectionForm from '../components/CollectionForm'
import { useNavigate } from 'react-router-dom'

function CreateCollection() {
  const navigate = useNavigate();

  const onAddCollectionHandler = (collectionData) => {
    const realTimeDbUrl = 'https://react-collections-66c79-default-rtdb.firebaseio.com/collections.json'

    fetch(realTimeDbUrl,
       {
        method : 'POST',
        body : JSON.stringify(collectionData),
        headers : {
          'Content-Type' : 'application/json'
        }
       }).then(() => {
        navigate('/collections');
       })
  }

  return (
    <div>
    <section className=" dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-1">
    <h6 className="mb-4 text-2xl font-extrabold text-cyan-600 tracking-tight py-3 leading-none md:text-3xl lg:text-3xl dark:text-white">Create Collection</h6>
  </div>
  </section>
      <CollectionForm onAddCollection={onAddCollectionHandler}/>
    </div>
  )
}

export default CreateCollection
